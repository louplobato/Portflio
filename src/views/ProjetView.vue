<script setup >
import { ref } from "@vue/reactivity";
let hoverban = ref();

</script>
<script >
export default {
    mounted() {
        window.scrollTo(0, 0)
    }
}


</script>






<template >
    <!--<div class="flex w-full justify-center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>-->
    <section data-section-name="sec1" class="w-full">
        <RouterLink to="/yam">
            <div class="flex w-4/5 justify-around items-center md:h-[100vh]  mx-auto">
                <div class="flex items-center w-full justify-center" aria-controls="ban" :aria-expanded="hoverban"
                    @mouseenter="hoverban = !hoverban" @mouseleave="hoverban = !hoverban">

                    <div class="flex items-center">
                        <p class="ml-4 md:ml-[-10vh] absolute xl:text-[5vw] text-6xl font-Chopper text-white md:mix-blend-difference z-20 text-left shadowtext motion-reduce:transition-transform motion-safe:duration-500 w-[420px]"
                            :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">

                            Refonte Graphique Arte <br>
                            Arte
                        </p>
                        <img src="../../Photos/mine-6613.jpg" alt="Photo you are mine"
                            class="max-w-3xl scale-95 motion-reduce:transition-transform relative motion-safe:duration-500 w-full"
                            :class="['', hoverban ? ' scale-95, scale-105 ' : '']">
                    </div>

                    <svg width="419" height="405" viewBox="0 0 419 405" fill="none" xmlns="http://www.w3.org/2000/svg "
                        class="motion-reduce:transition-transform motion-safe:duration-500 mt-9 hidden w-[420px] xl:  xl:block "
                        :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">
                        <circle cx="125.006" cy="217.211" r="125" fill="black" />
                        <circle cx="250.006" cy="104.211" r="104" fill="black" />
                        <circle cx="282.006" cy="268.211" r="136" fill="black" />
                    </svg>
                </div>
            </div>
        </RouterLink>

    </section>

    <section data-section-name="sec1" class="w-full">
        <RouterLink to="/exil">
            <div class="flex w-4/5 justify-around items-center md:h-[100vh]  mx-auto">
                <div class="flex items-center w-full justify-center" aria-controls="ban" :aria-expanded="hoverban"
                    @mouseenter="hoverban = !hoverban" @mouseleave="hoverban = !hoverban">
                    <svg width="419" height="405" viewBox="0 0 419 405" fill="none" xmlns="http://www.w3.org/2000/svg "
                        class="motion-reduce:transition-transform motion-safe:duration-500 mt-9 hidden w-[420px] xl:  xl:block "
                        :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">
                        <circle cx="125.006" cy="217.211" r="125" fill="black" />
                        <circle cx="250.006" cy="104.211" r="104" fill="black" />
                        <circle cx="282.006" cy="268.211" r="136" fill="black" />
                    </svg>
                    <div class="flex items-center justify-end">
                        <p class=" mr-4 md:mr-[-10vh] absolute xl:text-[5vw] text-6xl font-Chopper text-white md:mix-blend-difference z-20 text-right shadowtext motion-reduce:transition-transform motion-safe:duration-500 w-[420px]"
                            :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">

                            Les Exilés
                            <br>
                            Des Quais
                        </p>
                        <img src="../../Photos/Exilés1.jpg" alt="Photo you are mine"
                            class="object-cover aspect-square max-w-3xl scale-95 motion-reduce:transition-transform relative motion-safe:duration-500 w-full"
                            :class="['', hoverban ? ' scale-95, scale-105 ' : '']">
                    </div>




                </div>
            </div>
        </RouterLink>

    </section>
    <section data-section-name="sec1" class="w-full">
        <RouterLink to="/gaudi">
            <div class="flex w-4/5 justify-around items-center md:h-[100vh]  mx-auto">
                <div class="flex items-center w-full justify-center" aria-controls="ban" :aria-expanded="hoverban"
                    @mouseenter="hoverban = !hoverban" @mouseleave="hoverban = !hoverban">

                    <div class="flex items-center">
                        <p class="ml-4 md:ml-[-10vh] absolute xl:text-[5vw] text-6xl font-Chopper text-white md:mix-blend-difference z-20 text-left shadowtext motion-reduce:transition-transform motion-safe:duration-500 w-[420px]"
                            :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">

                            Les Lumières
                            <br>
                            De Gaudi
                        </p>
                        <img src="../../Photos/Gaudi1.jpg" alt="Photo you are mine"
                            class="object-cover aspect-square max-w-3xl scale-95 motion-reduce:transition-transform relative motion-safe:duration-500 w-full"
                            :class="['', hoverban ? ' scale-95, scale-105 ' : '']">
                    </div>

                    <svg width="419" height="405" viewBox="0 0 419 405" fill="none" xmlns="http://www.w3.org/2000/svg "
                        class="motion-reduce:transition-transform motion-safe:duration-500 mt-9 hidden w-[420px] xl:  xl:block "
                        :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">
                        <circle cx="125.006" cy="217.211" r="125" fill="black" />
                        <circle cx="250.006" cy="104.211" r="104" fill="black" />
                        <circle cx="282.006" cy="268.211" r="136" fill="black" />
                    </svg>
                </div>
            </div>
        </RouterLink>

    </section>
    <section data-section-name="sec1" class="w-full">
        <RouterLink to="/mannequin">
            <div class="flex w-4/5 justify-around items-center md:h-[100vh]  mx-auto">
                <div class="flex items-center w-full justify-center" aria-controls="ban" :aria-expanded="hoverban"
                    @mouseenter="hoverban = !hoverban" @mouseleave="hoverban = !hoverban">
                    <svg width="419" height="405" viewBox="0 0 419 405" fill="none" xmlns="http://www.w3.org/2000/svg "
                        class="motion-reduce:transition-transform motion-safe:duration-500 mt-9 hidden w-[420px] xl:  xl:block "
                        :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">
                        <circle cx="125.006" cy="217.211" r="125" fill="black" />
                        <circle cx="250.006" cy="104.211" r="104" fill="black" />
                        <circle cx="282.006" cy="268.211" r="136" fill="black" />
                    </svg>
                    <div class="flex items-center justify-end">
                        <p class=" mr-4 md:mr-[-10vh] absolute xl:text-[5vw] text-6xl font-Chopper text-white md:mix-blend-difference z-20 text-right shadowtext motion-reduce:transition-transform motion-safe:duration-500 w-[420px]"
                            :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">

                            Annomalie Du
                            <br>
                            Mannequinat
                        </p>
                        <img src="../../Photos/mannequin1.jpg" alt="Photo you are mine"
                            class="object-cover aspect-square max-w-3xl scale-95 motion-reduce:transition-transform relative motion-safe:duration-500 w-full"
                            :class="['', hoverban ? ' scale-95, scale-105 ' : '']">
                    </div>




                </div>
            </div>
        </RouterLink>

    </section>
</template>

<style>
.shadowtext {

    text-decoration: none;
    padding: none;
    transition: 0.5s;
}

.shadowtext:hover {

    text-shadow: 20px 20px #EDC700;
}
</style>