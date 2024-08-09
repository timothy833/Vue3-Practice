<template>
 <!-- 使用ref -->
  {{ name }}
<input type="text" v-model="name">

<!-- 使用reactive -->
{{ email }}
<input type="text" v-model="email">


</template>

<script lang="ts">
import { ref, reactive, toRefs, defineComponent} from 'vue';

export default defineComponent({
    name:'CompositionInput',
    setup() {
        const name = ref<string>('');

        const user = reactive<{email: string;}>({
            email:'',
        });
        return {
            name,
            ...toRefs(user),
        };
    },
});


</script>

<style scoped>


</style>