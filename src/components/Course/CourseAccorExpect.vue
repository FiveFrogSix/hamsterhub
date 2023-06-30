<script setup>
import { ref, onMounted, onUpdated } from "vue"
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router"
import { useConfigStore } from "@/stores/config"
import ExpectIcon from "@/components/Icon/ExpectIcon.vue"

const route = useRoute()
const router = useRouter()
const configStore = useConfigStore()
const params = ref(route.params)
const color = ref(null)


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
            <div class="col-12 my-3 mt-md-2 mb-md-3">
                <div class="accordion" id="accordionExample">
                    <!-- 1 -->
                    <div class="accordion-item accordion-item-custom" :class="addClass">
                        <h2 class="accordion-header" id="headingOne">
                            <button @click="actionAboutAccordion($event)" class="accordion-button collapsed fs-18px fw-bold px-md-5 py-md-4"
                                :class="`accordion-${params.courseTypeName}`" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <ExpectIcon :color="color" />
                                <span class="ms-2"> สิ่งที่น้องจะได้เรียนรู้ </span>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body font-content p-0 px-md-5">
                                <!-- 2 -->
                                <hr :class="`hr-${params.courseTypeName}`">
                                <div class="accordion accordion-flush accordion-sub" id="accordionFlushExample">
                                    <div class="accordion-item accordion-sub-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button accordion-sub-button collapsed px-md-0" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                <div class="d-flex">
                                                    <div class="my-auto">
                                                        <p class="mb-0 fw-bold ">
                                                            Day 01
                                                        </p>
                                                    </div>
                                                    <div class="ms-3  fw-semibold text-black">
                                                        <span class="d-block"> ชนิดของข้อมูล และตัวแปร </span>
                                                        <span> Data Type & Variable </span>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse px-md-0"
                                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body fw-normal px-md-0 pt-md-0">
                                                <ul class="ps-md-4">
                                                    <li>สามารถจำแนกข้อมูลได้ชนิดต่างๆ</li>
                                                    <li>สามารถเข้าใจเรื่องของตัวแปร</li>
                                                    <li>สามารถแสดงผลข้อมูลต่างๆ</li>
                                                </ul>
                                                <ul :class="`ps-md-4 icon-play-${params.courseTypeName}`">
                                                    <li class="my-auto">เงื่อนไข Condition if ... else</li>
                                                    <li>การทำซ้า และพื้นฐานอัลกอริทึม (Loop)</li>
                                                    <li>การใช้ตัวแปรสำหรับเก็บข้อมูลขนาดใหญ่ (List)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>


