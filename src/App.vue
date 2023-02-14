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
  <header class="flex fixed justify-between px-10 items-center h-36 w-full z-[80] top-0">
    <!--Logo du header-->
    <RouterLink to="/accueil">
      <p class="mix-blend-saturation text-black text-3xl font-Chopper ">

        Loup.raw
      </p>
    </RouterLink>

    <!--Bouton pour afficher menu-->
    <button class="relative p-1 w-fit" aria-controls="menu" :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : '']">
      <Menu />

    </button>

    <!--Bouton pour cacher menu-->


    <!--Menu hamburger déroulé-->
    <div class="fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000 z-[90]"
      :class="[' bg-black  text-white', menuOuvert ? 'translate-x-0' : '']">
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
      <div class="flex mt-16 justify-between items-center flex-col h-3/5">
        <RouterLink to="/">
          <p class="font-Chopper text-4xl uppercase ">
            Accueil
          </p>
        </RouterLink>
        <RouterLink to="/">
          <p class="font-Chopper text-4xl uppercase">
            Photographie
          </p>
        </RouterLink>
        <RouterLink to="/">
          <p class="font-Chopper text-4xl uppercase">
            Design
          </p>
        </RouterLink>
        <RouterLink to="/">
          <p class="font-Chopper text-4xl uppercase">
            Mtlm
          </p>
        </RouterLink>
        <RouterLink to="/">
          <p class="font-Chopper text-4xl uppercase">
            A Propos
          </p>
        </RouterLink>

        <RouterLink to="/">
          <p class="font-Chopper text-4xl uppercase">
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

<style scoped>

</style>
