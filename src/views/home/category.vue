<template>
  <div>
    <van-search placeholder="输入搜索的商品名字" @focus="goSearch"/>
    <!-- 分类列表数据 -->
    <div>
      <van-tree-select
        :items="topCate"
        :main-active-index.sync="activeIndex"
        @click-nav="changeLeft"
      >
        <template #content>
          <div class="sub_cate">
            <router-link
              tag="div"
              :to="'/Fenlxq/'+item.id"
              class="item"
              v-for="(item,index) in subCate"
              :key="index"
            >
              <img :src="item.icon" />
              <p>{{item.name}}</p>
            </router-link>
          </div>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.getCategory();
  },
  data() {
    return {
      //顶级分类
      topCate: [{ text: "所有分类" }],
      //顶级分类的ID
      cateIds: [0],
      categoryList: [], //所有的分类数据
      activeIndex: 0 //左侧选项切换对应的索引
    };
  },
  computed: {
    //计算属性
    subCate() {
      let arr = this.categoryList;
      //当前选择的是所有分类的话
      if (this.activeIndex == 0) {
        return arr;
      }
      //筛选子集分类
      return arr.filter(item => {
        return item.pid == this.cateIds[this.activeIndex];
      });
    }
  },
  methods: {
    //获取商品分类的数据
    getCategory() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/category/all"
      }).then(res => {
        this.categoryList = res.data;
        //筛选出所有的顶级分类
        res.data.forEach(item => {
          if (item.pid == 0) {
            // console.log(item);
            this.topCate.push({ text: item.name });
            this.cateIds.push(item.id);
          }
        });
      });
    },
    //点击切换左侧菜单
    changeLeft(index) {
      console.log(this.cateIds[index]);
    },
    goSearch(){
      
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="scss" scoped>
.sub_cate {
  max-height: 85%;
  overflow: auto;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 28%;
    margin: 1%;
    img {
      width: 90%;
      height: 1.2rem;
    }
    p {
      line-height: 0.6rem;
      width: 100%;
      text-align: center;
      text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
  }
}
</style>
