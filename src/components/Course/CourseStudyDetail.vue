<script setup>
    import { ref, onMounted, onUpdated } from "vue"
    import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router"
    import { useConfigStore} from "@/stores/config"
    import NoteIcon from "@/components/Icon/NoteIcon.vue"

    const route = useRoute()
    const router = useRouter()
    const configStore = useConfigStore()
    const params = ref(route.params)
    const color = ref(null)

    onBeforeRouteUpdate( async (to, from) => {
        params.value = to.params
        color.value = configStore.getPageColor[params.value.courseTypeName]
    })

    onMounted( async () => {
        color.value = configStore.getPageColor[params.value.courseTypeName]
    })

</script>
<template>
    <!-- Start รายละเอียดของคอร์สว่าเรียนเกี่ยวกับอะไร -->
    <Transition name="flip">
        <div v-show="configStore.getFlip" class="bg-detail container-custom-last px-3 pt-1 pb-3 px-md-5 py-md-4 mt-md-3 ">
            <hr class="hr-custom d-block d-md-none ">
            <div class="row row-cols-1  gy-3">
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
                <div class="col">
                    <p class="mb-0 fs-18px fw-bold">
                        <NoteIcon :color="color" />
                        รายละเอียดคอร์สเรียน
                    </p>
                    <p class="mt-2 text-brown mb-0">
                        เริ่มต้นตั้งแต่ทฤษฎีพื้นฐานปูพื้นฐานตั้งแต่เรื่องของ จำแนกชนิดของข้อมูลต่างๆ ตัวแปรการสร้าง
                        เงื่อนไขที่จะทำให้คอมพิวเตอร์ตัดสินใจได้อย่างเป็นระบบจนสามารถต่อยอดสู่การวิเคราะห์ข้อมูลขนาดใหญ่ด้วย
                        Data Science ซึ่งเป็นศาสตร์ทำเงินที่ สำคัญมาก
                    </p>
                </div>
                <div class="col mt-2">
                    <div class="frame-vid">
                        <div class="ratio ratio-16x9 ">
                            <iframe  src="https://www.youtube.com/embed/RQ9zye0F1kQ"
                                class="frame-vid-inside" title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
    <!-- End รายละเอียดของคอร์สว่าเรียนเกี่ยวกับอะไร -->
</template>