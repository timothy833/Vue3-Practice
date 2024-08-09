<template>
{{ message }}

</template>

<script lang="ts">
import { defineComponent } from 'vue';
// 所有程式邏輯都必須要寫在 export default {} 裡頭
export default defineComponent({
    // name: 取的名字通常是.vue檔案名稱，但是好像不取一模一樣也不影響 
    // data() {} 是宣告變數的地方，在裡面使用 return 來輸出一個變數 message，輸出的意思就是將變數輸出給 <template></template> 可以來使用。而這個變數 message 的型別是一個字串
    name:'HelloWorld',
    data(){
        return{
            //也可以直接在'Hello World'後面接 as string 進行類型斷言
            message:'Hello World',
        };
    },} as {
        //這方法可以直接讓所有data中的message都能被類型斷言成字串，不過用這方法要注意，一定要在{name:'',data(){}完後面馬上接 as 同一行空格可以生效換行就會斷言失敗}
        data(): { message:string}
    }
);

</script>


<style scoped>


</style>