<script setup >
import { ref } from "@vue/reactivity";
let hoverban = ref();
hoverban.value = false;
</script>

    


<template>
    <div class=" flex items-center justify-between  flex-row w-full relative" aria-controls="ban" :aria-expanded="hoverban"
        @mouseenter="hoverban = !hoverban" @mouseleave="hoverban = !hoverban">
        <div class="motion-safe:transition-transform motion-safe:duration-800 w-full shesh flex justify-start">
            <svg viewBox="0 0 779 627" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[100%] h-[35vw] shesh">
                <circle cx="228.5" cy="181.5" r="15%" fill="black"
                    class="motion-safe:transition-transform motion-safe:duration-1000 liquid"
                    :class="['', hoverban ? 'translate-x-[-150px], translate-y-[-20px]' : '']" />
                <circle cx="190" cy="437" r="25%" fill="black"
                    class="motion-safe:transition-transform motion-safe:duration-1000 liquid"
                :class="['', hoverban ? 'translate-x-[-150px]' : '']" />
            <circle cx="504" cy="275" r="38%" fill="black"
                class="motion-safe:transition-transform motion-safe:duration-1000 liquid"
                :class="['', hoverban ? 'translate-x-[150px]' : '']" />
        </svg>

        </div>

        <!--<div class="text-[7vw] font-Chopper text-yellow-400  z-10 absolute opacity-0 motion-safe:transition-transform motion-safe:duration-1000 "
                                                                                                                        :class="['', hoverban ? 'translate-x-[85%], translate-y-[20px], opacity-100' : '']">
                                                                                                                        <p>
                                                                                                                            Photographie
                                                                                                                        </p>
                                                                                                                    </div>-->
        <p
            class="text-[7vw] font-Chopper text-white mix-blend-difference z-20 absolute text-center left-1/2 -translate-x-1/2 shadowtext">
            Photographie
        </p>

    </div>
</template>

<style>
.shesh {
    filter: contrast(20);
}

.shadowtext {

    text-decoration: none;
    padding: none;
    transition: 0.5s;
}

.shadowtext:hover {

    text-shadow: 50px 50px #EDC700;
}
</style>