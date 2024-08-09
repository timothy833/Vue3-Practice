<template>
<p>Component</p>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name:'Component',
  beforeCreate() {
    console.log('Component beforeCreate');
  },
  created() {
    console.log('Component created');
  },
  beforeMount() {
    console.log('Component beforeMount');
  },
  mounted() {
    console.log('Component mounted');
  },
  beforeUpdate() {
    console.log('Component beforeUpdate');
  },
  updated() {
    console.log('Component updated')
  },
  beforeUnmount() {
    console.log('Component beforeUnmount')
  },
  unmounted() {
    console.log('Component unmounted')
  },
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
