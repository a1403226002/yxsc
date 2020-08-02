<template>
  <div>
    <div id="apps">
      <router-view></router-view>
    </div>
    
    <van-tabbar route active-color="#FF0000">
      <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/me">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>

</style>