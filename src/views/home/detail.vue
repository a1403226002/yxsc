<template>
  <div class="box">
    <!-- 商品轮播图区 -->
    <div id="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品详情区 -->
    <div id="good-info">
      <p v-html="goodsInfo.name"></p>
      <p v-html="goodsInfo.characteristic"></p>
      <div>
        <p>低价:￥{{goodsInfo.minPrice}}</p>
        <p>原价:￥{{goodsInfo.originalPrice}}</p>
        <p>库存：{{goodsInfo.stores}}件</p>
      </div>
    </div>
    <!-- 商品介绍 -->
    <div id="good-intro">
      <van-tabs>
        <van-tab title="商品内容">
          <p v-html="content"></p>
        </van-tab>
        <van-tab title="商品评价">
          <p></p>
        </van-tab>
      </van-tabs>
    </div>
    <!--  -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    //接收商品的ID
    this.gid = this.$route.params.id;
    this.getGoodsInfo(); //获取商品的详情信息
  },
  data() {
    return {
      gid: 0,
      banners: [],
      goodsInfo: [],
      conent: ""
    };
  },
  computed: {},
  methods: {
    //获取商品的详情信息
    getGoodsInfo() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/detail",
        params: {
          id: this.gid
        }
      }).then(res => {
        console.log(res);
        this.banners = res.data.pics; //获取商品的轮播图
        this.goodsInfo = res.data.basicInfo; //商品详情
        this.content = res.data.content; //商品详情
      });
    }
  }
};
</script>

<style lang="scss">
.box {
  width: 100%;
  background: #f0f0f0;
  #banner {
    width: 100%;
    img {
      width: 100%;
    }
  }

  #good-info {
    width: 100%;
    padding: 0.2rem 0.3rem;
    box-sizing: border-box;
    background-color: #f0f0f0;
    p:nth-of-type(1) {
      line-height: 0.7rem;
      font-size: 0.35rem;
    }
    p:nth-of-type(2) {
      color: #808080;
      font-size: 0.3rem;
      line-height: 0.7rem;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 0.26rem;
      p:nth-of-type(1) {
        color: #ff0000;
        width: 20%;
      }
      p:nth-of-type(2) {
        width: 30%;
      }
      p:nth-of-type(3) {
        flex: 1;
      }
    }
  }
  #good-intro {
    margin-top: 0.2rem;
    background: #f0f0f0;
    p {
      width: 100% !important;
      margin-top: 0.2rem;
      ul {
        width: 100%;
        li {
          line-height: 0.6rem;
        }
      }
    }
    img {
      width: 100% !important ;
    }
  }
}
</style>