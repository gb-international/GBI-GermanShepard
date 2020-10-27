<template>
    <div class="container p-4">
        <div class="back mb-1">
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </div>
        <h5 class="text-muted">
            Hotel
        </h5>

        <div class="hotel-body pt-4 font-weight-bolder pb-4 whitesomke">
            <div class="hotel-data" v-for="i in 3" :key="i">
                <div class="row m-0 pr-2 pl-2">
                    <div class="col-sm-6">
                        <label class="text-muted f-12">Hotel Name</label>
                        <p>The Taj Hotel </p>
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Check In</label>
                                <p>27/10/2020</p>
                            </div>
                            
                            <div class="col">
                                <label class="text-muted f-12">Check Out</label>
                                <p>27/10/2020</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Group Member</label>
                                <p>100</p>
                            </div>
                            
                            <div class="col">
                                <label class="text-muted f-12">Contact Number</label>
                                <p>890383948</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="w-95" />
            </div>
        </div>
    </div>
</template>