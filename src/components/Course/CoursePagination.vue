<script setup>
import { ref, onMounted, onUpdated } from "vue"
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router"
import { useConfigStore } from "@/stores/config"
import { useCourseStore } from "@/stores/course"

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()
const configStore = useConfigStore()
const params = ref(route.params)
const current = ref(1)
const maxLen = ref(3)

onBeforeRouteUpdate(async (to, from) => {
    params.value = to.params
    await setCurrentLevel()
})

onMounted(async () => {
    await setMaxLevel()
    await setCurrentLevel()
})

//  เซ็ท level หรือหน้าที่ ปัจจบุัน
const setCurrentLevel = async () => {
    current.value = 1
    if (params.value.courseLevel) current.value = params.value.courseLevel
    courseStore.updateCurrentLevel(current.value - 1)
}
// เซ็ท max level
const setMaxLevel = async () => {
    const len = courseStore.getCourseDetails.courseLevel.length
    maxLen.value = parseInt(len)
    courseStore.updateMaxLevel(maxLen.value)
}

const redirectPage = (action) => {
    // เงื่อนไขเช็คว่าจะทำอะไร กดถัดไปหรือย้อนกลับ
    configStore.transitionFlip()
    let lv = params.value.courseLevel ? parseInt(params.value.courseLevel) : 1
    if (action === "prev") {
        lv = lv - 1
    } else if (action === "next") {
        lv = lv + 1
    }
    // เงื่อนไขเช็คว่าจะทำค่าให้ push route ไปที่ไหน
    let paramsLv = `/${lv}`
    if (lv == 1) {
        paramsLv = ``
        current.value = 1
    }
    // เปลี่ยนหน้า
    router.push(`/${params.value.courseTypeName}${paramsLv}`)
}

</script>
<template>
        <div  class="container-fluid text-center mt-2 mt-md-3">
            <div class="row row-cols-3 mx-0">
                <!-- Left -->
                <div class="col flex-fill me-auto me-md-1 ps-0" style="width: 32%;" v-if="params.courseLevel"
                    :class="{ 
                        'pe-1 pe-md-1': params.courseLevel < maxLen, 
                        'pe-0': params.courseLevel == maxLen 
                    }"
                    >
                    <button :class="`btn-page-${params.courseTypeName}`" class="btn btn-start-level  w-100"
                        @click="redirectPage(`prev`)">
                        <i class="icon-left-arrow align-middle"></i>
                        <span class="ms-2"> Level {{ parseInt(current) - 1 }} </span>
                    </button>
                </div>
                <!-- Center -->
                <div class="col p-0 position-relative btn-level-container" 
                    :class="{ 
                        'mx-auto': params.courseLevel < maxLen, 
                        'ms-auto': params.courseLevel == maxLen }"
                    :style="[   
                                params.courseLevel && params.courseLevel != maxLen ? { 'width': '34.5%' } : { 'width': '66.5%' },
                                params.courseLevel != undefined ? params.courseLevel == maxLen ? { 'transform': 'translate(2px, 1px)' } : { 'transform': 'translate(0px, 1px)' } : { 'transform': 'translate(-2px, 1px)' } ,
                            ]">
                    <button :class="`btn-${params.courseTypeName}`" class="btn btn-primary-level btn-roblox w-100">
                        Level {{ current }}  
                    </button>
                </div>
                <!-- Right -->
                <div class="col flex-fill ms-auto ms-md-1 pe-0" style="width: 32%;" v-if="params.courseLevel != maxLen"
                    :class="{ 
                        'ps-1 ps-md-1': params.courseLevel < maxLen, 
                        'ps-0': !params.courseLevel
                    }"
                    >
                    <button :class="`btn-page-${params.courseTypeName}`" class="btn btn-end-level w-100"
                        @click="redirectPage(`next`)">
                        <span class="me-2"> Level {{ parseInt(current) + 1 }} </span>
                        <i :class="`icon-right-arrow${ ['apps', 'extra'].includes(params.courseTypeName) ? '-dark' : ''} align-middle`"></i>
                    </button>
                </div>
            </div>
        </div>
</template>