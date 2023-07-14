<script setup>
    import { ref } from "vue";
    import { useConfigStore} from "@/stores/config"
    import NoteIcon from "@/components/Icon/NoteIcon.vue"
    import ExtraAccorExpect from "@/components/Extra/ExtraAccorExpect.vue"
    import { Modal } from "bootstrap"

    /** 
     * tip: สามารถใช้ props หรือ store pinia จัดการข้อมูลแทนได้ตามแต่ถนัด 
     * แต่แนะนำให้ลองใช้ store เพราะเหมือนว่า api จะลิ้งไปทุกส่วนได้มากกว่า
    */ 
    const configStore = useConfigStore()
    const color = configStore.getPageColor.extra
    const props = defineProps(["examdata"])

    const openRegister = () => {
        const registerModal =  new Modal('#registerCourse')
        registerModal.show()
    }
</script>
<template>
    <div class="col-12 col-md-12 mx-auto bg-grey-3 p-4">
        <div class="col-12 col-md-8 col-lg-6 mx-auto">
            <div class="row row-cols-1  gy-3">
                <div class="col-12 text-center">
                    <h4 class="fw-bold">{{  props.examdata.title }}</h4>
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col-auto">
                            <img src="@/assets/imgs/ProfileTeacher.png" alt="รูปโปร์ไฟล์ผู้สอน" height="50">
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-semibold text-brown">ผู้สอน</p>
                            <p class="text-brown">ครูเอก Hamster Hub</p>
                        </div>
                    </div>
                </div>
                <div class="col  mb-4">
                    <div class="clearfix">
                        <p class="mb-0 fs-18px fw-bold float-start">
                            <NoteIcon :color="color" />
                            รายละเอียดคอร์สเรียน
                        </p>
                        <a href="javascript:void(0);" @click="openRegister()"
                            class="link-blue6 text-decoration-none float-end ">
                            Join <i class="bi bi-chevron-right align-middle fs-12px"></i>
                        </a>
                    </div>
                    <p class="mt-2 text-brown mb-0">
                        เริ่มต้นตั้งแต่ทฤษฎีพื้นฐานปูพื้นฐานตั้งแต่เรื่องของ จำแนกชนิดของข้อมูลต่างๆ ตัวแปรการสร้าง
                        เงื่อนไขที่จะทำให้คอมพิวเตอร์ตัดสินใจได้อย่างเป็นระบบจนสามารถต่อยอดสู่การวิเคราะห์ข้อมูลขนาดใหญ่ด้วย
                        Data Science ซึ่งเป็นศาสตร์ทำเงินที่ สำคัญมาก
                    </p>
                </div>
                <div class="col-12 col-md-4 col-lg-6 mt-2 mx-auto">
                    <div class="frame-vid">
                        <div class="ratio ratio-1x1">
                            <iframe src="https://www.youtube.com/embed/RQ9zye0F1kQ" class="frame-vid-inside"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <ExtraAccorExpect :examdata="props.examdata" />
        </div>
    </div>
</template>