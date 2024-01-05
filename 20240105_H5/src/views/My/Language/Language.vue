<template>
  <div class="Language-wrapper">
    <div class="Language-wrapper-nav">
      <div class="Language-wrapper-nav-l">
        <img
          @click="router.back()"
          class="Language-wrapper-nav-back"
          src="@/assets/svgs/back.svg"
          alt=""
        />
        <span class="title">{{ $t("Language") }}</span>
      </div>
    </div>
    <div class="title">
      {{ $t("選擇語言") }}
    </div>
    <div
      class="langs"
      v-for="item in languages"
      :key="item.lang"
      @click="changeLanguage(item)"
    >
      <div class="langs-l"><img :src="item.src" alt="" />{{ item.name }}</div>
      <div class="langs-r" v-if="item.select">{{ $t("選擇") }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showSuccessToast, showFailToast } from "vant";
import { useRouter } from "vue-router";
import { reactive, toRefs, ref } from "vue";
import America from "@/assets/svgs/language/America.svg";
import Japan from "@/assets/svgs/language/Japan.svg";
import SouthKorea from "@/assets/svgs/language/SouthKorea.svg";
import Thailand from "@/assets/svgs/language/Thailand.svg";
import Vietnam from "@/assets/svgs/language/Vietnam.svg";
import China from "@/assets/svgs/language/China.svg";
const router = useRouter();
const languages = ref([
  {
    name: "America",
    lang: "us",
    src: America,
    telephoneCode: "+1",
    select: true,
  },
  {
    name: "Japan",
    lang: "jp",
    src: Japan,
    telephoneCode: "+81",
    select: false,
  },
  {
    name: "SouthKorea",
    lang: "kr",
    src: SouthKorea,
    telephoneCode: "+82",
    select: false,
  },
  {
    name: "Thailand",
    lang: "th",
    src: Thailand,
    telephoneCode: "+66",
    select: false,
  },
  {
    name: "Vietnam",
    lang: "vn",
    src: Vietnam,
    telephoneCode: "+84",
    select: false,
  },
  {
    name: "China",
    lang: "zh",
    src: China,
    telephoneCode: "+86",
    select: false,
  },
]);
const changeLanguage = (item) => {
  languages.value = languages.value.map((i) => {
    if (i.lang === item.lang) {
      i.select = true;
    } else {
      i.select = false;
    }
    return i;
  });
};
</script>

<style lang="less" scoped>
.Language-wrapper {
  width: 100%;
  height: 200px;
  background: url("@/assets/svgs/bg-green.svg");
  background-size: cover;
  z-index: -1;
  padding: 17px;
  box-sizing: border-box;
  .Language-wrapper-nav {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .Language-wrapper-nav-l {
      display: flex;
      align-items: center;
      .Language-wrapper-nav-back {
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
    .Language-wrapper-nav-r {
      width: 84px;
      height: 24px;
      display: flex;
      align-items: center;
      background: #e3e3e3;
      color: #a6a6a6;
      border-radius: 4px;

      .Language-wrapper-nav-r-sub {
        width: 50%;
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 12px;
        border-radius: 4px;
      }
      .Language-wrapper-nav-r-sub-active {
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
}
</style>
