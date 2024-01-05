<template>
  <div class="goods">
    <img
      :src="item.imgUrl2"
      alt=""
      class="goods-thumbnail"
      @click="navigateToPage(`/goodsDetail`, item)"
    />
    <div class="goods-info">
      <div
        class="goods-title"
        v-html="item.name"
        @click="navigateToPage(`/goodsDetail`, item)"
      />
      <div class="goods-subinfo">
        <div class="goods-author">
          <div class="goods-price">
            <img src="" alt="" />{{ item.categoryName }}
          </div>
          <div class="goods-profit" style="color: #1552f0; font-size: 15px">
            <!-- {{ $t("Profit") }}<img src="" alt="" /> -->
            ${{ item.systemPrice }}
          </div>
        </div>
        <div class="goods-date" @click="show = true">{{ $t("展示中") }}</div>
      </div>
    </div>
    <van-popup
      v-model:show="show"
      position="center"
      class="top-radius bottom-radius"
      style="padding: 0 20px"
    >
      <van-nav-bar
        :title="$t('添加商品')"
        style="color: #000"
        @click-right="show = false"
      >
        <template #right> X </template>
      </van-nav-bar>
      <van-field :label="$t('Profit')" readonly class="supplier_name" />
      <van-field
        v-model="percent"
        name="pattern"
        :placeholder="$t('请填写百分比')"
        style="border: 1px solid #d7d7d7"
        clearable
      />
      <div class="tips">
        {{ $t("将选中的商品发布到你的店铺，并填写商品利润比例，推荐比例") }}:
        <span>{{ profitRange.min }}%-{{ profitRange.max }}%</span>
      </div>
      <van-button
        square
        color="#EA445A"
        native-type="submit"
        style="width: 100%; margin-bottom: 20px"
        @click="submit"
        >{{ $t("添加") }}</van-button
      >
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
// import { useRouter } from "vue-router";
import { useNavigation } from "@/utils/utils";
import { apiGoodsAddOrUpdate } from "@/api/windowApi";
import { showSuccessToast, showFailToast } from "vant";
const props = defineProps({
  item: { type: Object, desc: "商品列表" },
  profitRange: { type: Object, desc: "利润范围" },
});
const { navigateToPage } = useNavigation();
const show = ref(false);
const percent = ref<any>("");
const submit = async () => {
  let data = {
    goodsIds: props.item.id,
    percent: (percent.value / 100).toFixed(2),
    profit: (percent.value / 100).toFixed(2),
    discount: 0.0,
  };

  const res = await apiGoodsAddOrUpdate(data);
  if (res.code === "0") {
    console.log("操作成功");
    showSuccessToast(res.msg);
    show.value = false;
  } else {
    showFailToast(res.msg);
  }
  // await goodsAddOrUpdate(data).then((res) => {
  //   console.log(res);
  // });
  // goodsaddOrUpdate(data)
  //   .then((res) => {
  //     console.log(res);
  //     // Toast(t('上架成功'));
  //     // update()
  //   })
  //   .catch((err) => {
  //     const limitObj =
  //       typeof err.data === "string" ? JSON.parse(err.data) : err.data;
  //     console.log(limitObj);
  //   });
};
</script>

<style lang="less" scoped>
.goods {
  .flex-row;
  .flex-justify-center;
  margin: 0 10px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &-thumbnail {
    width: 90px;
    height: 90px;
  }
  &-info {
    flex: 1;
    margin-left: 8px;
  }
  &-subinfo {
    .flex-row;
    margin-top: 10px;
    font-size: 12px;
    color: @secondary-text-color;

    &-profit {
      color: red;
    }
  }
  &-title {
    font-size: 16px;
    color: @main-text-color;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &-date {
    margin-left: auto;
    color: #ffffff;
    width: 116px;
    line-height: 28px;
    font-size: 13px;
    text-align: center;
    background-color: #ea445a;
  }

  .tips {
    font-size: 12px;
    line-height: 18px;
    color: #000000;
    margin: 20px 0;
    span {
      color: #1552f0;
    }
  }
}
</style>
@/utils/utils
