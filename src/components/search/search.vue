<template>
  <div>
    <van-search placeholder="输入商品的名字" v-model="keywords" @keydown.enter="setHistory">
        <template #left>
            <van-icon name="arrow-left" size="25" @click="goBack"/>
        </template>
    </van-search>
    <!-- 历史记录信息 -->
    <div class="histroy" v-show="hFlag">
      <div class="h-head">
        历史记录
        <van-icon name="delete" @click="removeHistory"/>
      </div>
      <div class="items">
        <div class="h-item" v-for="(item,index) in historyList" :key="index">{{item}}</div>
      </div>
    </div>
    <Goods :goodsList="getGoods" v-show="!hFlag" />
  </div>
</template>

<script>
import Goods from "@/components/search/goods";

//导入本地存储
import storage from "@/utils/storage";
export default {
  name: "",
  mounted() {
    this.getGoodList();
    this.getHistory();//获取历史记录
  },
  data() {
    return {
      keywords: "",
      searchGoods: [],
      hFlag: true,//判断历史记录的效果

      historyList:[],
    };
  },
  components: {
    Goods
  },
  computed: {
    getGoods() {
      if (this.keywords == "") {
        this.hFlag = true;
        return [];
      }
      this.hFlag = false;
      return this.searchGoods.filter(item => {
        return item.name.indexOf(this.keywords) > -1;
      });
    }
  },
  methods: {
    //获取商品列表
    getGoodList() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/list"
      }).then(res => {
        this.searchGoods = res.data;
      });
    },

    //获取历史记录
    getHistory(){
        let data = storage.get("yx_history",true);
        this.historyList = (data == null ? [] : data);
    },
    
    setHistory(){
        //判断keywords不能为空
        if(this.keywords == ""){
            return false;
        }

        this.historyList.unshift(this.keywords);//往历史记录中追加内容

        if(this.historyList.length>8){
            this.historyList.pop();
        }
        storage.set("yx_history",this.historyList,true);//添加到本地存储
        this.keywords = "";
    },
    removeHistory(){
        storage.remove("yx_history");
        this.getHistory();
    },
    goBack(){
        this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.histroy {
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;

  .h-head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.35rem;
    font-weight: bold;
    line-height: 0.8rem;
  }

  .items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .h-item {
      width: 23%;
      margin: 1%;
      background-color: #f0f0f0;
      border-radius: 0.1rem;
      padding: 0.15rem;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
