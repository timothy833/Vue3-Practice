<template>
 <div>
    <input type="text" v-model="text" />
    <button @click="$emit('viewText', text)">Send</button>
</div>


</template>




<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'View',
            //也可以顯式用箭頭函式對事件名稱以對象方式進行類型斷言
            //emits: {viewText: (value: string) => typeof value === 'string',}
    emits:['viewText'],
    data(){
        return{
            text: '',
        };
    },

});



</script>



<style scoped>

</style>
