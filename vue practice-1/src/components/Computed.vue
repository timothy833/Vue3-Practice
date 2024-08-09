<template>
  <!-- methods 與 computed 的差別 -->
  <!-- computed 不管呼叫多少次，都只會執行一次 -->
{{ testMethod() }}
{{ testMethod() }}
{{ testComputed }}
{{ testComputed }}

<!-- computed 可以用在一開始網頁執行時需要的判斷 -->
<div v-for="data in checkDatas" :key="data.id">
    {{ data.id }} {{ data.name }} 
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface DataItem {
    id: number;
    name: string;
}

export default defineComponent({
    name: 'Computed',
    data():{datas: DataItem[] }{
        return{
            datas:[
                {id: 1, name: 'Timo' },
                {id: 2, name: 'Allan'},
                {id: 1, name: 'Eason'},
            ],
        };
    },
    methods: {
        testMethod(): void{
            console.log('testMethod')
        }
    },
    computed: {
        testComputed(): void{
            console.log('testComputed')
        },
        checkDatas(): DataItem[] {
            //filter((data) => {data.id} === 1 這段參數中 data可以定義為任意名稱，如item也行，例如: filter((item) => { item.id } === 1
            return this.datas.filter((data) =>  data.id  === 1);
        },
    },
});


</script>

<style>


</style>