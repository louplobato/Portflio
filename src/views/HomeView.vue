<script setup>
import Hero_Accueil from "@/components/hero.vue"
import Photo from "@/components/BanPhoto.vue"
import Design from "@/components/BanDesign.vue"
</script>

<template>
    <div class="test inset-0 bg-black absolute flex justify-center items-center max-h-screen">
        <p class="font-Chopper text-white text-5xl test2">
            ~ Bienvenue dans ma tête ~
        </p>
    </div>
    <div class="gap-48 flex flex-col">
        <Hero_Accueil class="mb-9 mt-16" />


        <div class="">
            <Photo />
            <Design />
        </div>
    </div>
</template>

<style>
.test {
    z-index: 99;
    animation: fadeout 2s ease-in-out 2s forwards;

}

.test2 {
    z-index: 99;
    animation: textfade 2s ease-in-out 1s forwards;

}


@keyframes fadeout {


    0% {

        margin-bottom: 0%;
    }

    100% {

        margin-bottom: 115%;
    }
}

@keyframes textfade {
    0% {
        opacity: 1;

    }

    100% {
        opacity: 0;
    }
}
</style>