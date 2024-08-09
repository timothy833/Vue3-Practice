<template>
  {{ thisName }}
  <br />
  <button @click="sendValue">傳值給父層</button>  
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

const props = defineProps<{ name: string;}>();

const emit = defineEmits<{
                (e:'getName', value: string): void
             }>();

const thisName = ref<string>(props.name ?? '');

onMounted(() => {
    console.log('onMounted', props.name);
    if(props.name){
        thisName.value = props.name;
    };
});

function sendValue() {
    emit('getName',thisName.value);
};

</script>


<style scoped>

</style>