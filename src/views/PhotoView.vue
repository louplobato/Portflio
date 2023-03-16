<script setup >
import { ref } from "@vue/reactivity";
let hoverban = ref();

</script>
<script >
import { onMounted } from "vue";
export default {
    mounted() {
        window.scrollTo(0, 0)
    }
}

$(document).ready(function () {
    screenCheck();

    $('.scroll-control .one').click(function () {
        $.scrollify.move('#s-one');
    });
    $('.scroll-control .two').click(function () {
        $.scrollify.move('#s-two');
    });
    $('.scroll-control .three').click(function () {
        $.scrollify.move('#s-three');
    });
});

$(window).on('resize', function () {
    screenCheck();
});

function applyScroll() {
    $.scrollify({
        section: '.scroll',
        sectionName: 'section-name',
        //standardScrollElements: 'section',
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
    });
}

function screenCheck() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID || $(window).width() <= 1024) {
        // its mobile screen
        $.scrollify.destroy();
        $('section').removeClass('scroll').removeAttr('style');
        $.scrollify.disable();
    } else {
        // its desktop
        $('section').addClass('scroll');
        applyScroll();
        $.scrollify.enable();
    }
}
</script>






<template >
    <!--<div class="flex w-full justify-center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>-->
    <section data-section-name="sec1" class="w-full">
        <div class="flex w-4/5 justify-around items-center md:h-[100vh]  mx-auto">
            <div class="flex items-center w-full justify-center" aria-controls="ban" :aria-expanded="hoverban"
                @mouseenter="hoverban = !hoverban" @mouseleave="hoverban = !hoverban">

                <div class="flex items-center">
                    <p class="ml-4 md:ml-[-10vh] absolute xl:text-[5vw] text-6xl font-Chopper text-white md:mix-blend-difference z-20 text-left shadowtext motion-reduce:transition-transform motion-safe:duration-500 w-[420px]"
                        :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">

                        You
                        Are <br>
                        Mine
                    </p>
                    <img src="../../mine-6613.jpg" alt="Photo you are mine"
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
    </section>
    <section data-section-name="sec1" class="w-full">
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
                    <p class="mr-4 md:mr-[-10vh] absolute xl:text-[5vw] text-6xl font-Chopper text-white md:mix-blend-difference z-20 text-right shadowtext motion-reduce:transition-transform motion-safe:duration-500 w-[420px]"
                        :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">

                        You
                        Are <br>
                        Mine
                    </p>
                    <img src="../../mine-6613.jpg" alt="Photo you are mine"
                        class="max-w-3xl scale-95 motion-reduce:transition-transform relative motion-safe:duration-500 w-full"
                        :class="['', hoverban ? ' scale-95, scale-105 ' : '']">
                </div>




            </div>
        </div>
    </section>
    <section data-section-name="sec1" class="w-full">
        <div class="flex w-4/5 justify-around items-center md:h-[100vh]  mx-auto">
            <div class="flex items-center w-full justify-center" aria-controls="ban" :aria-expanded="hoverban"
                @mouseenter="hoverban = !hoverban" @mouseleave="hoverban = !hoverban">

                <div class="flex items-center">
                    <p class="ml-4 md:ml-[-10vh] absolute xl:text-[5vw] text-6xl font-Chopper text-white md:mix-blend-difference z-20 text-left shadowtext motion-reduce:transition-transform motion-safe:duration-500 w-[420px]"
                        :class="['', hoverban ? ' opacity-100, opacity-0 ' : '']">

                        You
                        Are <br>
                        Mine
                    </p>
                    <img src="../../mine-6613.jpg" alt="Photo you are mine"
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