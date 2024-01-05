<template>
  <div class="Password-wrapper">
    <div class="Password-wrapper-nav">
      <div class="Password-wrapper-nav-l">
        <img
          @click="router.back()"
          class="Password-wrapper-nav-back"
          src="@/assets/svgs/back.svg"
          alt=""
        />
        <span class="title">{{ $t("密码") }}</span>
      </div>
      <div class="Password-wrapper-nav-r"></div>
    </div>
    <van-field
      v-model="password"
      class="login-wrapper-field"
      :type="showPassword ? 'text' : 'password'"
      :show-password="showPassword"
      :placeholder="$t('请输入您的新密码')"
    >
      <template v-slot:button>
        <img
          style="display: flex; align-items: center"
          @click="showPassword = !showPassword"
          :src="showPassword ? eyeSvg : eyeShowSvg"
          alt=""
        />
      </template>
    </van-field>
    <van-field
      v-model="password"
      class="login-wrapper-field"
      :type="showPassword ? 'text' : 'password'"
      :show-password="showPassword"
      :placeholder="$t('再次输入您的新密码')"
    >
      <template v-slot:button>
        <img
          style="display: flex; align-items: center"
          @click="showPassword = !showPassword"
          :src="showPassword ? eyeSvg : eyeShowSvg"
          alt=""
        />
      </template>
    </van-field>
    <div class="bottom">
      <div class="btn" @click="submit">
        {{ $t("提交") }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive, watch, ref } from "vue";

const router = useRouter();
const active = ref(0);

const password = ref("");
const reconfirmPassword = ref("");

const submit = () => {
  console.log("submit");
};
</script>

<style lang="less" scoped>
.Password-wrapper {
  width: 100%;
  height: 200px;
  background: url("@/assets/svgs/bg-green.svg");
  background-size: cover;
  z-index: -1;
  padding: 20px;
  box-sizing: border-box;
  .Password-wrapper-nav {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-bottom: 20px;
    .Password-wrapper-nav-l {
      display: flex;
      align-items: center;
      .Password-wrapper-nav-back {
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
  .login-wrapper-field {
    height: 48px;
    // line-height: 48px;
    background: @bg-color;
    border-radius: 4px;
    margin-top: 20px;
  }
  .bottom {
    position: fixed;
    bottom: 30px;
    width: 100%;
    box-sizing: border-box;
    // padding: 18px;
    .btn {
      // width: 100%;
      padding: 11px 0;
      text-align: center;

      font-size: 18px;
      color: @light-text-color;
      background-color: @theme-color;
      border-radius: 6px;
    }
  }
}
</style>
