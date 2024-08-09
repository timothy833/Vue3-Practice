<template>
<div id="app">
  <FormPlus />
</div>
</template>


<script  lang="ts">
import { defineComponent } from 'vue';
// import Form from './components/Form.vue';
import FormPlus from './components/FormPlus.vue';
// import UserList1 from './components/UserList1.vue';
// import Demo from './components/Demo.vue'
// import If from './components/If.vue'


//composition API引入;
// export default defineComponent({
//   name:"App",
//   components:{
//     Form,
//   }
// });



// option API引入法 其實兩者引入沒有差別
export default defineComponent({
  name: 'App',
  components: {
    FormPlus,
  },
});


</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2240ba;
  margin-top: 60px;
}
</style>
