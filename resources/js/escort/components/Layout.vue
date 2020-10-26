<template>
    <div class="container">
        <div class="pt-4 pb-4">
            <div class="row">
                <div class="cols-m-1">
                    <slot name="back">Back</slot>
                </div>
                <div class="col-sm-11">
                    <h3 class="text-heading text-uppercase text-center">
                        <slot name="title"></slot>
                    </h3>
                </div>
            </div>

            <div class="pt-4 pb-4">
                <slot name="body"></slot>
            </div>
            
            <div class="footer-layout">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>