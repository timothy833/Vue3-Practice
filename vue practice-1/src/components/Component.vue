<template>
<h2>Hello Component</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
//name 属性只是为了在调试工具中显示组件的名称，或者用于递归组件调用时引用自身。
    name:'Component',
});



</script>