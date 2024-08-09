<template>
{{ count }}
<button @click="incrementCount">Add Count</button>


</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Count from './Count';


export default defineComponent({
  name:'App',
  //程序跟組件分離，加入模組形式
  mixins: [Count],

  //寫在組件裡面方法
  // data(){
  //   return{
  //     count: 0,
  //   };
  // },
  // methods: {
  //   incrementCount() {
  //     this.count += 1;
  //   },
  // },
})

    
</script>




<style scoped>

</style>
