<script setup>
    import { RouterView } from 'vue-router'
    import  { defineAsyncComponent } from "vue"
    const Navbar = defineAsyncComponent(() =>
        import("@/components/Nav/Navbar.vue")
    )
    const Footbar = defineAsyncComponent(() =>
        import("@/components/Footer.vue")
    )
</script>
<template>
    <Navbar />
    <RouterView />
    <Footbar />
</template>
