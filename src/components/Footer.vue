<script setup>
    import Logo from "@/assets/svg/logo.svg"
</script>
<template>
    <div class="footer-custom container-fluid position-relative px-0 bg-grey-2" >
        <div class="bg-bottom"></div>
        <div class="text-white">
            <div class="container-fluid pt-4 pb-2">
                <div class="row rows-col-2">
                    <div class="col ">
                        <div class="d-flex justify-content-center align-items-center">
                            <div>
                                <img :src="Logo" alt="โลโก้" width="45" height="45">
                            </div>
                            <div class="my-auto ms-2 fw-bold fs-14px">
                                <span>Hamster Hub</span>
                            </div>
                            <div class="border-break-footer"></div>
                            <div>
                                <a href="#" target="_blank" class="link-white text-decoration-none fw-500">
                                    <img src="@/assets/imgs/footer/line.png" alt="LINE"  >
                                    <span class="ms-2 d-none d-md-inline align-middle">@smart-school</span>
                                </a>
                            </div>
                            <div class="border-break-footer  d-none d-md-block"></div>
                            <div class="ms-2">
                                <a href="#" target="_blank" class="link-white text-decoration-none fw-500">
                                    <img src="@/assets/imgs/footer/facebook.png" alt="FACEBOOK" >
                                    <span class="ms-2 d-none d-md-inline align-middle">HamsterHub Thailand</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="col-6 mx-auto hr-custom-2 my-2">
                <div class="d-flex justify-content-center fs-11px fw-500 ">
                    <div class="text-end pe-2 my-auto">
                        Copyright © 2023 hamsterhub.co
                    </div>
                    <div class="ms-2">
                        <img src="@/assets/imgs/footer/tel.png" alt="รูปไอคอนโทรศัพท์"  >
                        <span class="ms-1">
                            090-060-2555
                        </span>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>