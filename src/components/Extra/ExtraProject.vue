<script setup>
    import NoteIcon from "@/components/Icon/NoteIcon.vue"
    import PlayIcon from "@/components/Icon/Play.vue"
    import { useConfigStore} from "@/stores/config"
    const configStore = useConfigStore()
    const props = defineProps(["examdata"])
    const color = configStore.getPageColor.extra
</script>
<template>
    <div class="col-12 col-md-12 mx-auto bg-black text-white p-4">
        <div class="col-12 col-md-8 col-lg-6 mx-auto">
            <div class="row row-cols-1  gy-3">
                <div class="col-12 text-center">
                    <h4 class="fw-bold">{{ props.examdata.title }} </h4>
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col-auto">
                            <img src="@/assets/imgs/ProfileTeacher.png" alt="รูปโปร์ไฟล์ผู้สอน" height="50">
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-semibold text-white">ผู้สอน</p>
                            <p class="text-white">ครูเอก Hamster Hub</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="clearfix">
                        <p class="mb-0 fs-18px fw-bold float-start">
                            <NoteIcon :color="color" />
                            รายละเอียดคอร์สเรียน
                        </p>
                    </div>
                    <p class="mt-2 text-white mb-0">
                        เริ่มต้นตั้งแต่ทฤษฎีพื้นฐานปูพื้นฐานตั้งแต่เรื่องของ จำแนกชนิดของข้อมูลต่างๆ ตัวแปรการสร้าง
                        เงื่อนไขที่จะทำให้คอมพิวเตอร์ตัดสินใจได้อย่างเป็นระบบจนสามารถต่อยอดสู่การวิเคราะห์ข้อมูลขนาดใหญ่ด้วย
                        Data Science ซึ่งเป็นศาสตร์ทำเงินที่ สำคัญมาก
                    </p>
                </div>
                <div class="col-12 col-md-8 col-lg-6 mx-auto">
                    <div class="frame-vid">
                        <div class="ratio ratio-1x1">
                            <iframe src="https://www.youtube.com/embed/TARFMvnjunE" class="frame-vid-inside"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center fs-24px">
                    <span class="align-middle">
                        <PlayIcon size="38" :color="`#306EDB`" />
                    </span>  
                    Play at <a class="link-blue6 text-decoration-none" href="http://roblox.com/tylersmith">http://roblox.com/tylersmith</a>
                </div>
            </div>
        </div>
    </div>
</template>