<template>
    <div class="main">
        <van-nav-bar title="严选专栏" left-arrow @click-left="goBack"/>
        <div class="list">
            <div class="item" v-for="(item,index) in articleList" :key="index">
                <img :src="item.pic"/>
                <p v-html="item.title"></p>
                <p v-html="item.descript"></p>
                <van-button plain round type="primary" class="btn" @click="$router.push('/article/detail/'+item.id)">查看详情</van-button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'',
    created(){
        this.getArticle();
    },
    data() {
        return{
            articleList:[]
        };
    },
    computed:{

    },
    methods:{
    //返回首页
      goBack(){
         this.$router.go(-1); 
      },
        getArticle(){
            this.$axios({
                url:"/cms/news/list"
            }).then(res=>{
                console.log(res);
                this.articleList = res.data;
            })
        }
    },

};
</script>

<style scoped lang="scss">
    .main{
        width: 100%;
        background: #f0f0f0;

        .list{
            width: 100%;
            .item{
                width: 100%;
                position: relative;
                padding: .2rem .1rem;
                box-sizing: border-box;
                img{
                    width: 100%;
                    height: 4.2rem;
                }
                p{
                    position: absolute;
                    width: 90%;
                    left: 5%;
                    top:.3rem;
                    width: 100%;
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #f0f0f0;
                }
                p:nth-of-type(1){
                    top:.3rem;
                    line-height: .7rem;
                    font-size: .4rem;
                }
                p:nth-of-type(2){
                    top: 1.2rem;
                    line-height: .6rem;
                    font-size: .3rem;
                }
                .btn{
                    display: block;
                    position: absolute;
                    bottom: .4rem;
                    z-index: 100;
                    left: 50%;
                    transform: translateX(-50%);
                    background: none;
                    color: #fff;
                    line-height: .6rem;
                }
            }
        }
    }


</style>