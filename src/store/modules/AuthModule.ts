import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface UserLoginRes {
  user: User;
  api_token: string;
  expiresAt: string;
}

export interface UserAuthInfo {
  errors: unknown;
  res: UserLoginRes;
  isAuthenticated: boolean;
  token: unknown;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  token = JwtService.getToken();
  errors = {};
  res = {} as UserLoginRes;
  isAuthenticated = !!JwtService.getToken();

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): User {
    return this.res.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get authentification errors
   * @returns array
   */
  get getErrors() {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = { ...error };
  }

  @Mutation
  [Mutations.SET_AUTH](res: UserLoginRes) {
    this.isAuthenticated = true;
    this.errors = {};
    JwtService.saveToken(res.api_token);
  }

  @Mutation
  [Mutations.SET_USER](user: User) {
    this.res.user = user;
  }

  @Mutation
  [Mutations.SET_PASSWORD](password) {
    this.res.user.password = password;
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.res.user = {} as User;
    this.errors = [];
    JwtService.destroyToken();
  }

  @Action
  [Actions.LOGIN](credentials) {
    return ApiService.post("portal/login", credentials)
      .then(({ data }) => {
        console.log(data.data);
        this.context.commit(Mutations.SET_AUTH, data.data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.LOGOUT]() {
    this.context.commit(Mutations.PURGE_AUTH);
  }

  @Action
  [Actions.REGISTER](credentials) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_AUTH, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    return ApiService.post("forgot_password", payload)
      .then(() => {
        this.context.commit(Mutations.SET_ERROR, {});
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.VERIFY_AUTH](payload) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("portal/verify_token", payload)
        .then(() => {
          // this.context.commit(Mutations.SET_AUTH, data);
        })
        .catch(({ response }) => {
          console.log(response);
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          this.context.commit(Mutations.PURGE_AUTH);
        });
    } else {
      this.context.commit(Mutations.PURGE_AUTH);
    }
  }
}
