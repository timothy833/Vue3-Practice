<template>
<h1>Hello Component</h1>
<p>{{ name }}</p>


</template>


<script  lang="ts">
import { defineComponent, PropType} from 'vue';


//沒有ts寫法
//export default{
//     name:'Header',
//     props:['name'],js模式可以用這樣方式書寫字串陣列形式定義，但是無法設定型別，也無碼追加默認值，請務必注意!
//};


export default defineComponent({
    name:'Header',
    props:{
        name:{
            type: String as PropType<string>,
            // required: true,
        },
    },
});

</script>


<style scoped>

</style>
