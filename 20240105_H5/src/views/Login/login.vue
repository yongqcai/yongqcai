<template>
  <div class="login-wrapper">
    <Navbar :title="isLogin ? '登录' : '注册'" />
    <div class="login-wrapper-header">
      <div class="login-wrapper-header-r">
        <p class="login-wrapper-title">{{ $t("放眼未来的财务策略") }}</p>
        <p class="login-wrapper-sub-title">{{ $t("财富的增值之选") }}</p>
      </div>
    </div>
    <div class="login-wrapper-line">
      <div class="login-wrapper-tabs">
        <div
          class="login-wrapper-tab"
          :class="isPhone ? 'tab-active' : ''"
          @click="isPhone = true"
        >
          {{ $t("Account") }}
        </div>
        <div
          class="login-wrapper-tab"
          :class="isPhone ? '' : 'tab-active'"
          @click="isPhone = false"
        >
          {{ $t("Email") }}
        </div>
      </div>
    </div>
    <van-cell-group inset>
      <div style="display: flex" v-if="isPhone">
        <div class="login-wrapper-select" @click="show = true">
          <img :src="imgUrl" alt="" />
          <span style="margin-right: 12px">{{ telephoneCode }}</span>
          <img src="@/assets/svgs/arrow_bottom.svg" alt="" />
        </div>
        <van-field
          style="flex: 1"
          class="login-wrapper-field"
          v-model="username"
          :placeholder="isPhone ? $t('请输入手机号') : $t('请输入电子邮件')"
        >
          <template v-slot:button>
            <img
              style="display: flex; align-items: center"
              src="@/assets/svgs/clear.svg"
              alt=""
              @click="username = ''"
            />
          </template>
        </van-field>
      </div>
      <van-field
        v-else
        style="flex: 1"
        class="login-wrapper-field"
        v-model="username"
        :placeholder="$t('请输入电子邮件')"
      >
        <template v-slot:button>
          <img
            style="display: flex; align-items: center"
            src="@/assets/svgs/clear.svg"
            alt=""
            @click="username = ''"
          />
        </template>
      </van-field>
      <van-field
        v-model="password"
        class="login-wrapper-field"
        :type="showPassword ? 'text' : 'password'"
        :show-password="showPassword"
        :placeholder="isLogin ? $t('请输入密码') : $t('请输入验证码')"
      >
        <template v-slot:button>
          <img
            v-if="isLogin"
            style="display: flex; align-items: center"
            @click="showPassword = !showPassword"
            :src="showPassword ? eyeSvg : eyeShowSvg"
            alt=""
          />
          <span v-else>{{ $t(authCode) }}</span>
        </template>
      </van-field>
      <div class="forget-pwd" v-if="isLogin">{{ $t("忘记密码") }}</div>
      <div v-if="!isLogin && code">
        <div style="margin-bottom: 5px" class="recommend">
          {{ $t("推荐人") }} <img src="@/assets/svgs/arrow_bottom.svg" alt="" />
        </div>
        <van-field
          v-model="password"
          class="login-wrapper-field"
          :type="showPassword ? 'text' : 'password'"
          :show-password="showPassword"
          :placeholder="$t('请输入密码')"
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
          :placeholder="$t('请确认密码')"
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
          :placeholder="$t('请输入推荐人ID')"
        />
      </div>
    </van-cell-group>
    <div class="btn-bottom">
      <div
        class="btn"
        :class="isLogin && disable ? '' : 'disable'"
        @click="handleLogin"
      >
        {{ isLogin ? $t("登录") : $t("下一步") }}
      </div>
      <div class="forget" @click="handleForget">
        {{ isLogin ? $t("我是个新用户") : $t("已有会员去") }}
        <span class="forget-btn" @click="isLogin = !isLogin">{{
          isLogin ? $t("注册") : $t("登录")
        }}</span>
      </div>
    </div>

    <van-popup
      v-model:show="show"
      position="bottom"
      class="top-radius"
      style="padding-bottom: 50px"
    >
      <van-nav-bar style="color: #000" @click-right="show = false">
        <template #left
          ><span style="font-size: 16px; font-weight: 550">{{
            $t("请选择国家区号")
          }}</span></template
        >
        <template #right>
          <img src="@/assets/svgs/X.svg" alt="" />
        </template>
      </van-nav-bar>
      <div class="popup-title">{{ $t("国家(全部)") }}</div>
      <div
        class="langs"
        v-for="item in languages"
        :key="item.lang"
        @click="changeLanguage(item)"
      >
        <div class="langs-l"><img :src="item.src" alt="" />{{ item.name }}</div>
        <div class="langs-r">{{ item.telephoneCode }}</div>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { showSuccessToast, showFailToast } from "vant";
import { useRouter } from "vue-router";
import { reactive, toRefs, ref } from "vue";
import { apiLogin } from "@/api/loginApi";
import { loginStore } from "@/store/login";
import { userStore } from "@/store/user";

import eyeShowSvg from "@/assets/svgs/eye_show.svg";
import eyeSvg from "@/assets/svgs/eye.svg";
import America from "@/assets/svgs/language/America.svg";
import Japan from "@/assets/svgs/language/Japan.svg";
import SouthKorea from "@/assets/svgs/language/SouthKorea.svg";
import Thailand from "@/assets/svgs/language/Thailand.svg";
import Vietnam from "@/assets/svgs/language/Vietnam.svg";
import China from "@/assets/svgs/language/China.svg";
import Navbar from "@/components/Navbar.vue";

// const imgUrl = ref(() =>
// import("@/assets/svgs/America.svg").then((module) => module.default)
const show = ref(false);
const showPassword = ref(false);
const disable = ref(true);
const isLogin = ref(true);
const isPhone = ref(true);
const telephoneCode = ref("+1");
const code = ref(false);
const languages = ref([
  {
    name: "America",
    lang: "us",
    src: America,
    telephoneCode: "+1",
  },
  {
    name: "Japan",
    lang: "jp",
    src: Japan,
    telephoneCode: "+81",
  },
  {
    name: "SouthKorea",
    lang: "kr",
    src: SouthKorea,
    telephoneCode: "+82",
  },
  {
    name: "Thailand",
    lang: "th",
    src: Thailand,
    telephoneCode: "+66",
  },
  {
    name: "Vietnam",
    lang: "vn",
    src: Vietnam,
    telephoneCode: "+84",
  },
  {
    name: "China",
    lang: "zh",
    src: China,
    telephoneCode: "+86",
    select: false,
  },
]);
const imgUrl = ref(America);
// const formData =
const changeLanguage = (item) => {
  imgUrl.value = item.src;
  telephoneCode.value = item.telephoneCode;
  show.value = false;
};
const authCode = ref("获取验证码");
const loginEffect = () => {
  const user = userStore();
  const login = loginStore();
  const router = useRouter();
  const loginForm = reactive({ username: "", password: "" });
  const { username, password } = toRefs(loginForm);
  const loginValidate = () => {
    if (!username.value || !password.value) {
      showFailToast("账号或密码不能为空！");
      return false;
    }
    return true;
  };
  const handleLogin = async () => {
    if (loginValidate()) {
      const result = await apiLogin({
        username: username.value,
        password: password.value,
      });
      console.log(result);
      const { token } = result.data;
      console.log(token);
      login.setToken(token);
      try {
        await user.getProfile();
      } catch (err) {
        console.log(err);
      }
      showSuccessToast("登陆成功！");
      router.push("/home");
    }
  };
  return { username, password, handleLogin };
};
const forgetEffect = () => {
  const handleForget = () => {
    // router.push('/forgetPassword')
  };
  return { handleForget };
};

const { username, password, handleLogin } = loginEffect();
const { handleForget } = forgetEffect();
</script>

<style lang="less" scoped>
.login-wrapper {
  .login-wrapper-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 180px;
    box-sizing: border-box;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 189px;
      height: 189px;
      background: url("@/assets/svgs/aberdeen.svg");
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180px;
      background: url("@/assets/svgs/bg.svg");
      background-size: cover;
      z-index: -1;
    }

    .login-wrapper-header-r {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
      white-space: nowrap;
      height: 180px;
      position: relative;
      padding-right: 14px;
      &::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 23px;
        width: 185px;
        height: 68px;
        background: url("@/assets/svgs/wire.svg");
        background-size: cover;
      }
      // &::after {
      //   content: "";
      //   position: absolute;
      //   top: 30px;
      //   right: 0;
      //   width: 138px;
      //   height: 90px;
      //   border-radius: 30px;
      //   // background: rgba(247, 251, 115, 0.2);
      //   backdrop-filter: blur(66px);
      //   z-index: -1;
      // }
      .login-wrapper-title {
        font-size: 20px;
        color: @main-text-color;
        font-weight: 600;
      }
      .login-wrapper-sub-title {
        font-size: 16px;
        padding-top: 7px;
        color: @text-color;
      }
    }
  }
  .login-wrapper-line {
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-top: 1px solid @border-color;
    background: @main-bg-color !important;
    box-sizing: border-box;
    padding: 23px 15px;
    .login-wrapper-tabs {
      width: 100%;
      background: #f6f7f9;
      border-radius: 19px;
      display: flex;
      font-size: 14px;
      .login-wrapper-tab {
        width: 50%;
        height: 38px;
        line-height: 38px;
        text-align: center;
        color: @desc-text-color;
        border-radius: 19px;
      }
      .tab-active {
        color: @main-bg-color;
        background: @theme-color;
      }
    }
  }
  .login-wrapper-select {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 81px;
    height: 48px;
    line-height: 48px;
    background: @bg-color;
    border-radius: 4px;
    margin-right: 9px;
  }
  .recommend {
    font-size: 13px;
    color: @theme-sub-color;
  }
  .login-wrapper-field {
    height: 48px;
    // line-height: 48px;
    background: @bg-color;
    border-radius: 4px;
    margin-bottom: 19px;
  }
  :deep(.van-cell__value) {
    height: 28px;
    line-height: 28px;
  }
  .forget-pwd {
    width: 100%;
    text-align: right;
    font-size: 13px;
    color: @desc-text-color;
    padding-right: 18px;
    box-sizing: border-box;
  }

  .popup-title {
    padding: 17px;
    font-size: 14px;
    color: @theme-sub-color;
  }
  .langs {
    padding: 17px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .langs-l {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        margin-right: 8px;
      }
    }

    .langs-r {
      font-size: 13px;
    }
  }
}
</style>
