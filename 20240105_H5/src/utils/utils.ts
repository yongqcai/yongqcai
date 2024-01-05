// routerUtils.js 文件

import { useRouter } from "vue-router";

export const useNavigation = () => {
  const router = useRouter();

  const navigateToPage = (path: string, params = {}) => {
    console.log(path);
    try {
      router.push({ path, query: params });
    } catch (err) {
      console.log(123)
      console.log(err)
    }
  };

  // 可以在这里添加其他与导航相关的逻辑或函数

  // 返回需要暴露的函数或数据
  return {
    navigateToPage,
  };
};
