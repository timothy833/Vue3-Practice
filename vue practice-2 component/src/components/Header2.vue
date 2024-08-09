<template>
<h1>Hello Components</h1>
<p>{{ id }}</p>
<p>{{ name }}</p>
<p>{{ email }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType  } from 'vue';

export default defineComponent({
    name:'Header2',
    props: {
        //定義型別
        id: Number as PropType<number>,
        name: String as PropType<string>,
        email: {
            type: String as PropType<string>,
            default: 'demo@demo',
        },
    },
});
</script>

<style scoped>


</style>