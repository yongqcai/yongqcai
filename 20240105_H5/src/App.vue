<template>
  <van-nav-bar
    v-if="showNavbar"
    :title="$t((route.meta.title as string))"
    left-arrow
    @click-left="router.back()"
    class="nav_bar"
    fixed
    placeholder
    border
  >
  </van-nav-bar>
  <!-- <router-view /> -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <van-tabbar v-if="showTabBar">
    <van-tabbar-item
      v-for="item in tabs"
      :key="item.name"
      @click="router.push(item.path)"
    >
      <span>{{ $t(item.name) }}</span>
      <template #icon>
        <img :src="item.active ? item.activeImg : item.inactiveImg" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
// import path from "path";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Home from "@/assets/svgs/America.svg";
import HomeActive from "@/assets/svgs/Japan.svg";
const route = useRoute();
const router = useRouter();
const showNavbar = computed(() => {
  return route.meta.showNavbar;
});
const showTabBar = computed(() => {
  return route.meta.showTabBar;
});
const active = ref("");
const tabs = ref([
  {
    id: "0",
    name: "首页",
    activeImg: HomeActive,
    inactiveImg: Home,
    active: true,
    path: "/login",
  },
  {
    id: "1",
    name: "首页1",
    activeImg: Home,
    inactiveImg: Home,
    active: false,
    path: "/login",
  },
  {
    id: "2",
    name: "首页1",
    activeImg: Home,
    inactiveImg: Home,
    active: false,
    path: "/language",
  },
  {
    id: "3",
    name: "首页1",
    activeImg: Home,
    inactiveImg: Home,
    active: false,
    path: "/language",
  },
  {
    id: "4",
    name: "我的",
    activeImg: Home,
    inactiveImg: Home,
    active: false,
    path: "/my",
  },
]);

watch(
  () => active.value,
  (val: string) => {
    console.log(val);
    tabs.value = tabs.value.map((item) => {
      return {
        ...item,
        active: item.id == val, // 将选中的选项的 active 设置为 true，其他为 false
      };
    });
  }
);
</script>

<style lang="less">
p {
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.van-nav-bar__right:last-child .van-nav-bar__text {
  color: #ea445a !important; /* 设置右侧文字颜色为红色 */
  font-weight: 600;
}
</style>
