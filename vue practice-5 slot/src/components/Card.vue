<template>
<div>
  <!-- 使用slot 可以讓外部 HTML 傳入 -->
   <slot></slot>

  <!-- 使用slot name 可以讓外部指定 HTML 傳入 -->
  <slot name="header"></slot>
  <slot name="content"></slot>

  <!-- 設定 component 的style 會傳遞到父 component -->
  <h2>Title</h2>
</div>
</template>


<script  lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name:'Card',
});

</script>


<!-- 設定 component 的 style 會傳遞到父 component 前提要沒有scoped屬性-->
<style scoped>
h2 {
  color: red;
}
</style>
