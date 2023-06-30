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
        const paramsName = params.value.courseTypeName ? params.value.courseTypeName  : "/"
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

const transformImg = (idRef) => {
    const hamsterImg = document.querySelector("#HamsterImg")

    // const contentParent = document.querySelector("#contentParent")
    const menuCustom0 =  document.querySelector("#menuCustom0")
    const menuCustom0Position = menuCustom0.getBoundingClientRect()
    const menuCustom1 =  document.querySelector("#menuCustom1")
    const menuCustom1Position = menuCustom1.getBoundingClientRect()
    const menuCustom2 =  document.querySelector("#menuCustom2")
    const menuCustom2Position = menuCustom2.getBoundingClientRect()
    const menuCustom3 =  document.querySelector("#menuCustom3")
    const menuCustom3Position = menuCustom3.getBoundingClientRect()
    const menuCustom4 =  document.querySelector("#menuCustom4")
    const menuCustom4Position = menuCustom4.getBoundingClientRect()
    // const menuCustom0Center = menuCustom0Position.left

    const obj = {
        menuCustom0: menuCustom0Position.left,
        menuCustom1: menuCustom1Position.left,
        menuCustom2: menuCustom2Position.left,
        menuCustom3: menuCustom2Position.left,
        menuCustom4: menuCustom3Position.left,
    }
    const objWidth = {
        menuCustom0: menuCustom0Position.width,
        menuCustom1: menuCustom1Position.width,
        menuCustom2: menuCustom2Position.width,
        menuCustom3: menuCustom2Position.width,
        menuCustom4: menuCustom3Position.width,
    }
    console.log(obj);
    console.log(objWidth);
    // hamsterImg.style.marginLeft = `${obj[idRef]}px`
    hamsterImg.style.marginLeft = `0px`
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
