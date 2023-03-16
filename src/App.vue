<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "@/components/MenuLogo.vue";
import MenuOuvert from "./components/MenuOuvert.vue";
import { ref } from "@vue/reactivity";
let menuOuvert = ref();
menuOuvert.value = false;
//import HelloWorld from "./components/HelloWorld.vue";

</script>

<template>
  <header class="flex fixed justify-between px-10 items-center h-36 w-full z-[80] top-0 bg-blend-difference">
    <!--Logo du header-->
    <RouterLink to="/">
      <p class="mix-blend-saturation text-black md:text-3xl font-Chopper ">

        Loup.raw
      </p>
    </RouterLink>

    <!--Bouton pour afficher menu-->
    <button class="relative p-1 w-fit" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert"
      :class="[menuOuvert ? '' : '']">
      <Menu class="md:w-16 w-10" />

    </button>

    <!--Bouton pour cacher menu-->


    <!--Menu hamburger déroulé-->
    <div class="fixed inset-0 translate-y-full motion-safe:transition-transform motion-safe:duration-1000 z-[90]"
      :class="[' bg-black  text-white', menuOuvert ? 'translate-y-0' : '']">
      <div class="flex justify-between px-10 items-center h-36 w-full">
        <RouterLink to="/accueil">
          <p class="bg-blend-difference text-white text-3xl font-Chopper">
            Loup.raw
          </p>
        </RouterLink>

        <div @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : '']">
          <button aria-controls="menu" :aria-expanded="menuOuvert" class="h-fit w-fit">
            <MenuOuvert class="animate-pulse" />
          </button>
        </div>
      </div>
      <div class="flex mt-4 justify-between items-left flex-col h-4/5 w-fit mx-auto">
        <RouterLink to="/" class="flex gap-[5vw] items-center">
          <img src="../Logo_blanc.svg" alt="logo Loup Lobato" class="w-[4vw]">
          <p class="font-Chopper text-4xl md:text-8xl uppercase mt-4">
            Accueil
          </p>
        </RouterLink>
        <hr>
        <RouterLink to="/" class="flex gap-[5vw] items-center">
          <img src="../Logo_blanc.svg" alt="logo Loup Lobato" class="w-[4vw]">
          <p class="font-Chopper text-4xl md:text-8xl uppercase mt-4">
            Photographie
          </p>
        </RouterLink>
        <hr>
        <RouterLink to="/" class="flex gap-[5vw] items-center">
          <img src="../Logo_blanc.svg" alt="logo Loup Lobato" class="w-[4vw]">
          <p class="font-Chopper text-4xl md:text-8xl uppercase mt-4" st>
            Design
          </p>
        </RouterLink>
        <hr>
        <RouterLink to="/" class="flex gap-[5vw] items-center">
          <img src="../Logo_blanc.svg" alt="logo Loup Lobato" class="w-[4vw]">
          <p class="font-Chopper text-4xl md:text-8xl uppercase mt-4">
            Mtlm
          </p>
        </RouterLink>
        <hr>
        <RouterLink to="/" class="flex gap-[5vw] items-center">
          <img src="../Logo_blanc.svg" alt="logo Loup Lobato" class="w-[4vw]">
          <p class="font-Chopper text-4xl md:text-8xl uppercase mt-4">
            A Propos
          </p>
        </RouterLink>

        <hr>
        <RouterLink to="/" class="flex gap-[5vw] items-center">
          <img src="../Logo_blanc.svg" alt="logo Loup Lobato" class="w-[4vw]">
          <p class="font-Chopper text-4xl md:text-8xl uppercase mt-4">
            Contact
          </p>
        </RouterLink>

      </div>
    </div>
  </header>
  <main>


    <RouterView class="pt-36" />


  </main>
  <footer class="w-full h-96 bg-black">
    <div class="flex flex-col font-Chopper text-xl text-white items-center justify-around h-full p-12">
      <RouterLink to="/">

        <p>
          Contact
        </p>
      </RouterLink>
      <RouterLink to="/">

        <p>
          A Propos
        </p>
      </RouterLink>
      <RouterLink to="/">

        <p>
          Mentions Légales
        </p>
      </RouterLink>
    </div>

  </footer>
</template>

<style scoped></style>
