<script setup>
import Hero_Accueil from "@/components/hero.vue"
import Photo from "@/components/BanPhoto.vue"
import Design from "@/components/BanDesign.vue"
import MTLM from "@/components/BanMTLM.vue"
</script>
<script>
export default {

    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<template>
    <section class="h-[100vh]">
        <Hero_Accueil class="mb-9 mt-[100px] relative" />
        <div class="test inset-0 bg-black absolute flex justify-center items-center top-[-144px]">
            <p class="font-Chopper text-white text-[4vw]">
                ~ Bienvenue dans ma tête ~
            </p>
        </div>
    </section>



    <section class="xl:h-[100vh] flex justify-center items-center">
        <RouterLink to="/photo" class="w-full">
            <Photo class="" />
        </RouterLink>
    </section>

    <section class="xl:h-[100vh] flex justify-center items-center">
        <Design />
    </section>

    <section class="xl:h-100vh flex justify-center items-center xl:my-16">
        <MTLM class="scale-50" />

    </section>
</template>

<style>
.test {
    z-index: 99;
    animation: fadeout 2s ease-in-out 2s forwards;

}


@keyframes fadeout {
    0% {
        opacity: 1;
        height: 100vh;

    }

    50% {
        opacity: 0;
        margin-bottom: 0%;
        width: 100%;
        height: 100vh;
    }

    100% {
        opacity: 0;
        margin-bottom: 100%;
        width: 0%;
        height: fit-content;
    }
}
</style>
