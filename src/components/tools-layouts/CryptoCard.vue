<template>
  <!--begin::Card-->
  <div class="card" ref="newTargetModalRef">
    <!--begin::Card header-->

    <!--end:: Card header-->

    <!--begin:: Card body-->
    <div class="card-body p-9">
      <!--begin:Form-->
      <el-form
        id="gs_crypto-card_form"
        @submit.prevent="submit()"
        :model="targetData"
        ref="formRef"
        class="form row"
      >
        <div class="col-xl-6">
          <el-input
            type="textarea"
            class="form-control form-control-solid mb-8"
            rows="8"
            placeholder="请输入明文"
            v-model="targetData.plaintext"
          >
          </el-input>
        </div>
        <div class="col-xl-6">
          <el-input
            type="textarea"
            class="form-control form-control-solid mb-8"
            rows="8"
            placeholder="加密后密文"
            v-model="targetData.ciphertext"
          >
          </el-input>
        </div>

        <!--begin::Actions-->
        <div class="text-center">
          <button
            type="reset"
            id="kt_modal_new_target_cancel"
            class="btn btn-white me-3"
          >
            取消
          </button>

          <!--begin::Button-->
          <button
            :data-kt-indicator="loading ? 'on' : null"
            class="btn btn-lg btn-primary"
            type="submit"
          >
            <span v-if="!loading" class="indicator-label">
              提交
              <span class="svg-icon svg-icon-3 ms-2 me-0">
                <inline-svg src="icons/duotune/arrows/arr064.svg" />
              </span>
            </span>
            <span v-if="loading" class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
          <!--end::Button-->
        </div>
        <!--end::Actions-->
      </el-form>
      <!--end:Form-->
    </div>
    <!--end:: Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import ApiService from "@/core/services/ApiService";
import { defineComponent, computed, ref, reactive } from "vue";

interface CryptoData {
  plaintext: string;
  ciphertext: string;
  name: string;
  mode: string;
}

export default defineComponent({
  name: "crypto-card",
  components: {},

  props: {
    progress: Number,

    icon: String,

    date: String,
  },
  setup(props) {
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formRef = ref<null | HTMLFormElement>(null);

    const targetData = reactive<CryptoData>({
      plaintext: "",
      name: "MD5",
      ciphertext: "",
      mode: "0",
    });

    const getDate = computed(() => {
      return props.date ? props.date : "Feb 21, 2021";
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      loading.value = true;
      ApiService.post("tools/crypto/hash", targetData as never)
        .then(({ data }) => {
          targetData.ciphertext = data.data;
        })
        .finally(() => {
          loading.value = false;
        });
    };

    return {
      submit,
      targetData,
      formRef,
      loading,
      getDate,
      newTargetModalRef,
    };
  },
});
</script>
