import { createI18n } from "vue-i18n/index";

const messages = {
  en: {
    dashboard: "Dashboard",
    layoutBuilder: "Layout builder",
    craft: "Crafted",
    pages: "Pages",
    profile: "Profile",
    profileOverview: "Overview",
    projects: "Projects",
    campaigns: "Campaigns",
    documents: "Documents",
    connections: "Connections",
    wizards: "Wizards",
    horizontal: "Horizontal",
    vertical: "Vertical",
    account: "Account",
    accountOverview: "Overview",
    settings: "Settings",
    authentication: "Authentication",
    basicFlow: "Basic Flow",
    signIn: "Sign-in",
    signUp: "Sign-up",
    passwordReset: "Password Reset",
    error404: "Error 404",
    error500: "Error 500",
    apps: "Apps",
    chat: "Chat",
    privateChat: "Private Chat",
    groupChat: "Group Chat",
    drawerChat: "Drawer Chat",
    widgets: "Widgets",
    widgetsLists: "Lists",
    widgetsStatistics: "Statistics",
    widgetsCharts: "Charts",
    widgetsMixed: "Mixed",
    widgetsTables: "Tables",
    widgetsFeeds: "Feeds",
    changelog: "Changelog",
    docsAndComponents: "Docs & Components",
    megaMenu: "Mega Menu",
    exampleLink: "Example link",
    modals: "Modals",
    general: "General",
    inviteFriends: "Invite Friends",
    viewUsers: "View Users",
    upgradePlan: "Upgrade Plan",
    shareAndEarn: "Share & Earn",
    forms: "Forms",
    newTarget: "New Target",
    newCard: "New Card",
    newAddress: "New Address",
    createAPIKey: "Create API Key",
    twoFactorAuth: "Two Factor Auth",
    createApp: "Create App",
    createAccount: "Create Account",
    documentation: "Documentation",
    components: "Components",
    resources: "Resources",
    activity: "Activity",
    customers: "Customers",
    gettingStarted: "Getting Started",
    customersListing: "Customers Listing",
    customerDetails: "Customers Details",
    calendarApp: "Calendar",
    subscriptions: "Subscriptions",
    getStarted: "Getting Started",
    subscriptionList: "Subscription List",
    addSubscription: "Add Subscription",
    viewSubscription: "View Subscription",
  },
  ch: {
    dashboard: "主面板",
    layoutBuilder: "布局",
    craft: "精选",
    tools: "工具",
    crypto: "密码学",
    cryptoMd5: "md5加密",
    pages: "Pages",
    profile: "Profile",
    profileOverview: "Overview",
    projects: "Projects",
    campaigns: "Campaigns",
    documents: "文档",
    connections: "Connections",
    resources: "资源",
    wizards: "Wizards",
    horizontal: "Horizontal",
    vertical: "Vertical",
    account: "账户",
    accountOverview: "Overview",
    settings: "Settings",
    authentication: "Authentication",
    basicFlow: "Basic Flow",
    signIn: "Sign-in",
    signUp: "Sign-up",
    passwordReset: "Password Reset",
    error404: "我没了",
    error500: "我做错了",
    apps: "Apps",
    chat: "Chat",
    privateChat: "Private Chat",
    groupChat: "Group Chat",
    drawerChat: "Drawer Chat",
    widgets: "Widgets",
    widgetsLists: "Lists",
    widgetsStatistics: "Statistics",
    widgetsCharts: "Charts",
    widgetsMixed: "Mixed",
    widgetsTables: "Tables",
    widgetsFeeds: "Feeds",
    changelog: "更改日志",
    docsAndComponents: "Docs & Components",
    megaMenu: "Mega Menu",
    exampleLink: "Example link",
    modals: "Modals",
    general: "General",
    inviteFriends: "Invite Friends",
    viewUsers: "View Users",
    upgradePlan: "Upgrade Plan",
    shareAndEarn: "Share & Earn",
    forms: "Forms",
    newTarget: "New Target",
    newCard: "New Card",
    newAddress: "New Address",
    createAPIKey: "Create API Key",
    twoFactorAuth: "Two Factor Auth",
    createApp: "创建应用",
    createAccount: "Create Account",
    documentation: "文件",
    components: "Components",
    activity: "活动",
    customers: "Customers",
    gettingStarted: "Getting Started",
    customersListing: "Customers Listing",
    customerDetails: "Customers Details",
    calendarApp: "Calendar",
    subscriptions: "Subscriptions",
    getStarted: "Getting Started",
    subscriptionList: "Subscription List",
    addSubscription: "Add Subscription",
    viewSubscription: "View Subscription",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ch",
  globalInjection: true,
  messages,
});

export default i18n;
