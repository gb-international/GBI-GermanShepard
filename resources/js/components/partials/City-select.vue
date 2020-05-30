<template>
    <div>
        <select class="form-control">
            <option v-for="city in list" :value="city.name" v-model="value" @change="SelectedItem(city.name)">{{ city.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name:"CitySelect",
    data(){
        return{
            list:[],
            value:''
        }
    },
    created: function() {
        this.$parent.$on('update', this.setValue);
    },
    created(){
        axios.get('/api/city').then(response=>{
            this.list = response.data.data;
        });
    },
    methods: {
     setValue: function(value) {
            this.value = value;
        }
    }
}
</script>
