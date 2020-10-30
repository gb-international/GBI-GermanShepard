<template>
    <div class="escort-sightseeing">
        <layout>
            <template #back>
                <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
            </template>
            <template #title>
                 {{ $store.getters.getTitle }}
            </template>
            <template #body>
                <div class="sightseeing-body pt-4 pb-4">
                    <h3>Itinerary</h3>
                    <div class="sightseeing-row" v-for="row in sightseeings" :key="row.id">
                        <h6 class="mt-2 mb-2">Sightseeing Day</h6>
                        <div class="row">
                            <div class="col-sm-6"  v-for="data in row" :key="data.id">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" 
                                        :true-value="1"
                                        :false-value="0"
                                        v-model="data.mark_arrive"
                                        :value="data.mark_arrive"
                                        :checked="data.mark_arrive == 1 ? true: false"
                                        > {{ data.sightseeing.name }}
                                    </label>
                                </div>
                            </div>

                        </div>
                        <hr />
                    </div>
                </div>
            </template>

            <template #footer>
                <div class="row justify-content-center">
                    <div class="col-sm-4" @click="submitForm()">
                        <submit-button class="btn-block">update</submit-button>
                    </div>
                </div>
            </template>

        </layout>
    </div>
</template>
<script>
import layout from '@/escort/components/Layout'
import SubmitButton from '@/escort/components/SubmitButton'
export default {
    components:{
        layout,
        SubmitButton
    },
    data(){
        return{
            sightseeings:'',
        }
    },
    created(){
        this.sightseeingList();
    },
    methods:{
        sightseeingList(){
            var api = '/escort/sightseeing/'+ this.$route.params.tour_code;
            axios.get(api).then(res => {
                this.sightseeings = res.data;
            }).catch(error => {
                console.log(error);
            })
        },
        submitForm(){
            var api = '/escort/sightseeing/'+ this.$route.params.tour_code;
            axios.post(api,this.sightseeings).then(res => {
                this.$toast.fire({
                    icon: "success",
                    title: "Successfully updated!!!"
                });
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>