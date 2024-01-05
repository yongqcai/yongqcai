<template>
  <div class="nav_bar">
    <div class="nav_bar_l">
      <img
        class="nav_back_icon"
        src="@/assets/svgs/back.svg"
        @click="$router.back()"
      />
      <span class="title" v-show="title">{{ $t(title) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: { type: String, default: "" } },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="less">
.nav_bar {
  position: relative;
  width: 100%;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  .nav_bar_l {
    display: flex;
    align-items: center;
    .nav_back_icon {
      width: 24px;
      height: 24px;
      margin-right: 12px;
      background: url("@/assets/svgs/back.svg");
    }
    .title {
      font-size: 18px;
      color: @main-text-color;
    }
  }
}
</style>
