import { ref } from 'vue';

export default function Counter(startIndex: number, step: number) {
    const count = ref<number>(startIndex);

    function increment() {
        count.value += step;
    };
    return {
        count,
        increment,
    };
};