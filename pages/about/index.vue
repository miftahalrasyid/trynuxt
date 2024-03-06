
<script lang="ts">
import type { IUser } from '~/types';
export default {
    data() {
        return {

        }
    },
    methods: {
        h1click() {
            console.log("about")
        }
    }
}
</script>

<template>
    <h1 @click="h1click">
        WELCOME TO THE MOST "CONSTANTLY REFINED" HEALTH CARE GROUP IN INDONESIA
    </h1>
    <p>We started humbly as Brawijaya Women & Children Hospital on the 17th of September 2006, located in Antasari South
        Jakarta. Our commitment kept growing from providing healthcare services for Women & Children to expanding our
        services to General Hospitals in the most prominent areas. All the way from Jakarta to Bandung.</p>
    <p>Fast-moving, always upgrading, always seizing opportunities to expand our health services aggressively, we continued
        to reach more area coverage ¬to more areas of Jakarta and greater Jakarta like Depok and Tangerang.</p>
    <p>The more areas we cover, the more our services are open to everyone. From regular patients, insurance patients, to
        BPJS Kesehatan and BPJS Tenaga Kerja patients, we are ready to give them the health services they need and deserve.
    </p>
    <p>Brawijaya Group also extended its commitment to implement the best services for customers and stakeholders. After
        all, expansion would be meaningless if not accompanied with excellent services.</p>
    <p>We only offer fair partnerships to doctors and/or other parties. The type of partnership where we grow together.
        Expanding the business and healthcare services, doing it all from our hearts.<br />
        Our strong partnership is the foundation on which we build excellent HOSPITAL WITH A HEART.
    </p>
</template>~/composables/useUserData