// router - intex.ts
// import { storeToRefs } from 'pinia'
// import { loginStore } from '@/store/login'
// append import
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/home/index",
    component: () => import("@/views/Home/index.vue"),
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/Home/index.vue"),
        meta: { title: "首页", showNavbar: false, showTabBar: true },
      },
      // {
      //   path: 'profile',
      //   name: 'Profile',
      //   component: () => import('@/views/home/profile.vue'),
      //   meta: { title: '我的', showNavbar: false }
      // },
      // {
      //   path: 'components',
      //   name: 'Components',
      //   component: () => import('@/views/home/components.vue'),
      //   meta: { title: '我的', showNavbar: false }
      // }
    ],
  },
  {
    path: "/my",
    name: "My",
    component: () => import("@/views/My/My.vue"),
    meta: { title: "我的", showNavbar: false },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue"),
    meta: { title: "登录", showNavbar: false },
    // beforeEnter: (_to: any, _from: any, next: any) => {
    //   const store = loginStore()
    //   const { token } = storeToRefs(store)
    //   token.value ? next('/') : next()
    // }
  },
  {
    path: "/language",
    name: "Language",
    component: () => import("@/views/My/Language/Language.vue"),
    meta: { title: "语言", showNavbar: false },
  },
  {
    path: "/personalInfo",
    name: "PersonalInfo",
    component: () => import("@/views/My/PersonalInfo/PersonalInfo.vue"),
    meta: { title: "个人信息", showNavbar: false },
  },
  {
    path: "/notification",
    name: "Notification",
    component: () => import("@/views/My/Notification/Notification.vue"),
    meta: { title: "通知", showNavbar: false },
  },
  {
    path: "/protocol",
    name: "Protocol",
    component: () => import("@/views/My/Protocol/Protocol.vue"),
    meta: { title: "协议", showNavbar: false },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/My/Auth/Auth.vue"),
    meta: { title: "认证", showNavbar: false },
  },
  {
    path: "/password",
    name: "Password",
    component: () => import("@/views/My/Password/Password.vue"),
    meta: { title: "密码", showNavbar: false },
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import("@/views/My/FAQ/FAQ.vue"),
    meta: { title: "密码", showNavbar: false },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
