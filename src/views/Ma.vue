<template>
    <section class="xl:px-10 pb-14">
        <div class="flex xl:flex-row-reverse flex-col items-center xl:items-start justify-between gap-5">

            <div
                class=" xl:sticky w-full py-8 flex items-center xl:h-[100vh] flex-col justify-center mt-[-145px] top-0 pt-[75px]">
                <h1 class="text-black sticky xl:text-7xl font-Chopper text-3xl text-center">
                    Programme Ma <br /> Scene Nationale
                </h1>
                <p class="text-black sticky font-Chopper xl:text-2xl w-1/2 text-center">
                    Travail sur la création d'un concept inconographique pour la scene Nationale de Montbéliard. J'ai
                    réaliser une dossier de programmation et la photo que l'on retrouve sur la couverture. Tout cela en
                    collaboration avec Allan Hienne et en utilisant Lightroom et Indesign
                </p>

                <RouterLink to="/projet">
                    <div class="text-left border border-black w-fit px-3 py-3 mt-6  motion-reduce:transition-transform motion-safe:duration-500 "
                        aria-controls="ban" :aria-expanded="hoverban" @mouseenter="hoverban = !hoverban"
                        @mouseleave="hoverban = !hoverban" :class="['', hoverban ? ' bg-transparent, bg-black ' : '']">
                        <p class="font-Chopper text-black text-xl motion-reduce:transition-transform motion-safe:duration-500 "
                            :class="['', hoverban ? ' text-black, text-white ' : '']">
                            Retour
                        </p>
                    </div>
                </RouterLink>


            </div>
            <div class="w-2/3 flex flex-col gap-5 max-h-full">
                <div>
                    <img src="../../Photos/Mockup-Ma.jpg" alt="">
                </div>
                <div>
                    <img src="../../Photos/Mockup-Ma2.jpg" alt="">
                </div>
            </div>


        </div>
    </section>
</template>
<script setup>

import { ref } from 'vue';
let hoverban = ref()

</script>
<script >
export default {
    mounted() {
        window.scrollTo(0, 0)
    }
}


</script>
<style></style>