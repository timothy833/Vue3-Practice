<template>
<CompositionWatch />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import CompositionFunction from './components/CompositionFunction.vue';
import CompositionWatch from './components/CompositionWatch.vue';

export default defineComponent({
  name: 'App',
  components: {
    CompositionWatch,
  },
});

</script>


<style scoped>

</style>
