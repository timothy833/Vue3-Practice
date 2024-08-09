<template>
  <h2>使用 slot 可以自定義 HTML 標籤</h2>
  <Card>
    <h2>Content</h2>
  </Card>
  <Card>
    <a href="">Link</a>
  </Card>
  <hr />

  <h2>指定 slot name 傳入</h2>
  <Card>
    <template v-slot:header>
      <h1>My Header</h1>
    </template>
    <template v-slot:content>
      <h1>My Content</h1>
    </template>
  </Card>


</template>

<script lang="ts">
import Card from './components/Card.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name:'App',
  components: {
    Card,
  },
});
</script>

<style scoped>
/* .logo {
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
} */


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
