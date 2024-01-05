// 标签 item
interface TabItem {
  id: number;
  name: string;
  icon: string;
  title: string;
  to: string;
}

// 标签坞列表
export const TABBAR_LIST: TabItem[] = [
  { id: 1, name: "home", icon: "home-o", title: "首页", to: "/home/index" },
  // { id: 2, name: 'components', icon: 'apps-o', title: '组件说明', to: '/home/components' },
  { id: 2, name: "wallet", icon: "apps-o", title: "钱包", to: "/wallet" },
  {
    id: 3,
    name: "bank",
    icon: "apps-o",
    title: "银行账户",
    to: "/bank/addBank",
  },
  // { id: 4, name: 'user', icon: 'user-o', title: '我的', to: '/home/profile' }
  {
    id: 4,
    name: "shop",
    icon: "user-o",
    title: "商铺中心",
    to: "/shoppingCenter",
  },
];

// 调试白名单
export const DEBUG_WHITE_LIST: string[] = ["development", "teste"];

// 路由白名单
export const ROUTE_WHITE_LIST: string[] = ["Login"];

// 聚合数据key
export const JH_NEWS_KEY = "d61a65b248651c9598bcccbd7670d566";

// 首页tab
export const NEWS_TABS = [
  { id: 0, title: "储值卡", name: "top" },
  { id: 1, title: "数码产品", name: "guonei" },
  { id: 2, title: "玩具", name: "guoji" },
  { id: 3, title: "尺", name: "yule" },
  { id: 4, title: "家具", name: "tiyu" },
  { id: 5, title: "家電產品", name: "junshi" },
  // { id: 6, title: '科技', name: 'keji' },
  // { id: 7, title: '财经', name: 'caijing' },
  // { id: 8, title: '游戏', name: 'youxi' },
  // { id: 9, title: '汽车', name: 'qiche' },
  // { id: 10, title: '健康', name: 'jiankang' }
];
