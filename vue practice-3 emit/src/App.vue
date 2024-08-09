<template>

<View @viewText="getViewText" id="app"/>
<br />
{{ text }}






</template>
<script lang="ts">
import View from './components/View.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name:'App',
  components: {
    View,
  },
  data() {
    return{
      text:'',
    };
  },
  methods:{
    getViewText(text:string){
      this.text = text;
    },
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
