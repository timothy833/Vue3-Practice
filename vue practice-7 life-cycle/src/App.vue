<template>
<button @click="show">Load Component</button>
<Component v-if="isShow" />
<br />

<input type="text" ref="inputRef" />
<!-- <component></component> -->
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import Component from './components/Component.vue';

export default defineComponent({
  name:'App',
  components: {
    Component,
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
    //API 呼叫
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');

    //UI控制
    // this.$refs.inputRef.focus(); js寫法
    //$refs 问题：在 mounted 生命周期中，使用 TypeScript 类型断言 (as HTMLElement | null) 来确保 inputRef 存在并且是一个 HTML 元素。
    const inputRef = this.$refs.inputRef as HTMLElement | null;
    if(inputRef) {
        inputRef.focus();
    };
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  data() {
      return{
        isShow: false,
      };
  },
  methods: {
    show() {
        this.isShow = !this.isShow;
    },
  },
});
</script>

<style scoped>

</style>
