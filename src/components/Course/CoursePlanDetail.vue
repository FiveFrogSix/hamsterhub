<script setup>
    import { ref, onMounted, onUpdated } from "vue"
    import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router"
    import { useConfigStore} from "@/stores/config"
    import { useCourseStore} from "@/stores/course"

    const route = useRoute()
    const router = useRouter()
    const courseStore = useCourseStore()
    const configStore = useConfigStore()
    const params = ref(route.params)
    

    onBeforeRouteUpdate( async (to, from) => {
        params.value = to.params
    })

</script>
<template>
    <Transition name="flip">
        <!-- Start รายละเอียดแผนการเรียน -->
        <div v-show="configStore.getFlip" class="bg-detail container-custom px-3 pt-3 pb-0 pb-md-3" 
            :style="
                    [ 
                        params.courseLevel == undefined ? {'border-top-right-radius': '12px' } : {'border-top-right-radius': '0px' },
                        params.courseLevel == courseStore.getMaxLevel ? {'border-top-left-radius': '12px' } : {'border-top-left-radius': '0px' },
                        params.courseLevel != undefined && params.courseLevel < courseStore.getMaxLevel ? { 'border-top-left-radius': '12px', 'border-top-right-radius': '12px' } : {'z-index': '1' },
                    ]">
            <div class="row row-cols-1 row-cols-md-2 mx-0">
                <div class="col ps-md-2">
                    <img src="@/assets/imgs/Banner.png" alt="Banner" class="img-fluid w-100" >
                </div>
                <div class="col pe-md-2">
                    <div class="row row-cols-1 mt-1 gy-2 h-100">
                        <div class="col mt-md-0">
                            <div class="d-flex">
                                <div class="pe-2 my-auto">
                                    <button :class="`btn-outline-${params.courseTypeName}`" class="btn  w-100 fw-semibold py-2">คอร์สเรียน 1</button>
                                </div>
                                <div class="flex-fill d-block d-md-none">
                                    <button :class="`btn-course-${params.courseTypeName}`" class="btn btn-course w-100 fw-semibold py-2 ">สมัครเรียนเลย</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row row-cols-1 gy-2  gy-xl-2">
                                <div class="col">
                                    <span class="fw-bold fs-18px fs-xl-24px">ปูพื้นฐานการวิเคราะห์ข้อมูล สำหรับผู้เริ่มต้น</span>
                                </div>
                                <div class="col fs-xl-18px mt-xl-4">
                                    <span> เริ่มต้นตั้งแต่ทฤษฎีพื้นฐานจนสามารถต่อยอดสู่การวิเคราะห์ข้อมูลขนาดใหญ่ </span>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-xl-2 gy-2 mt-xl-2 gy-xl-2 fs-xl-18px">
                                <div class="col">
                                    <span class="fw-semibold"> อายุ : </span>
                                    <span>8-14 ปี</span>
                                </div>
                                <div class="col">
                                    <span class="fw-semibold"> ระยะเวลา : </span>
                                    <span>8 ชั่วโมง</span>
                                </div>
                                <div class="col text-nowrap">
                                    <span class="fw-semibold"> วันที่ : </span>
                                    <span >10/11/17/18 มิ.ย. 2566</span>
                                </div>
                                <div class="col">
                                    <span class="fw-semibold"> เวลา : </span>
                                    <span>14.00 - 16.00 น.</span>
                                </div>
                            </div>
                            <div class="row row-cols-1 mt-xl-2 gy-xl-2">
                                <div class="col">
                                    <span class="fw-bold fs-20px"> ราคา : 2,990 บาท </span>
                                </div>
                                <div class="col">
                                    <button :class="`btn-course-${params.courseTypeName}`" class="btn btn-course w-100 fw-semibold py-3 d-none d-md-block">สมัครเรียนเลย</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End รายละเอียดแผนการเรียน -->
    </Transition>
</template>
