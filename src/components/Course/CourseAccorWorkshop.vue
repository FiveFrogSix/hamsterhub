<script setup>
import { ref, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from "vue-router"
import { useConfigStore } from "@/stores/config.js"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';

import WorkshopIcon from "@/components/Icon/WorkshopIcon.vue"

const configStore = useConfigStore()

const route = useRoute()
const params = ref(route.params)
const color = ref(null)

const modules = [Pagination, Autoplay]
const breakpoints = ref(configStore.getSwiper.breakpoints)
const pagination = ref(configStore.getSwiper.paginations)
const autoplay = ref(configStore.getSwiper.autoplay)

const paginationCustom = ref({
    ...pagination.value
})

const addClass = ref({
    "accordion-item-active": false
})

onBeforeRouteUpdate(async (to, from) => {
    params.value = to.params
    color.value = configStore.getPageColor[params.value.courseTypeName]
})

onMounted(async () => {
    color.value = configStore.getPageColor[params.value.courseTypeName]
})

const actionAboutAccordion = (e) => {
    addClass.value["accordion-item-active"] = !addClass.value["accordion-item-active"]
}

</script>
<template>
    <Transition name="flip">
        <div v-show="configStore.getFlip" class="container-fluid">
            <div class="col-12 my-3">
                <div class="accordion" id="accordWorkshop">
                    <div class="accordion-item accordion-item-custom" :class="addClass">
                        <h2 class="accordion-header" id="headingWorkshop0">
                            <button @click="actionAboutAccordion($event)" class="accordion-button collapsed fs-18px fw-bold px-md-5 py-md-4 "
                                :class="`accordion-${params.courseTypeName}`" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseWorkshop0" aria-expanded="false" aria-controls="collapseWorkshop0">
                                <WorkshopIcon :color="color" />
                                <span class="ms-2">
                                    ลักษณะงานและโจทย์ทางธุรกิจ
                                </span>
                            </button>
                        </h2>
                        <div id="collapseWorkshop0" class="accordion-collapse collapse" aria-labelledby="headingWorkshop0"
                            data-bs-parent="#accordWorkshop">
                            <div class="accordion-body p-0 px-md-5">
                                <hr :class="`mb-3 hr-${params.courseTypeName}`">
                                <div class="px-3 px-md-0 pb-md-2">
                                    <swiper :slides-per-view="1" :space-between="0" :modules="modules" :pagination="paginationCustom"
                                        :breakpoints="breakpoints" :autoplay="autoplay">
                                        <swiper-slide v-for="item in 4">
                                            <div class="card card-custom shadow-md-sma border border-0  bg-md-white h-100 mb-md-5">
                                                <img src="@/assets/imgs/Workshop.png" class="card-img-top" alt="การ์ดผลงานนักเรียน">
                                                <div class="card-body px-0 px-md-3">
                                                    <p class="card-title mb-0 fs-16px fw-bold">ข้อมูลงานวิเคราะห์ข้อมูลต่างๆ</p>
                                                    <p class="card-text card-text-custom overflow-hidden">
                                                        งานวิเคราะห์ข้อมูลต่างๆเป็นสิ้งที่สำคัญมากในธุรกิจขนาดใหญ่ เพราะ ข้อมูลถือเป็นอาวุธ ที่แข็งแกร่งที่สุด ในการตัดสินใจต่างๆในการลงทุนและทักษะนี้ขาดแคลนอย่างมากในตลาดแรงงาน ณ ปัจจุบัน
                                                    </p>
                                                </div>
                                                <div class="card-footer d-none d-md-block col-9 ms-3 ps-0 ">
                                                    <a href="#" class="link-yellow text-decoration-none fs-md-18px">
                                                        รายละเอียดเพิ่มเติม <i class="right-arrow-footer align-middle"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>


