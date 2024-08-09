<template>
    <h2>v-if標籤</h2>
    <p v-if="isShow">Hello World</p>
    <hr />

    <h2>加入更多的 if else判斷式</h2>
    <p v-if="x === 0">x = 0</p>
    <p v-else-if="x === 1">x = 1</p>
    <p v-else-if="x === 2">x = 2</p>
    <p v-else>x != 0</p>
    <hr>

    <h2>另外可以使用v-show, 跟 v-if 有一樣的效果</h2>
    <p v-show="isShow">Hello World</p>
     <!-- v-show 與 v-if 的差別在於， v-show 如果不顯示的話，會在 HTML 上顯示：
       <p style="display: none;">Hello World</p>
       而 v-if 不顯示的話，會變成連標籤都消失不見。
       原因: 因為一個用CSS控制 一個是用JS為主要控制。
  -->

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent(
{
    name:'If',
    data(){
        return{
            isShow:true as boolean,
            x: 3 as number,
        };
    },    
})

</script>

<style scoped>

</style>