<template>
<h2>基本 Component </h2>
<Header />
<hr />

<h2>傳入參數</h2>
<Header name="Jake" />
<hr />

<h2>傳入參數使用變數</h2>
<Header :name="name" />
<hr />

<h2>傳入參數型別不相符</h2>
<Header2 :id="2" name="Eason" />
<hr />

<h2>傳入參數缺少時</h2>
<Header2 v-bind:id="1" name="Eason" />

</template>


<script  lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Header2 from './components/Header2.vue';

export default defineComponent({
    name:'App',
    components: {
        Header,
        Header2,
    },
    data(){
        return{
            name:<string>'Allan',//這只會適用於當前模板而不能用於其子組件值當中。
        };
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
