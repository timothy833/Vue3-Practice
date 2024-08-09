<template>
<input type="text" v-model="formIndex.name" />
<br />
<br />

<textarea name="" id="" cols="" rows="" v-model="formIndex.text"></textarea>
<br />

<select name="" id="" v-model="formIndex.selectValue">
    <option value="0">select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
<br />

<input type="checkbox" v-model="formIndex.isCheck" />is check
<br />

<input type="checkbox" value="0" v-model="formIndex.check" />0
<input type="checkbox" value="1" v-model="formIndex.check" />1
<input type="checkbox" value="2" v-model="formIndex.check" />2
<input type="checkbox" value="3" v-model="formIndex.check" />3
<br />


<input type="radio" value="0" v-model="formIndex.radio" />0
<input type="radio" value="帥" v-model="formIndex.radio" />1
<input type="radio" value="哥" v-model="formIndex.radio" />2
<br />

<button @click="submit">點擊</button>
<br />

{{ formIndex }}


</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface FormIndex{
    name: string;
    text: string;
    selectValue: string;
    isCheck: boolean;
    check: string[];
    radio: string;   

}

export default defineComponent({
    name:'FormPlus',
    data():{formIndex:FormIndex}{
        return{
            formIndex: {
                name: '',
                text: '',
                selectValue: '',
                isCheck: false,
                check: [],
                radio: '',
            }
        }   
    },
    methods: {
        submit():void{
            console.log(this.formIndex)
        }
    }
})

</script>

<style scoped>


</style>