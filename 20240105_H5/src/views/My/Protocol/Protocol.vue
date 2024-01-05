<template>
  <div class="Protocol-wrapper">
    <div class="Protocol-wrapper-header">
      <img
        class="Protocol-wrapper-img"
        src="@/assets/svgs/protocol/Image.svg"
        alt=""
      />
      <img
        class="Protocol-wrapper-header-l"
        src="@/assets/svgs/protocol/l.svg"
        alt=""
        @click="router.back()"
      />
      <img
        class="Protocol-wrapper-header-r"
        src="@/assets/svgs/protocol/r.svg"
        alt=""
      />
    </div>
    <div class="main">
      <div class="title">Protocol</div>
      <div class="content">
        Article 1 (Purpose) These terms are related to customers' use of
        electronic financial services (hereinafter referred to as "services") of
        Full Win Trade (hereinafter referred to as "the company"). The purpose
        is to establish details that are not stipulated in the "Basic Terms of
        Use of Electronic Financial Transactions" Article 2 (Definition of
        terms) The terms used in this article are defined as follows 1. The term
        "service" refers to electronic methods other than computers, telephones,
        and ATMs provided by the company to customers. Using a device that
        transmits or processes information (hereinafter referred to as
        "electronic device") to process the business of Article 3, paragraph 2
        means to do. The application account refers to the comprehensive account
        for application services. Account password refers to the password of the
        application account. User ID refers to the English (case-sensitive)
        registered by the customer to connect the electronic device. The same
        below), English and numbers The combination.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="less" scoped>
.Protocol-wrapper {
  .Protocol-wrapper-header {
    position: relative;
    .Protocol-wrapper-img {
      width: 100%;
    }
    .Protocol-wrapper-header-l {
      position: absolute;
      top: 50px;
      left: 20px;
    }
    .Protocol-wrapper-header-r {
      position: absolute;
      top: 50px;
      right: 20px;
    }
  }
  .main {
    padding: 20px;
    .title {
      font-size: 24px;
      color: @main-text-color;
      margin-bottom: 20px;
    }
    .content {
      font-size: 14px;
      color: #3c3f42;
    }
  }
}
</style>
