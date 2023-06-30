<script setup>
    import  { ref, defineAsyncComponent } from "vue"
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
</script>
<template>
    <div class="col-md-11 col-lg-12 col-xl-9  mx-auto">
        <Pagination />
        <Contents />
        <AccorExpect />
        <AccorSeniorWorks />
        <AccorWorkshop />
        <AccorFeedback />
        <ButtonRegister />
    </div>
</template>