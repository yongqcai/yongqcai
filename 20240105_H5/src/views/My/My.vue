<template>
  <div class="my-wrapper">
    <div class="my-wrapper-nav">
      <div class="my-wrapper-nav-l">
        <img
          @click="router.back()"
          class="my-wrapper-nav-back"
          src="@/assets/svgs/back.svg"
          alt=""
        />
        <!-- <span class="title">{{ $t("my") }}</span> -->
      </div>
    </div>

    <div class="title">
      <img src="@/assets/svgs/my/avator.svg" alt="" />
      <div class="info">
        <div class="name">
          Effects <img src="@/assets/svgs/my/auth.svg" alt="" />
        </div>
        <div class="uid">
          {{ $t("UID") }}:2024 <img src="@/assets/svgs/my/copy.svg" alt="" />
        </div>
      </div>
    </div>
    <div style="width: 100%; height: 6px; background: #f8f9fd"></div>
    <div class="item" @click="navigateToPage('/personalInfo')">
      <div class="item-l">
        <img src="@/assets/svgs/my/PersonalInfo.svg" alt="" />
        <div>{{ $t("个人信息") }}</div>
      </div>
      <div class="item-r">
        <img src="@/assets/svgs/arrow-r.svg" alt="" />
      </div>
    </div>
    <div class="item" @click="navigateToPage('/notification')">
      <div class="item-l">
        <img src="@/assets/svgs/my/Notification.svg" alt="" />
        <div>{{ $t("通知") }}</div>
      </div>
      <div class="item-r">
        <img src="@/assets/svgs/arrow-r.svg" alt="" />
      </div>
    </div>
    <div class="item" @click="navigateToPage('/password')">
      <div class="item-l">
        <img src="@/assets/svgs/my/Password.svg" alt="" />
        <div>{{ $t("密码") }}</div>
      </div>
      <div class="item-r">
        <img src="@/assets/svgs/arrow-r.svg" alt="" />
      </div>
    </div>
    <div class="item" @click="navigateToPage('/language')">
      <div class="item-l">
        <img src="@/assets/svgs/my/Language.svg" alt="" />
        <div>{{ $t("语言") }}</div>
      </div>
      <div class="item-r">
        <span>English(US)</span>
        <img src="@/assets/svgs/arrow-r.svg" alt="" />
      </div>
    </div>
    <div class="item" @click="navigateToPage('/protocol')">
      <div class="item-l">
        <img src="@/assets/svgs/my/Protocol.svg" alt="" />
        <div>{{ $t("协议") }}</div>
      </div>
      <div class="item-r">
        <img src="@/assets/svgs/arrow-r.svg" alt="" />
      </div>
    </div>
    <div class="item" @click="navigateToPage('/faq')">
      <div class="item-l">
        <img src="@/assets/svgs/my/FAQ.svg" alt="" />
        <div>{{ $t("FAQ") }}</div>
      </div>
      <div class="item-r">
        <img src="@/assets/svgs/arrow-r.svg" alt="" />
      </div>
    </div>
    <div class="item" @click="navigateToPage('/auth')">
      <div class="item-l">
        <img src="@/assets/svgs/my/KYC.svg" alt="" />
        <div>{{ $t("KYC") }}</div>
      </div>
      <div class="item-r">
        <span style="color: #61d25f">{{ $t("已认证") }}</span>
        <img src="@/assets/svgs/arrow-r.svg" alt="" />
      </div>
    </div>
    <div class="item" @click="show = true">
      <div class="item-l">
        <img src="@/assets/svgs/my/Logout.svg" alt="" />
        <div>{{ $t("登出") }}</div>
      </div>
      <div class="item-r">
        <img src="@/assets/svgs/arrow-r.svg" alt="" />
      </div>
    </div>
    <van-dialog
      v-model:show="show"
      :title="$t('提示')"
      show-cancel-button
      :confirm="logout"
    >
      <p class="tip">{{ $t("是否退出登录") }}</p>
    </van-dialog>
  </div>
</template>

<script setup lang="ts">
import { useNavigation } from "@/utils/utils";
// import { showSuccessToast, showFailToast } from "vant";
import { useRouter } from "vue-router";
import { reactive, toRefs, ref } from "vue";
const { navigateToPage } = useNavigation();
const router = useRouter();
const show = ref(false);
const logout = async () => {
  show.value = false;
  // await apiLogout()
};
const changeLanguage = (item) => {
  // languages.value = languages.value.map((i) => {
  //   if (i.lang === item.lang) {
  //     i.select = true;
  //   } else {
  //     i.select = false;
  //   }
  //   return i;
  // });
};
</script>

<style lang="less" scoped>
.my-wrapper {
  width: 100%;
  min-height: 100vh;
  background: url("@/assets/svgs/bg-green.svg") no-repeat;
  background-size: 100% 184px;
  background: @main-bg-color;
  z-index: -1;

  box-sizing: border-box;
  .my-wrapper-nav {
    padding: 17px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .my-wrapper-nav-l {
      display: flex;
      align-items: center;
      .my-wrapper-nav-back {
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
  .title {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: @main-text-color;
    margin: 22px 0;
    padding: 0 17px;
    img {
      width: 54px;
      margin-right: 17px;
    }
    .info {
      display: flex;

      flex-direction: column;
    }
    .name {
      font-size: 22px;
      color: @main-text-color;

      img {
        width: 14px;
      }
    }
    .uid {
      font-size: 12px;
      color: @text-color;
      img {
        width: 9px;
      }
    }
  }
  .item {
    padding: 0 17px;
    margin-top: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: @main-bg-color;
    font-size: 15px;
    .item-l {
      display: flex;
      align-items: center;

      color: @main-text-color;
      img {
        margin-right: 11px;
      }
    }
    .item-r {
      img {
        width: 4px;
        margin-left: 22px;
      }
    }
  }
  .langs {
    padding: 17px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: @bg-color-lang;
    margin-bottom: 6px;
    .langs-l {
      display: flex;
      align-items: center;
      img {
        width: 32px;
        margin-right: 8px;
      }
    }

    .langs-r {
      font-size: 15px;
      color: @theme-color;
      padding: 6px 12px;
      background: @main-bg-color;
      border-radius: 12px;
    }
  }
  .tip {
    width: 100%;
    text-align: center;
    height: 100px;
    line-height: 100px;
  }
}
</style>
