<script setup>
import { ref, onMounted, onUpdated } from "vue"
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router"
import { useCourseStore } from "@/stores/course"

import DetailPlan from "@/components/Course/CoursePlanDetail.vue"
import DetailStudy from "@/components/Course/CourseStudyDetail.vue"

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()
const params = ref(route.params)

onBeforeRouteUpdate(async (to, from) => {
    params.value = to.params
})

const planDays = ref([
    { "day": 1, detail: "ชนิดของข้อมูล และตัวแปร Data Type & Variable" },
    { "day": 2, detail: "ชนิดของข้อมูล และตัวแปร Data Type & Variable" },
    { "day": 3, detail: "ชนิดของข้อมูล และตัวแปร Data Type & Variable" },
])

</script>
<template>
    <div id="CourseMain" class="container-fluid">
        <DetailPlan />
        <DetailStudy />
    </div>
</template>