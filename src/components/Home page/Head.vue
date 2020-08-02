<template>
  <div class="box">
    <div id="banner">
      <van-swipe
        :show-indicators="dy_flag"
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item v-for="(item,index) in dy_List" :key="index">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>
      <div class="icons">
        <div class="icon-item">
          <img src="/static/img/1.png" alt />
          <p>签到</p>
        </div>
        <div class="icon-item">
         <img src="/static/img/2.png" alt />
          <p>礼券</p>
        </div>
        <div class="icon-item">
          <img src="/static/img/3.png" alt />
          <p>砍价</p>
        </div>
        <div class="icon-item">
           <img src="/static/img/4.png" alt />
          <p>专栏</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  props: {},
  components: {},
  data() {
    return {
      dy_List: [],
      dy_flag: false,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    this.$axios.get("https://api.it120.cc/small4/banner/list").then((res) => {
      console.log(res);
      this.dy_List = res.data;
    });
  },
  beforeDestroy() {},
};
</script>
<style lang='scss' scoped>
.box {
  width: 100%;
  background: #f0f0f0;
  #banner {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    .icons {
      width: 100%;
      height: 2rem;
      background: #fff;
      position: absolute;
      bottom: 0px;
      display: flex;
      justify-content: space-around;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
      align-items: center;
      img{
            width: 40px;
            height: 40px;
        }
      p {
        text-align: center;
        margin-top: 0.2rem;
        font-size: 0.4rem;
      }
    }
  }
}
</style>