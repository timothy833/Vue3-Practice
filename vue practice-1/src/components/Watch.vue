<template>
<h2>基本監聽，按鈕按下去才會監聽</h2>
<br />
<button @click="addCount">Add Count</button>
<hr />

<h2>剛開始執行時就會監聽</h2>
{{ count2 }}
<hr />

<h2>監聽物件</h2>
<input type="text" v-model="user.name" />
<hr />

<h2>監聽陣列</h2>
<button @click="addItem">Add item</button>


</template>
<script lang="ts">
import { defineComponent } from 'vue'

interface User {
    name: string;
}

interface Data {
    count: number;
    count2: number;
    user: User;
    items: string[];
}

export default defineComponent({
    name:'Watch',
    data() : Data{
        return{
            count: 0,
            count2: 20,
            user: {
                name:' ',
            },
            items: [],
        };
    },
    methods:{
        addCount(){
            this.count += 1;
        },
        addItem(){
            this.items.push('test');
        },
    },
    watch: {
        count(newValue: number, oldValue: number){
            console.log(newValue, oldValue);
        },
        count2: {
            handler(newValue: number){
                console.log(newValue);
            },
            immediate: true, //要設定才會起作用, 剛開始執行時就會監聽。
        },
        user: {
            handler(newValue: User){
                console.log(newValue);
            },
            deep: true, //要監聽物件時, 要設定才會起作用。
        },
        items: {
            handler(newValue: string[]){
                console.log(newValue);
            },
            deep: true, //要監聽陣列時， 要設定才會起作用
        }

    },
})



</script>