<script setup>
import { ref, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from "vue-router"
import { useConfigStore } from "@/stores/config.js"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import BookIcon from "@/components/Icon/BookIcon.vue"

const configStore = useConfigStore()

const route = useRoute()
const params = ref(route.params)
const color = ref(null)

const modules = [Pagination, Autoplay, Navigation]
const breakpoints = ref(configStore.getSwiper.breakpoints)
const pagination = ref(configStore.getSwiper.paginations)
const autoplay = ref(configStore.getSwiper.autoplay)

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
                <div class="accordion" id="accordSeniorWorks">
                    <div class="accordion-item accordion-item-custom" :class="addClass">
                        <h2 class="accordion-header" id="headingSeniorWorks0">
                            <button @click="actionAboutAccordion($event)" class="accordion-button collapsed fs-18px fw-bold px-md-5 py-md-4 "
                                :class="`accordion-${params.courseTypeName}`" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSeniorWorks0" aria-expanded="false" aria-controls="collapseSeniorWorks0">
                                <BookIcon :color="color" />
                                <span class="ms-2">
                                    ผลงานของรุ่นพี่
                                </span>
                            </button>
                        </h2>
                        <div id="collapseSeniorWorks0" class="accordion-collapse collapse" aria-labelledby="headingSeniorWorks0"
                            data-bs-parent="#accordSeniorWorks">
                            <div class="accordion-body p-0 px-md-5">
                                <hr :class="`mb-3 hr-${params.courseTypeName}`">
                                <div class="px-3 px-md-0 pb-md-2">
                                    <swiper :slides-per-view="1" :space-between="0" :modules="modules" :pagination="pagination" :breakpoints="breakpoints" :autoplay="autoplay">
                                        <swiper-slide v-for="item in 10">
                                            <div class="card card-custom shadow-md-sma border border-0 h-100 mb-md-5">
                                                <img src="@/assets/imgs/Video.png" class="card-img-top"
                                                    alt="การ์ดผลงานนักเรียน">
                                                <div class="card-body px-0 px-md-3">
                                                    <p class="card-title mb-0 fs-16px fw-bold">ข้อมูล App Store ของน้องเฟรม</p>
                                                    <p class="card-text card-text-custom overflow-hidden">
                                                        งานวิเคราะห์แนวโน้ม App Store ถึง App ยอดนิยมต่างๆว่าทำไม ผู้ใช้ถึง นิยม App เหล่านั้นถึงเหตุผล ในเชิงค่านิยม และพฤติกรรมของผู้ใช้
                                                    </p>
                                                </div>
                                                <div class="card-footer d-none d-md-block col-9 ms-3 ps-0">
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


