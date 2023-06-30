<script setup>
    import { ref, onMounted } from 'vue';
    import { onBeforeRouteUpdate, useRoute } from "vue-router"
    import { useConfigStore } from '@/stores/config';
    const route = useRoute()
    const params = ref(route.params)
    const configStore = useConfigStore()

    onBeforeRouteUpdate( async (to, from) => {
        params.value = to.params
    })
</script>
<template>
     <Transition name="flip">
         <div v-show="configStore.getFlip" class="container-fluid my-3">
             <div class="container-custom-md bg-md-detail py-md-4">
                 <div class="row row-cols-1 row-cols-md-2 mx-0">
                     <div class="col-12 col-md text-center text-md-end d-none d-md-block my-auto">
                         <img src="@/assets/imgs/Banner.png" alt="Banner" class="img-fluid w-md-100 w-lg-75 " >
                     </div>
                     <div class="col-12 col-md text-start px-0 p-md-4">
                         <div class="d-none d-md-block">
                             <button :class="`btn-outline-${params.courseTypeName}`" class="btn fw-semibold py-1 px-4 fs-18px mb-3">
                                 คอร์สเรียน 1
                             </button>
                             <p class="fs-16px  fw-semibold">
                                 ปูพื้นฐานการวิเคราะห์ข้อมูล สำหรับผู้เริ่มต้น
                             </p>
                             <p class="fs-16px  fw-bold">
                                 ราคา : 2,990 บาท
                             </p>
                         </div>
                         <button :class="`btn-course-${params.courseTypeName}`" class="btn btn-course col-12 col-md-9 fw-bold py-2 fs-16px  ">สมัครเรียนเลย</button>
                     </div>
                 </div>
             </div>
         </div>
    </Transition>
</template>