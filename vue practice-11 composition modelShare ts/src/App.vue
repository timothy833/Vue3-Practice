<template>
{{ count }}
<button @click="increment">點擊+</button>
</template>
<script setup lang="ts">
import Counter from './Counter';

const { count, increment } = Counter(1000,100);
</script>

<style scoped>

</style>
