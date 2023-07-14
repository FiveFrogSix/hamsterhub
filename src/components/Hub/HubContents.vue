<script setup>
import { ref } from "vue";
import { useTestStore } from "@/stores/test"
import HubCard from "@/components/Hub/HubCard.vue"


const testStore = useTestStore()

const projectList = ref(testStore.getProjectList)
const courseList = ref(testStore.getCourseList)

// || projectList.value.length%2 == 1 && projectList.value.length != 0
</script>
<template>
    <!-- Our Project -->
    <div class="row g-0 gy-3 g-md-3 mx-0">
        <div class="text-center">
            <div class="col text-center mb-3 py-3  bg-black text-white">
                <h1 class="fw-bold">Our Project</h1>
            </div>
        </div>
    </div>
    <div class="row g-0 gy-3 g-md-3 mx-0">
        <template v-for="(item, index) in projectList" :key="item"> 
            <HubCard :data="item" :index="index" :dataLen="projectList.length"  />
        </template>
    </div>
    <!-- Our Course -->
    <div class="row g-0 gy-3 g-md-3 mx-0">
        <div class="text-center">
            <div class="col text-center my-3 py-3 bg-light-hub">
                <h1 class="fw-bold">Our Course</h1>
            </div>
        </div>
    </div>
    <div class="row g-0 gy-3 g-md-3 mx-0">
        <template v-for="(item, index) in courseList" :key="item">
            <HubCard :data="item" :index="index"  :dataLen="courseList.length" />
        </template>
    </div>
</template>