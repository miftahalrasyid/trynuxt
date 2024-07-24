<template>
    <section class="headline">
        <NuxtImg class="headImg" draggable="false" src="/headImg.png" />
        <title>Hospital check-in</title>
        <p class="tagline">{{ $t("home.headline") }}<br />
            {{ $t("home.headline1") }}</p>
        <p class="jadwal">{{ $t("home.sub") }}</p>

        <div class="btn">
            {{ $t("home.contact") }}
        </div>
        <!-- <h1 @click="h1click()">index page</h1> -->
        <!-- Counter: {{ counter }} -->
    </section>

    <section class="benefit">
        <div>
            <p>{{ $t("home.benefit.title") }}</p>
            <p>{{ $t("home.benefit.body") }}</p>
        </div>
        <div>
            <div v-for="(item, index) in benefit" :key="index" class="card">
                <NuxtImg class="headImg" draggable="false" :src="item.src" />
                <p>{{ $t(item.body) }}</p>
            </div>
        </div>

    </section>
</template>

<script>
// import type { CSSProperties } from 'vue';
// import type { IUser } from '~/types';
export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'default'
        })
        // const { userData, setUserData } = useUserData();
        const appConfig = useAppConfig()
        // console.log("config", appConfig, this)
        // console.log("public", useUserData())
        // return {
        //     userData,
        //     setUserData
        // }
    },
    layout: 'default',
    data() {
        const { userData, setUserData } = useUserData();
        // const { userData, setuser } = this.useUserData();
        const self = this;
        console.log("self ", useUserData())
        return {
            user: useUserData(),
            container: {
                marginTop: "6rem",
                height: "88.4vh",
                overflowY: "scroll",
            },
            tester: { value: "admin", width: 320 },
            benefit: [
                {
                    src: '/profesionals.png',
                    body: "home.benefit.poin1"
                },
                {
                    src: '/laboratory.png',
                    body: "home.benefit.poin2"
                },
                {
                    src: '/radiology.png',
                    body: "home.benefit.poin3"
                }
            ],
            counter: useState('counter', () => {
                console.log("public", userData.value)
                return Math.round(Math.random() * 1000)
            })
        }
    },
    watch: {

    },
    methods: {
    },
    computed: {
        getBenefit() {
            return this.benefit
        }
    }
})
</script>

<style lang="scss">
p,
button {
    font-family: "poppins";
    font-weight: 500;
}

// * {
//     font-family: "poppins";
//     font-weight: 500;
// }

.benefit {
    display: flex;

    >div:first-child {
        margin: 2rem 1rem;
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.1rem;

        p:first-child {
            font-weight: 600;
        }
    }

    >div:last-child {
        margin: 2rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;

        .card {
            display: flex;
            align-items: center;
            width: 29.49%;
            max-width: 220px;
            height: 100%;
            background-color: #222257;
            color: white;
            border-radius: 1rem;
            font-size: 0.85rem;
            justify-content: center;

            img {
                padding: 2.5rem 1rem 0rem 1rem;
                width: 85%
            }

            p {
                text-align: center;
                padding: 0.5rem 0.7rem 0rem 0.7rem;
            }
        }
    }
}

.headline {
    background-image: linear-gradient(#f8f9fa, #e5eef9);
    height: 33.5rem;
    font-size: 1.3rem;
    padding-left: 2.5rem;
    position: relative;
    left: -1rem;
    width: 102.9vw;

    .headImg {
        right: 0;
        position: absolute;
        bottom: 0;
        width: 57%;
        max-width: 700px;
        // pointer-events: none;
    }

    .tagline {
        position: relative;
        top: 7rem;
        font-size: 2.1rem;
        font-weight: 400;
    }

    .jadwal {
        position: relative;
        top: 9rem;
    }

    .btn {
        position: relative;
        top: 10rem;
        width: fit-content;
        padding: 0.5rem 1.7rem;
        border-radius: 1.3rem;
        background: #222257;
        color: white;
        font-size: 0.9rem;
        cursor: pointer;
    }
}
</style>