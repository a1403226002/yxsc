<template>
  <div>
   <Head></Head>
    <List></List>
    <Jin></Jin>
    <Tui></Tui>
  </div>
</template>

<script>
import Head from '@/components/Home page/Head';
import List from '@/components/Home page/List'
import Jin from '@/components/Home page/Jin'
import Tui from '@/components/Home page/Tui'
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: [

  ],
  components:{
    Head,
    List,
    Jin,
    Tui
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style scoped>
</style>