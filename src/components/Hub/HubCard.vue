<script setup>
    import { ref } from 'vue';
    import { Modal } from "bootstrap"
    const props = defineProps(["data", "index", "dataLen"])
    const detail = ref(props.data)

    const openRegister = () => {
        const registerModal =  new Modal('#registerCourse')
        registerModal.show()
    }

    const addClass = {
        "col-12 col-md-6": props.dataLen == 0 || props.dataLen%2 == 0 || props.dataLen%2 == 1 && (props.dataLen-1) != props.index,
        "col-12": (props.dataLen-1) == props.index,
    }
    
</script>
<template>
    <div class="text-center " :class="addClass"  >
        <div class="py-5 h-100 " :class="detail.addClass" >
            <h4 class="fw-bold">{{detail.title}} </h4>
            <h5 class="fw-bold"></h5>
            <p> พื้นฐานการสร้างผลงาน Mobile App และ 3D Game</p>
            <div class="d-flex justify-content-center mx-auto mb-3 ">
                <a v-if="detail.urlLearn" :href="detail.urlLearn" class="link-blue6 text-decoration-none fs-18px fw-bold ">
                    <span>Learn more </span>
                    <i class="bi bi-chevron-right align-middle"></i>
                </a>
                <a v-if="detail.btnJoin" href="javascript:void(0);" @click="openRegister()"  class="link-blue6 text-decoration-none fs-18px fw-bold ms-5 ">
                    <span>Join </span>
                    <i class="bi bi-chevron-right align-middle"></i>
                </a>
            </div>
            <div class="mx-auto px-3">
                <!-- ขนาดต้อง fix มาทางหลังบ้านว่าอยากได้ขนาดไหน แล้วค่อยทำ responsive -->
                <img :src="detail.imgCover" class="img-fluid" style="width:400px;">
            </div>
            
        </div>
    </div>
</template>