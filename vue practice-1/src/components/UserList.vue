<template>
    <!-- :key 是表示要指定一個變數來當作 key，
    但因為這裡的 <p v-for="user in users1" :key="user">{{ user }}</p>
    user1 是一個陣列，裡面沒有其他的參考變數，所以可以直接指定這個 user 即可。 -->
    <h2 >v-for</h2>
    <!-- user in users1 語法定義了另外一個變數 user -->
    <p v-for=" user in users1" :key="user" >{{ user }}</p>
    
    <hr />
    
    <h2 >加入 index 來表示資料的編號</h2>
    <!-- 迴圈還可以透過 index 變數來表示資料的編號 -->
    <p v-for="(user, index) in users1" :key="index"  >{{index}} {{ user }}</p>
    
    <hr />
    
    <h2>用陣列的物件資料來顯示</h2>
    <!-- 使用JS物件中的Key就可以很方便的使用迴圈來直接存取這兩個 key。 -->
    <!-- 
    1. 在 Vue 中，v-for 循环中的 :key 属性期望一个唯一的标识符（通常是一个字符串或数 字）。错误信息表明你使用了一个对象作为 :key 的值，这导致了类型不匹配的问题。
    2. 正确的做法是使用对象的某个唯一属性作为 :key，例如 user.id 或 index，如果你的用户对象没有唯一的标识符，你可以使用 index 作为 :key 的值。 
    3. 可以考虑使用数组的 index 作为 :key，但这在某些情况下（例如对数组进行重新排序）可能会导致性能问题或渲染错误。
    -->
    <p v-for="(user, index) in users2" :key="user.email" >{{ index }} {{ user.name }} {{ user.email }}</p>
    
    <hr />
    
    <h2 >迴圈加入 if 判斷式</h2>
    <div v-for="(user, index,) in users1" :key="user">
      <p v-if="user === 'Jake'">
        {{ index }} {{ user }}
      </p>
    </div>
    
    </template>
    
    
    <script  lang="ts">
    import { defineComponent } from 'vue';
    
    interface User{
      name: string;
      email: string;
    }
    
    export default defineComponent({
      name:'App',
      data(){
        return{
          users1: ['Jake','Allen', 'Eason'], //as string[] 初始化狀況下純單一類型可不用類型斷言
          //1.物件陣列內的元素必須要用 {} 包起來，然後必須要指定 key，例如 name: 'Jake'，就表示宣告一個變數 name 等於 Jake。
          //2.email: 'jake@gmail.com'，就表示宣告一個變數 email 等於 jake@gmail.com。
          //3. 所以這邊的 name 跟 email 就是指定的 key。
          users2: [
            {name:'Jake', email: 'jake@gmail.com'},
            {name: 'Allen', email: 'allen@gmail.com'},
            {name:'Eason', email: 'eason@gmail.com'}
          ] as User[],
        };
      },
    });
    
    
    </script>