<template>
<input type="text" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
</template>

<script  lang="ts">

//JS寫法
// export default{
//   name:'Input',
//   props: {
//     modelValue: String,  modelValue 為系統名稱，不能自由命名
//   }
// };

import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name:'Input',
  props: {
    modelValue: {
      type: String as PropType<string>,
      required: true,
    }
  }
});

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
