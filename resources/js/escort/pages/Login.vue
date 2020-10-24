<template>
    
    <div class="container">
        <div class="row justify-content-center mt-5 pt-5">
        <div class="col-sm-4">
            <p class="text-center">
            <img src="assets/admin/default/icon/logo.png" />
            </p>
            <form class="mt-5">
            <div class="form-group relative">
                <span
                class="text-info otp_link absolute cursor-pointer font-weight-bold"
                >Get OTP</span
                >
                <label class="text-white font-weight-bold"
                >Enter Mobile Number</label
                >
                <input
                type="text"
                class="input_straight"
                placeholder="Enter mobile number"
                />
            </div>

            <div class="form-group">
                <label class="text-white font-weight-bold">Enter OTP</label>
                <input
                type="number"
                class="input_straight"
                placeholder="Enter OTP"
                />
            </div>
            <div class="form-group mt-4">
                <button type="submit" class="btn btn-block text-white btn-submit">
                SUBMIT
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>

</template>