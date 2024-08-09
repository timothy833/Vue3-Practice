<template>
{{ count }}
<button @click="increment">按鈕+</button>
</template>


<script setup>
// import Counter from './Counter';
//一般寫法
// export default {
//   name: 'App',
//   setup() {
//     const { count, increment} = Counter(1000, 100);

//     return {
//       count,
//       increment
//     };
//   },
// };

//setup語法糖寫法
import Counter from './Counter';

const { count, increment } = Counter(1000, 1000);


</script>



<style scoped>

</style>
