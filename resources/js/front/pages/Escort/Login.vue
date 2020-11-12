<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-4">
                <p class="text-center">
                    <img src="/assets/admin/default/icon/logo.png">
                </p>
                <form @submit.prevent="submit()">
                    <div class="form-group">
                        <label>Enter Mobile Number</label>
                        <input type="number" class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <label>Enter OTP</label>
                        <input type="number" class="form-control">
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-info">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>