<template>
<h2>製作一個按鈕, 這個按鈕按下去會將數值累加</h2>
{{ count }}
<button v-on:click="myFunction">Button</button>

<hr />

<h2>可以使用 @click 取代 v-on:click</h2>
{{ count }}
<button @click="myFunction">Button</button>

<hr />

<h2>將 event 傳入到 method</h2>
{{ count }}
<button @click="myFunction2(10)">Button</button>

<hr />

<h2> 按鈕可以同時傳入多個函式</h2>
{{ name }}
{{ count }}
<button @click="myFunction(), changeName() ">Button</button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:'Timo',
    data(){
        return{
            count: 0,
            name: 'Jake',
        };

    },
    methods: {
        myFunction(){
            this.count += 1;

        },
        //: void：
        // 这是返回类型注释，表示该函数没有返回值。void 类型意味着这个函数不会返回任何东西（即返回 undefined）。
        // 在 JavaScript 中，没有显式 return 语句的函数默认返回 undefined。
        myFunction2(temp: number): void{
            this.count += temp; 
        },
        changeName(){
            this.name = 'Allen';
        },
    },
});

// 总结
// $event 变量：用于将原生的 DOM 事件对象传递给方法，以便在方法中访问事件相关的信息。
// 使用场景：当需要在方法中处理事件对象（例如获取事件目标、阻止默认行为、获取鼠标位置等）时，使用 $event。
// 不需要时：如果方法不需要访问事件对象，可以省略 $event 参数。


</script>


<style>

</style>