<template>
<!-- 取得變數 ref -->
{{ name }}
<br />

<!-- 取得 reactive 變數 -->
{{ user.id }} {{ user.name }}

</template>

<script  lang="ts">
import {defineComponent, ref, reactive } from 'vue';

export default defineComponent({
    name:'Composition',
    setup() {
        // 使用ref
        const name = ref<string>('');
        // 設定值要用.value
        name.value ='Jake';

        // 使用 reactive
        const user = reactive<{id: number; name: string;}>({
            id: 0,
            name: '',
        });

        //reactive 設定值不需要 value
        user.id = 1;
        user.name = 'Timo';
        return {
            name,
            user,
        };

    },

});


</script>


<style scoped>

</style>
