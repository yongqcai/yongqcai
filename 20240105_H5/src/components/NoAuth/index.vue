<template>
  <div class="not_open">
    <van-row justify="center" class="no-data">
      <van-row
        ><van-col span="24" class="align-center title">
          {{ $t(props.item.title) }}
        </van-col>
        <van-col span="24" class="align-center tip">
          {{ $t(props.item.content) }}
        </van-col></van-row
      >
    </van-row>
    <div v-if="props.item.showButton">
      <van-button
        square
        block
        color="#EA445A"
        native-type="submit"
        @click="navigateToPage(props.item.path)"
      >
        {{ $t(props.item.button) }}
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useNavigation } from "@/utils/utils";
const { navigateToPage } = useNavigation();
const props = defineProps({
  item: Object,
  default: () => {},
});
</script>

<style lang="less" scoped>
.not_open {
  padding: 10px;
  .no-data {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    // justify-content: center;

    .title {
      font-size: 16px;
      color: #000000;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .tip {
      font-size: 13px;
      color: #999999;
      font-weight: 500;
    }
  }
}
</style>
@/utils/utils
