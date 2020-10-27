<template>
    <div class="escort-sightseeing">
        <layout>
            <template #back>
                <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
            </template>
            <template #title>
                MADURAo-KODAIKANAL- MUNNAR- KOCHI
            </template>
            <template #body>
                <div class="sightseeing-body pt-4 pb-4">
                    <h3>Itinerary</h3>
                    <div class="sightseeing-row" v-for="i in 5" :key="i">
                        <h6 class="mt-2 mb-2">Sightseeing Day {{ i++ }}</h6>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value=""> Pulkha Mandpam
                                    </label>
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value=""> Pulkha Mandpam
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
                    <div class="col-sm-4">
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
    }
}
</script>