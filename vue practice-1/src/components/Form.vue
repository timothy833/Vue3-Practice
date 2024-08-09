<template>
<h2>input</h2>
{{ name }}
<br>
<input type="text" v-model="name">
<hr>

<h2>textarea</h2>
{{ name }}
<br>
<textarea name="" id="" cols="" rows="" v-model="name"></textarea>
<hr>

<h2>select</h2>
{{ selectValue }}
<br>
<select name="" id="" v-model="selectValue">
    <option value="">select</option>
    <option value="4">1</option>
    <option value="5">2</option>
    <option value="6">3</option>
</select>
<hr>

<h2>checkbox 單選</h2>
{{ isCheck }} 
<br>
<input type="checkbox" v-model="isCheck">
<hr>


<h2>checkbox 多選</h2>
{{ checkbox }}
<br>
<input type="checkbox" value="0" v-model="checkbox"> 0
<input type="checkbox" value="3" v-model="checkbox"> 1
<input type="checkbox" value="4" v-model="checkbox"> 2
<input type="checkbox" value="5" v-model="checkbox"> 3
<hr>

<h2>radio 單選</h2>
{{ radio }} 
<br>
<input type="radio" value="0" v-model="radio"> 0
<input type="radio" value="1" v-model="radio"> 1
<input type="radio" value="2" v-model="radio"> 2
<input type="radio" value="3" v-model="radio"> 3
<hr>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface FormData {
    name: string;
    text: string;
    selectValue: string;
    isCheck: boolean;
    //(string | number | boolean)[]; // 多类型数组
    checkbox: string[];
    radio: string;
}

export default defineComponent({
    name:'Form',
    data():FormData{
        return{
            name: '',
            text: '',
            selectValue: '',
            isCheck: false,
            checkbox: [],
            radio:'',
        }
    }



})


</script>

<style scoped>


</style>