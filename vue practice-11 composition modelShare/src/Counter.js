import { ref } from 'vue';

export default function Counter(starIndex, step) {
    //const count = ref(0);
    const count = ref(starIndex);

    function increment() {
        //count.value ++;
        count.value += step;
    };
    return {
        count,
        increment,
    }
};