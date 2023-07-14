<script setup>
import { ref, defineAsyncComponent } from "vue"
import { onBeforeRouteUpdate } from "vue-router";
const Pagination = defineAsyncComponent(() =>
    import("@/components/Course/CoursePagination.vue")
)
const Contents = defineAsyncComponent(() =>
    import("@/components/Course/CourseMain.vue")
)
const AccorExpect = defineAsyncComponent(() =>
    import("@/components/Course/CourseAccorExpect.vue")
)
const AccorSeniorWorks = defineAsyncComponent(() =>
    import("@/components/Course/CourseAccorSeniorWorks.vue")
)
const AccorWorkshop = defineAsyncComponent(() =>
    import("@/components/Course/CourseAccorWorkshop.vue")
)
const AccorFeedback = defineAsyncComponent(() =>
    import("@/components/Course/CourseAccorFeedback.vue")
)
const ButtonRegister = defineAsyncComponent(() =>
    import("@/components/Course/CourseRegister.vue")
)

const changeRoute = ref(true)

onBeforeRouteUpdate((to, form) => {
    // How to mounted components again 
    changeRoute.value = false
    setTimeout(() => {
        changeRoute.value = true
    }, 1);
})

</script>
<template>
    <div class="col-md-11 col-lg-12 col-xl-9  mx-auto">
        <Pagination />
        <Contents />
        <!-- How to mounted components again -->
        <AccorExpect v-if="changeRoute" />
        <AccorSeniorWorks v-if="changeRoute" />
        <AccorWorkshop v-if="changeRoute" />
        <AccorFeedback v-if="changeRoute" />
        <ButtonRegister />
    </div>
</template>