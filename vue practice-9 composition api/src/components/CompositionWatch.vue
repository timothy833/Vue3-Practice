<template>
 <!-- watch ref變數 -->
<input type="text" v-model="name" />
<input type="text" v-model="email" />
<br />

<!-- watch reactive -->
<input type="text" v-model="phone" />
 
</template>

<script lang="ts">
import { ref, reactive, defineComponent, watch, toRefs} from 'vue';

export default defineComponent({
    name: 'CompositionWatch',
    setup() {
        const name = ref<string>('Peter');
        const email = ref<string>('');
        //一個變數
        // watch(name , (newValue, oldValur) => {
        //     console.log(newValue, oldValue);
        // });

        //多個變數
        watch([name, email], (newValue, oldValue)=> {
            console.log('name', newValue[0], oldValue[0]);
            console.log('email', newValue[1], newValue[1]);
         },
         {
            immediate: true,
         },
        
        );

        const user = reactive({
            phone: <string> '',
        });

        //這樣寫newValue 與 oldValue 不會有分別
        // watch(user, (newValue, oldValue) => {
            // console.lod('uesr', newValue, oldValue);
        // });
        watch(() => {
                return{
                    ...user
                };
            },
            (newValue, oldValue) => console.log('user', newValue, oldValue)
            ,
        );
        return {
            name,
            email,
            ...toRefs(user),
        };
    },
});

</script>

<style scoped>


</style>