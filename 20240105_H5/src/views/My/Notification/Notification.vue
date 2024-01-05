<template>
  <div class="Notification-wrapper">
    <div class="Notification-wrapper-nav">
      <div class="Notification-wrapper-nav-l">
        <img
          @click="router.back()"
          class="Notification-wrapper-nav-back"
          src="@/assets/svgs/back.svg"
          alt=""
        />
        <span class="title">{{ $t("通知") }}</span>
      </div>
      <div class="Notification-wrapper-nav-r">
        <img
          @click="router.back()"
          class="Notification-wrapper-nav-back"
          src="@/assets/svgs/notification/take.svg"
          alt=""
        />
      </div>
    </div>
    <!-- <van-tabs v-model="active" sticky>
      <van-tab>
        <template #title>{{ $t("系統消息") }}</template>
      </van-tab>
      <van-tab>
        <template #title>{{ $t("官方公告") }}</template>
      </van-tab>
    </van-tabs> -->
    <div class="tabs">
      <div
        class="title"
        :class="active === 0 ? 'title-active' : ''"
        @click="active = 0"
      >
        {{ $t("系統消息") }}
      </div>
      <div
        class="title"
        :class="active === 1 ? 'title-active' : ''"
        @click="active = 1"
      >
        {{ $t("官方公告") }}
      </div>
    </div>
    <van-list class="list">
      <template v-if="active === 0">
        <div class="main" v-for="item in messageList" :key="item.id">
          <div class="info">
            <div class="info-l">
              <img
                v-if="(item.type = 1)"
                src="@/assets/svgs/Notification/toUp.svg"
                alt=""
              />
              <img
                v-else
                src="@/assets/svgs/Notification/withdraw.svg"
                alt=""
              />
              <div>
                <div style="" class="info-l-title">
                  643.2119 提现成功
                  <div class="info-l-icon"></div>
                </div>
                <p class="info-l-text">接收地址 asdsadaad</p>
                <p class="info-l-text">643.2119 提现成功</p>
              </div>
            </div>
            <div class="info-r">
              <img src="@/assets/svgs/arrow-r.svg" alt="" />
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="notices" v-for="item in noticeList" :key="item.id">
          <img src="@/assets/svgs/temporary/pic.svg" alt="" />
          <div class="notices-content">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="content">
              {{ item.content }}
            </div>
            <div class="btn-more">
              {{ $t("了解更多") }}
              <img src="@/assets/svgs/notification/more.svg" alt="" />
            </div>
          </div>
        </div>
      </template>
    </van-list>
  </div>
</template>

<script setup lang="ts">
// import { showSuccessToast, showFailToast } from "vant";
import { useRouter } from "vue-router";
import { reactive, watch, ref } from "vue";
import America from "@/assets/svgs/Notification/America.svg";
import Japan from "@/assets/svgs/Notification/Japan.svg";
import SouthKorea from "@/assets/svgs/Notification/SouthKorea.svg";
import Thailand from "@/assets/svgs/Notification/Thailand.svg";
import Vietnam from "@/assets/svgs/Notification/Vietnam.svg";
import China from "@/assets/svgs/Notification/China.svg";
const router = useRouter();
const active = ref(0);
const messageList = ref([
  {
    id: 1,
    title: "643.2119 提现成功",
    content: "接收地址 asdsadaad",
    time: "2021-09-28 10:21:00",
    type: 1,
  },
  {
    id: 2,
    title: "643.2119 提现成功",
    content: "接收地址 asdsadaad",
    time: "2021-09-28 10:2",
    type: 2,
  },
]);
const noticeList = ref([
  {
    id: 1,
    title: "[Envite2Ge] 品牌升級福利！",
    content:
      "從 2021/09/28 開始，Envite2Ge 將推出 2021/10/01 至 2021/10/07 期間的品牌升級福利，請注意",
  },
]);
const getMessageList = () => {
  console.log("getMessageList");
};
const getNoticeList = () => {
  console.log("getNoticeList");
};
watch(
  () => active.value,
  async (val: number) => {
    console.log(val);
    val === 0 ? await getMessageList() : await getNoticeList();
  }
);
</script>

<style lang="less" scoped>
.Notification-wrapper {
  width: 100%;
  height: 200px;
  background: url("@/assets/svgs/bg-green.svg");
  background-size: cover;
  z-index: -1;

  box-sizing: border-box;
  .Notification-wrapper-nav {
    padding: 17px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .Notification-wrapper-nav-l {
      display: flex;
      align-items: center;
      .Notification-wrapper-nav-back {
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
    .Notification-wrapper-nav-r {
      // width: 84px;
      // height: 24px;
      // display: flex;
      // align-items: center;
      // background: #e3e3e3;
      // color: #a6a6a6;
      // border-radius: 4px;
      margin-right: 8px;

      .Notification-wrapper-nav-r-sub {
        width: 50%;
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 12px;
        border-radius: 4px;
      }
      .Notification-wrapper-nav-r-sub-active {
        color: @main-bg-color;
        background: @theme-color;
      }
    }
  }
  :deep .van-tabs__wrap {
    background: none;
  }
  // .title {
  //   font-size: 20px;
  //   color: @main-text-color;
  //   margin: 17px 0;
  // }
  .tabs {
    width: 100%;
    display: flex;
    border-bottom: 2px solid #f1f1f1;

    box-sizing: border-box;
    .title {
      width: 50%;
      padding: 16px 0;
      text-align: center;
      font-size: 16px;
      color: @light-text-color;
    }
    .title-active {
      border-bottom: 2px solid @theme-color;
    }
  }
  .list {
    padding: 17px;

    .main {
      padding: 17px;
      box-sizing: border-box;
      width: 100%;
      background: @bg-color-lang;
      margin-bottom: 6px;
      border-radius: 6px;
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6px;
        .info-l {
          display: flex;
          align-items: center;
          // flex-direction: column;
          .info-l-title {
            display: flex;
            font-size: 13px;
            color: @main-text-color;

            .info-l-icon {
              width: 3px;
              height: 3px;
              background: #ff0f00;
              margin: 5px 0 0 5px;
            }
          }

          .info-l-text {
            font-size: 10px;
            color: @light-text-color;
            margin-top: 5px;
          }
          img {
            width: 30px;
            margin-right: 10px;
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
            width: 6px;
            margin-left: 10px;
          }
        }
      }
    }

    .notices {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      border-radius: 13px;
      img {
        width: 100%;
      }
      .notices-content {
        padding: 15px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 100%;
        border-radius: 13px;
        border: 1px solid #ececec;
        background: @main-bg-color;

        .title {
          font-size: 16px;
          color: @main-text-color;
        }
        .content {
          font-size: 12px;
          color: @light-text-color;
          margin: 10px 0;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
        }
        .btn-more {
          color: @theme-color;
          font-size: 14px;
          img {
            width: 11px;
          }
        }
      }
    }
  }
}
</style>
