<template>
 <!-- ref 方式 -->
 <p>{{ count }}</p>
 <button @click="incrementCount">count</button>

 <!-- reactive -->
<p>{{ state.count1 }}</p>
<button @click="incrementCount2">count1</button>


</template>
<script lang="ts">
import {ref, reactive, defineComponent} from 'vue';

export default defineComponent({
    name:'CompositionFunction',
    setup() {
        //ref
        const count = ref<number>(0);
        function incrementCount(): void{
            count.value ++;
        };
        // reavtive
        const state = reactive<{count1: number}>({
            count1: 0,
        });
        function incrementCount2(): void {
            state.count1 += 1;
        }
        
        return {
            count,
            incrementCount,

            state,
            incrementCount2,
        };
    },
});


</script>

<style scoped>


</style>