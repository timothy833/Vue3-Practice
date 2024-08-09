<template>
<p>Component2</p>
<!-- 加入 keep alive 測試 -->
<input type="text" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name:'Component2',
});
</script>



<style scoped>
.read-the-docs {
  color: #888;
}
</style>