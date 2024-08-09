<template>
   <!-- setup(){} 語法寫法  -->
  <!-- <PropEmit :name="name1" @getName="getName1"/> -->

  <!-- <script setup lang="ts">語法糖 -->
  <PropEmitSetup :name="name1" @getName="getName1"/>


</template>
<script setup lang="ts">
// setup(){} 語法寫法 (需用export default導出)
// import { ref, defineComponent} from 'vue';
// import PropEmit from './components/PropEmit.vue';

// export default defineComponent({
//   name:'App',
//   components: {
//     PropEmit,
//   },
//   setup() {
//     const name1 = ref('Timo');
    
//     function getName1(value:string) {
//       alert(value);
//     };

//     return {
//       name1,
//       getName1,
//     }
//   }
// })

//<script setup lang="ts">語法糖
import { ref } from 'vue';

import PropEmitSetup from './components/PropEmitSetup.vue';

const name1 = ref('Timo');

function getName1(value: string){
  alert(value);
};





</script>



<style scoped>

</style>
