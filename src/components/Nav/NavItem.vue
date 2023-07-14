<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue"

import { useConfigStore }from "@/stores/config"

const props = defineProps(['anime'])
const route = useRoute()
const router = useRouter()
const params = ref(route.params)
const configStore = useConfigStore()


onMounted( async () => {
    await activeDefault()
})

const activeDefault = async () => {
    let paramsName = "/"
    if ( route.name == "Extra" ) paramsName = "extra"
    else if ( params.value.courseTypeName ) paramsName = params.value.courseTypeName
    const ary = configStore.getNavItems.filter((item) =>  item.url.includes(paramsName))
    ary[0].acitve = true
    configStore.updateActiveNavItem(ary[0])
    changeBg( ary[0].className.toLowerCase() )
}

const classMore = (item) => {
    const addClass = {
        "active" : item.active,
        [`text-${item.className.toLowerCase()}`]: true,
    }
    return addClass
}

const classMoreSub = (item, anime = false) => {
    const addClass = {
        "active" : item.active,
        [`text-${item.className.toLowerCase()}`]: true,
        "invisible ": anime
    }
    return addClass
}

const classHamster = (item) => {
    const addClass = {
        "active" : item.active,
    }
    return addClass
}

const actionNavItem = (e, navItem) => {
    configStore.updateActiveNavItem(navItem)
    changeBg( navItem.className.toLowerCase() )
    router.push(navItem.url)
}

const changeBg = (bgName) => {
    document.body.classList.remove("bg-roblox", "bg-apps", "bg-python", "bg-extra", "bg-hub");
    document.body.classList.add(`bg-${bgName}`);
}

</script>
<template>
    <div v-for="(item, index) in configStore.getNavItems" :id="!props.anime ? `menuCustom${index}` : `` " class="nav-link-custom position-relative px-0 text-center flex-fill flex-md-grow-0 mx-md-3 fs-lg-20px" :class="classMore(item)" >
        <div class="hamster-menu">
            <img v-if="props.anime" src="@/assets/imgs/hamster1.gif" id="HamsterImg" class="hamster-img" :class="classHamster(item)" >
        </div>
        <a href="#" :class="classMoreSub(item, props.anime )" @click="actionNavItem($event, item)" > 
            {{item.name}}
        </a>
    </div>
</template>
