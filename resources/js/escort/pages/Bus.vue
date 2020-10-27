<template>
    <div class="container p-4">
        <div class="back mb-1">
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </div>
        <h5 class="text-muted">
            Bus
        </h5>

        <div class="pt-4 font-weight-bolder pb-4 whitesomke">
            <div v-for="i in 3" :key="i">
                <div class="row m-0 pr-2 pl-2">
                    <div class="col-sm-4">
                        <label class="text-muted f-12">Bus Number or Name</label>
                        <p>The Teja bus service (48484 ) </p>
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Source</label>
                                <p>Delhi</p>
                            </div>
                            
                            <div class="col">
                                <label class="text-muted f-12">Destination</label>
                                <p>Mumbai</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Departure</label>
                                <p>27/10/2020</p>
                            </div>
                            <div class="col">
                                <label class="text-muted f-12">Passengers</label>
                                <p>100</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <label class="text-muted f-12">Contact Number</label>
                        <p>Raj niwas 98989898989</p>
                    </div>
                </div>
                <hr class="w-95" />
            </div>
        </div>
    </div>
</template>
