<template>
<h1>composition API寫法</h1>
<h2 >v-for</h2>
<p v-for=" user in users1" :key="user" >{{ user }}</p>

<hr />

<h2 >加入 index 來表示資料的編號</h2>
<p v-for="(user, index) in users1" :key="user"  >{{index}} {{ user }}</p>

<hr />

<h2>用陣列的物件資料來顯示</h2>
<p v-for="(user, index) in users2" :key="user.email" >{{ index }} {{ user.name }} {{ user.email }}</p>

<hr />

<h2 >迴圈加入 if 判斷式</h2>
<div v-for="(user, index,) in users1" :key="user">
    <p v-if="user === 'Jake'">
    {{ index }} {{ user }}
    </p>
</div>    
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface User{
    name:string;
    email:string;
};

export default defineComponent({
    name: 'UserList1',
    setup(){
        const users1 = ref(['Jake','Allen', 'Eason']);
        const users2 = ref<User[]>([  
            {name:'Jake', email: 'jake@gmail.com'},
            {name: 'Allen', email: 'allen@gmail.com'},
            {name:'Eason', email: 'eason@gmail.com'}
        ]); 

        return{
            users1,
            users2
        };
    },
});

</script>


<style scoped>

</style>