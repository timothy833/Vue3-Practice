<template>
  <button @click="show('tab1')">Component1</button>
  <button @click="show('tab2')">Component2</button>
  <button @click="show('tab3')">Component3</button>

  <Component1 v-if="tab === 'tab1'" />
  <keep-alive>
    <Component2 v-if="tab === 'tab2'" />
  </keep-alive>
  <Component3 v-if="tab === 'tab3'" /> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Component1 from './components/Component1.vue';
import Component2 from './components/Component2.vue';
import Component3 from './components/Component3.vue';

export default defineComponent({
  name:'App',
  components: {
    Component1,
    Component2,
    Component3,
  },
  data() {
    return{
      tab:'',
    };
  },
  methods: {
    show(index:string) {
      this.tab = index;
    },
  },
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
