import { createI18n } from "vue-i18n";
import zh from "./zh.json";
import en from "./en.json";

const i18n = createI18n({
  legacy: false,
  locale: "zh", // 默认显示语言
  messages: {
    zh: zh,
    en: en,
  },
});

export default i18n;
