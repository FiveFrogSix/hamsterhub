<script setup>
    import  { ref, defineAsyncComponent } from "vue"

    const HubLanding = defineAsyncComponent(() =>
        import("@/components/Hub/HubLanding.vue")
    )
</script>
<template>
    <div class="col-md-11 col-lg-9 col-xl-9  mx-auto">
        <HubLanding />
    </div>
</template>