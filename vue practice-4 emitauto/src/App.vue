<template>
 {{ name }}
 <br />
 <Input v-model="name" /> 
</template>

<script lang="ts">
import Input from './components/Input.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name:'App',
  components: {
    Input,
  },
  data(){
    return {
      name: <string> '' ,
    };
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
