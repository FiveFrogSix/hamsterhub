<script setup>
    import { ref } from "vue"
    import { useCourseStore } from "@/stores/course"
    const courseStore = useCourseStore()
</script>

<template>
    <template v-for="(chat, index) in courseStore.courseDetails.courseFeedback" :key="chat">
        <div v-if="chat.status" class="d-flex" :class="`justify-content-${chat.type}`">
            <div class="d-flex w-100 mb-3" :class="chat.type === `end` ? `flex-row-reverse` : ``">
                <div class="d-md-flex align-items-md-center">
                    <div class="avatar">
                        <img :src="chat.profileUrl" alt="">
                    </div>
                </div>
                <div class="col-8 col-sm-9 col-md-9 col-lg-6 mx-2" :class="`text-${chat.type}`">
                    <p class="mb-0 d-block d-md-none">{{chat.author}}</p>
                    <div 
                        :style="{background: chat.bgColor}" 
                        class="py-2 px-4 py-md-3 px-md-5 rounded-chat text-start mt-2 mt-md-0"
                    >
                        <p class="mb-0 d-none d-md-block fw-bold ">{{chat.author}}</p>
                        <span>
                            {{chat.text}}                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>