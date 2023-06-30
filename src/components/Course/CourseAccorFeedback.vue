<script setup>
import { ref, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from "vue-router"
import { useConfigStore } from "@/stores/config.js"
import ChatFeedback from "@/components/Feedback/FeedbackChat.vue"
import BallonChatIcon from "@/components/Icon/BallonChatIcon.vue"

const configStore = useConfigStore()

const route = useRoute()
const params = ref(route.params)
const color = ref(null)

const addClass = ref({
    "accordion-item-active": false
})

onBeforeRouteUpdate(async (to, from) => {
    params.value = to.params
    color.value = configStore.getPageColor[params.value.courseTypeName]
})

onMounted(async () => {
    color.value = configStore.getPageColor[params.value.courseTypeName]
})

const actionAboutAccordion = (e) => {
    addClass.value["accordion-item-active"] = !addClass.value["accordion-item-active"]
}

</script>
<template>
    <Transition name="flip">
        <div  v-show="configStore.getFlip" class="container-fluid">
            <div class="col-12 my-3">
                <div class="accordion" id="accordFeddback">
                    <div class="accordion-item accordion-item-custom" :class="addClass">
                        <h2 class="accordion-header" id="headingFeddback0">
                            <button @click="actionAboutAccordion($event)" class="accordion-button collapsed fs-18px fw-bold px-md-5 py-md-4"
                                :class="`accordion-${params.courseTypeName}`" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFeddback0" aria-expanded="false" aria-controls="collapseFeddback0">
                                <BallonChatIcon :color="color" />
                                <span class="ms-2">
                                    Feedback จากน้องๆ
                                </span>
                            </button>
                        </h2>
                        <div id="collapseFeddback0" class="accordion-collapse collapse" aria-labelledby="headingFeddback0"
                            data-bs-parent="#accordFeddback">
                            <div class="accordion-body p-0 px-md-5 pb-md-4 ">
                                <hr :class="`mb-3 hr-${params.courseTypeName}`">
                                <div class="px-3 px-md-0">
                                    <ChatFeedback />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>


