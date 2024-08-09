<template>
<h2>input:</h2>
{{ name }}
<br>
<!-- v-model 用于在表单控件（如输入框、复选框、单选按钮等）和组件之间实现双向数据绑定。它可以简化数据的输入和更新过程，使得开发者无需手动处理事件监听和数据同步。 -->
<input type="text" v-model="name">
<hr>

<h2>input: 去除前後空白</h2>
<!-- v-model.trim用于自动移除绑定字符串的前后空白字符。它在双向数据绑定时，可以确保输入的数据不会包含多余的空白字符，特别是在处理用户输入时非常有用。 -->
{{ name }}
<br>
<input type="text" v-model.trim="name">
<hr>

<h2>input 游標跳出才更新：</h2>
<!-- 将数据绑定更改为在 change 事件时更新，而不是在 input 事件时更新 -->
{{ name }} 
<br />
<input type="text" v-model.lazy="name" />
<hr />

<h2>input 防止顯示的變數被更改：</h2>
<!-- v-once 可以防止顯示的變數被更改，但其實只是不顯示被更新的值而已(只更新初始化一次) -->
<p v-once>{{ message }}</p>
<br />
<input type="text" v-model.lazy="message" />
<hr />

<h2>input 完全顯示標籤的內容：</h2>
<!-- v-pre 可以完全顯示標籤的內容，也就是在 <p></p> 裡面是什麼內容就顯示什麼內容 -->
<p v-pre>{{ name }}</p>
<br />
<input type="text" v-model.lazy="name" />
<hr />


</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name:'Input',
    data(){
        return{
            name:'0',
            message:'',
        };
    },} as { data():{name:string, message:string}}
)


</script>


<style scoped>


</style>