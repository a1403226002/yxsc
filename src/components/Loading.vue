<template>
  <div class="dy-loading">
    <img width="150" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1805456160,3947146406&fm=26&gp=0.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: [

  ],
  components:{
  },
 computed:{
     
 },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style scoped>
.dy-loading{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 300;
}
</style>