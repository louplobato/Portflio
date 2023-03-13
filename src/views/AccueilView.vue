<script setup>
import Hero_Accueil from "@/components/hero.vue"
import Photo from "@/components/BanPhoto.vue"
import Design from "@/components/BanDesign.vue"
</script>

<template>
    <div class="gap-48 flex flex-col">
        <Hero_Accueil class="mb-9 fade" />


        <div class="">
            <Photo />
            <Design />
        </div>
    </div>
</template>

<style></style>