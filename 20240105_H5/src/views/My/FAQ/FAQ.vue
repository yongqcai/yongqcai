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
        <span class="title">{{ $t("FAQ") }}</span>
      </div>
      <div class="Notification-wrapper-nav-r">
        <!-- <img
          @click="router.back()"
          class="Notification-wrapper-nav-back"
          src="@/assets/svgs/notification/take.svg"
          alt=""
        /> -->
      </div>
    </div>
    <div class="title">{{ $t("常問的問題") }}</div>
    <div class="tabs">
      <div
        v-for="item in categoryList"
        :key="item.id"
        class="title"
        :class="item.active ? 'title-active' : ''"
        @click="change"
      >
        {{ $t(item.title) }}
      </div>
    </div>
    <van-list class="list">
      <template>
        <div class="main" v-for="item in 5" :key="item">
          <div class="info">
            <div class="info-l">
              <div>
                <div class="info-l-title">
                  如何加入量化交易？
                  <div class="info-l-icon"></div>
                </div>
                <p class="info-l-text">
                  在coinbasedapp輸入，進入量化交易官網，
                  點擊開戶完成連接即可開始交易。
                </p>
                <!-- <p class="info-l-text">643.2119 提现成功</p> -->
              </div>
            </div>
            <div class="info-r">
              <img src="@/assets/svgs/arrow-r.svg" alt="" />
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

const router = useRouter();
const categoryList = ref([
  {
    id: 1,
    title: "全部",
    active: true,
    type: 1,
  },
  {
    id: 2,
    title: "安全",
    active: false,
    type: 2,
  },
  {
    id: 3,
    title: "賬戶",
    active: false,
    type: 3,
  },
]);

const change = () => {
  console.log("change");
};
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

  .title {
    font-size: 20px;
    color: @main-text-color;
    padding: 0 17px;
  }
  .tabs {
    width: 100%;
    display: flex;

    box-sizing: border-box;
    padding: 0 20px;
    margin-top: 12px;
    .title {
      // width: 50%;
      padding: 3px 11px;
      text-align: center;
      font-size: 18px;
      color: @light-text-color;
      background: @bg-tab-color;
      margin-right: 12px;
      border-radius: 16px;
    }
    .title-active {
      color: @main-bg-color;
      background: @theme-color;
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
