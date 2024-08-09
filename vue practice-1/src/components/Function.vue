<template>
<h2>如果需要針對變數計算可以這樣寫</h2>
{{ x * y  }}

<h2> 這個運算方法可以寫x * y 一個共用的函式來使用</h2>
{{ myFunction1() }}

<h2>函式傳入值</h2>
{{ myFunction2(100)}}


</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:'fun1',
    data(){
        return {
            x:100,
            y:2,
        };
    },
    methods:{
        myFunction1(){
             //注意在這邊要用 this 來取得定義在 data() 內的變數
            return this.x * this.y
        },

          //也可以從template傳入值給函式
        myFunction2(value:number){
            return this.x * this.y + value
        },
    },
});



</script>


<style scoped>


</style>


