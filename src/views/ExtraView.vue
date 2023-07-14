<script setup>
import { ref, defineAsyncComponent } from "vue"
import { onBeforeRouteUpdate } from "vue-router";
import { useTestStore } from "@/stores/test"


import ExtraCourse from "@/components/Extra/ExtraCourse.vue"
import ExtraProject from "@/components/Extra/ExtraProject.vue"

const changeRoute = ref(true)
const testStore = useTestStore()

onBeforeRouteUpdate((to, form) => {
    // How to mounted components again 
    changeRoute.value = false
    setTimeout(() => {
        changeRoute.value = true
    }, 1);
})

const projectList = ref(testStore.getProjectList)
const courseList = ref(testStore.getCourseList)

</script>
<template>
    <div class="col-12 col-md-12 mx-auto  mb-3" >
        <div class="col-12 text-center bg-grey-3  py-4 my-3 ">
            <h1 class="fw-bold ">Special Courses</h1>
        </div>
        <div class="row row-cols-1 gx-0 gy-3 gx-md-0 mx-0">
            <div v-for="(item, index) in courseList" class="col mx-auto">
                <ExtraCourse :examdata="item" />
            </div>
        </div>
        <div class="col-12 text-center bg-black text-white py-4 my-3">
            <h1 class="fw-bold">Our Project</h1>
        </div>
        <div class="row row-cols-1 gx-0 gy-3 gx-md-0 mx-0">
            <div v-for="(item, index) in projectList" class="col">
                <ExtraProject :examdata="item" />
            </div>
        </div>
    </div>
</template>