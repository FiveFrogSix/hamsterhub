<script setup>
    import HubHeader from "@/components/Hub/HubHeader.vue"

    import HubFirst from "@/components/Hub/HubFirst.vue"
    import HubEvent from "@/components/Hub/HubEvent.vue"
    import HubTeacher from "@/components/Hub/HubTeacher.vue"
    import HubContents from "@/components/Hub/HubContents.vue"

</script>
<template>
    <div class="container-fluid py-2 bg-white">
        <HubHeader />
    </div>
    <div class="container-fluid bg-black text-white">
        <div class="col-md-11 col-lg-9 col-xl-9  mx-auto">
            <HubFirst />
        </div>
    </div>
    <div class="container-fluid px-0 mt-3 ">
        <div class="row row-cols-1 g-0 gy-3 g-md-3 mx-0">
            <div class="col">
                <HubEvent  />
            </div>
            <div class="col">
                <HubTeacher  />
            </div>
        </div>
    </div>
    <div class="container-fluid px-0 mt-3">
        <HubContents  />
    </div>
    <div class="container-fluid py-2"></div>
</template>