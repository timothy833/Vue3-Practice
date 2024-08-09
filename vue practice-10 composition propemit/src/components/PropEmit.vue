<template>
  {{ thisName }}
  <br />
  <button @click="sendValue">傳值給父層</button>
  
  </template>
  
  
  <script lang="ts">
  import {ref, defineComponent, PropType, onMounted, SetupContext } from 'vue'
  
  export default defineComponent({
      name: 'PropEmit',
      //Js寫法props: ['name']
      props:{
          name:{
              type: String as PropType<string>,
              required: true, //確保name是必須的 因為未傳入值可能會造成undefind
          }
      },
      emits:['getName']
      //setup(props, context){ } 
      ,setup(props, context: SetupContext<{getName: (value:string) => void}>) {
          const thisName = ref<string>('');
  
          onMounted( () => {
              console.log('onMounted',props.name );
              if(props.name){
                  thisName.value = props.name;
              };
          });
  
          function sendValue() {
              context.emit('getName', thisName.value);
          };
  
          return {
              thisName,
              sendValue,
          }
      }
  })
  </script>
  
  
  <style scoped>
  
  </style>