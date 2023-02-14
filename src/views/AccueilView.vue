<script setup>
import Hero_Accueil from "@/components/hero.vue"
import Photo from "@/components/BanPhoto.vue"
import Design from "@/components/BanDesign.vue"
</script>

<template>
    <div class="gap-48 flex flex-col">
        <Hero_Accueil class="mb-9 fade" />


        <div>
            <Photo />
            <Design />
        </div>
    </div>

</template>

<style>
.fade {
    -webkit-animation: fadein 3s;
    -moz-animation: fadein 3s;
    -ms-animation: fadein 3s;
    -o-animation: fadein 3s;
    animation: fadein 3s;
}

@keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>