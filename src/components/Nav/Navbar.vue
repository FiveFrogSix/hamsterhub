<script setup>

import { ref, onMounted } from "vue"
import { useConfigStore }from "@/stores/config"
import Logo from "@/assets/svg/logo.svg"
import Mouse from "@/assets/svg/mouse.svg"
import NavItem from "@/components/Nav/Navitem.vue"

const configStore = useConfigStore()
const addNavClass = ref({
    "position-fixed": false,
    "w-100": false,
    "top-0": false
})
const addNavBlockClass = ref({
    "d-none": true
})
onMounted( () => {
    window.addEventListener('scroll', function(e) {
        // this.scrollPos = window.scrollY; // this in here is undefined 
        if( window.scrollY >= 80 ){
            addNavClass.value["position-fixed"] = true
            addNavClass.value["w-100"] = true
            addNavClass.value["top-0"] = true
            addNavBlockClass.value["d-none"] = false
        }else{
            addNavClass.value["position-fixed"] = false
            addNavClass.value["w-100"] = false
            addNavClass.value["top-0"] = false
            addNavBlockClass.value["d-none"] = true
        }
    });
} )

</script>
<template>
    <div  style="height:66px;" :class="addNavBlockClass"></div>
    <nav class="navbar-custom bg-grey-2 py-1 px-2 px-md-5 d-flex align-items-end " :class="addNavClass" style="z-index: 2000;"> 
        <div class="text-center">
            <a href="/" class="">
                <img :src="Logo" alt="โลโก้" class="logo" style="width: 66px;">
            </a>
        </div>
        <div id="contentParent" class="flex-fill position-relative" style="padding-bottom: 12px;">
            <div class="d-flex justify-content-center justify-content-md-start text-light fw-500 mx-0">
                <NavItem :anime="true" />
            </div>
            <div class="d-flex justify-content-center justify-content-md-start text-light fw-500 mx-0">
                <NavItem />
                <!-- This comment หนูโดดเก่า -->
                <!-- <div class="nav-effect text-center">
                    <div class="icon-cover">
                        <img :src="Mouse" alt="Over Icon" class="mouse-symbol">
                    </div>
                </div> -->
            </div>
        </div>
    </nav>
</template>