<template>
  <div class="home-index">
    <div style="margin: 16px">
      <van-button
        square
        color="#EA445A"
        native-type="submit"
        style="width: 100%"
        @click="changeLanguage('cn')"
      >
        {{ $t("中文") }}
      </van-button>
    </div>
    <div style="margin: 16px">
      <van-button
        square
        color="#EA445A"
        native-type="submit"
        style="width: 100%"
        @click="changeLanguage('en')"
      >
        {{ $t("英文") }}
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useNavigation } from "@/utils/globalMixin";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

// const { navigateToPage } = useNavigation();

const changeLanguage = (value) => {
  locale.value = value;
};
</script>

<style lang="less" scoped></style>
