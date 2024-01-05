<template>
  <div class="PersonalInfo-wrapper">
    <div class="PersonalInfo-wrapper-nav">
      <div class="PersonalInfo-wrapper-nav-l">
        <img
          @click="router.back()"
          class="PersonalInfo-wrapper-nav-back"
          src="@/assets/svgs/back.svg"
          alt=""
        />
        <span class="title">{{ $t("个人信息") }}</span>
      </div>
    </div>
    <div class="main">
      <div class="info">
        <div class="info-l">{{ $t("昵称") }}</div>
        <div class="info-r">
          余温 <img src="@/assets/svgs/arrow-r.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="main">
      <div class="info">
        <div class="info-l">
          <p>{{ $t("郵箱") }}</p>
          <p class="info-l-text">li**@**.com</p>
        </div>
        <div class="info-r">
          {{ $t("修改") }} <img src="@/assets/svgs/arrow-r.svg" alt="" />
        </div>
      </div>
      <div class="info">
        <div class="info-l">
          <p>{{ $t("手机号") }}</p>
        </div>
        <div class="info-r">
          136****123 <img src="@/assets/svgs/arrow-r.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { showSuccessToast, showFailToast } from "vant";
import { useRouter } from "vue-router";
// import { reactive, toRefs, ref } from "vue";

const router = useRouter();
</script>

<style lang="less" scoped>
.PersonalInfo-wrapper {
  width: 100%;
  height: 200px;
  background: url("@/assets/svgs/bg-green.svg");
  background-size: cover;
  z-index: -1;
  padding: 17px;
  box-sizing: border-box;
  .PersonalInfo-wrapper-nav {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .PersonalInfo-wrapper-nav-l {
      display: flex;
      align-items: center;
      .PersonalInfo-wrapper-nav-back {
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
    .PersonalInfo-wrapper-nav-r {
      width: 84px;
      height: 24px;
      display: flex;
      align-items: center;
      background: #e3e3e3;
      color: #a6a6a6;
      border-radius: 4px;

      .PersonalInfo-wrapper-nav-r-sub {
        width: 50%;
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 12px;
        border-radius: 4px;
      }
      .PersonalInfo-wrapper-nav-r-sub-active {
        color: @main-bg-color;
        background: @theme-color;
      }
    }
  }
  .title {
    font-size: 20px;
    color: @main-text-color;
    margin: 17px 0;
  }
  .main {
    padding: 17px;
    width: 100%;
    box-sizing: border-box;
    background: @bg-color-lang;
    margin-bottom: 6px;
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
      .info-l {
        display: flex;
        // align-items: center;
        flex-direction: column;

        .info-l-text {
          font-size: 12px;
          color: @light-text-color;
        }
        img {
          width: 32px;
          margin-right: 8px;
        }
      }

      .info-r {
        font-size: 15px;
        color: @main-text-color;
        display: flex;
        align-items: center;
        // padding: 6px 12px;
        // background: @main-bg-color;
        // border-radius: 12px;
        img {
          width: 4px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
