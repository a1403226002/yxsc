<template>
  <div class="dy-box">
    <div class="dy-list">
      <p>精选专题 ></p>
      <van-swipe :show-indicators="dy_flag" :loop="false" :width="320">
        <router-link tag="van-swipe-item" :to="'/detail/'+item.id" v-for="(item,index) in dy_List" :key="index">
          <img :src="item.pic" alt />
          <p>{{item.title}}</p>
          <p>{{item.descript}}</p>
        </router-link>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      dy_List: [],
      dy_flag: false
    };
  },
  props: [],
  components: {},
  mounted() {
    this.$axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
      console.log(res.data);
      this.dy_List = res.data;
    });
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
.dy-box {
  //   height: 400px;
  //   border-bottom: 0.2rem solid #f5f5f5;
  .dy-list {
    width: 100%;
    // height: 400px;
    // background: red;
    border-bottom: 0.2rem solid #f5f5f5;
    > p {
      height: 40px;
      // background: #000;
      line-height: 40px;
      text-align: center;
      font-size: 17px;
    }
    .van-swipe-item {
      margin-left: 5px;
      //   background: red;
      > img {
        width: 320px;
        text-align: center;
        height: 200px;
        border-radius: 5px;
        // margin-left: -20px;
      }
      p:nth-of-type(1) {
        font-size: 13px;
        width: 300px;
        margin-top: 10px;
      }
      p:nth-of-type(2) {
        font-size: 12px;
        // margin-left: -120px;
        width: 260px;
        overflow: hidden;
        color: #aaa;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 12px;
        
      }
    }
  }
}
</style>