<template>
    <nav class="bottom-dock w-screen bg-red-100 flex items-center justify-around">
        <button id="home" class="navlink" :class="this.navigationModule.currentSection === 'home' ? 'navlink--active' : ''" @click="navlinkClick">
            <fa class="navlink-icon" icon="home" />
            <!-- <transition name="fade-text" mode="out-in">
                <span class="navlink-text" v-if="this.$mq !== 'sm'">Home</span>
            </transition> -->
        </button>

        <button id="feature-requests" class="navlink" :class="this.navigationModule.currentSection === 'feature-requests' ? 'navlink--active' : ''" @click="navlinkClick">
            <fa class="navlink-icon" icon="inbox" />
            <!-- <transition name="fade-text" mode="out-in">
                <span class="navlink-text" v-if="this.$mq !== 'sm'">Feature Requests</span>
            </transition> -->
        </button>

        <button id="request-page" class="navlink" :class="this.navigationModule.currentSection === 'request-page' ? 'navlink--active' : ''" @click="navlinkClick">
            <fa class="navlink-icon" icon="file" />
            <!-- <transition name="fade-text" mode="out-in">
                <span class="navlink-text" v-if="this.$mq !== 'sm'">Requests Page</span>
            </transition> -->
        </button>

        <button id="account" class="navlink" :class="this.navigationModule.currentSection === 'account' ? 'navlink--active' : ''" @click="navlinkClick">
            <fa class="navlink-icon" icon="user" />
            <!-- <transition name="fade-text" mode="out-in">
                <span class="navlink-text" v-if="this.$mq !== 'sm'">Account</span>
            </transition> -->
        </button>

        <button id="logout" class="navlink" :class="this.navigationModule.currentSection === 'logout' ? 'navlink--active' : ''" @click="navlinkClick">
            <fa class="navlink-icon" icon="door-open" />
            <!-- <transition name="fade-text" mode="out-in">
                <span class="navlink-text" v-if="this.$mq !== 'sm'">Log Out</span>
            </transition> -->
        </button>
    </nav>
</template>
<script lang="ts">
import { Vue, Component, getModule } from "nuxt-property-decorator"

import {NavigationNames} from "~/types/Navigation"

import NavigationModule from "~/store/navigationModule"

@Component
export default class BottomDock extends Vue {
    active: String = "home"

    navigationModule!:NavigationModule

    created() {
        const navigationModuleInstance = getModule(NavigationModule, this.$store)
        this.navigationModule = navigationModuleInstance
    }

    navlinkClick(e: any) {
        let id: String = e.target.id
        this.active = id
        // this.$emit("section-change", id)
        this.navigationModule.changeActiveSection(this.active as NavigationNames)
    }

}
</script>
<style lang="postcss" scoped>
.navlinks{
    @apply flex-grow flex flex-col items-start justify-between h-full px-1;
}
.navlink-icon {
    width: 2rem;
    font-size: 1.25rem;
    transition: font-size 0.3s cubic-bezier(0.85, 0, 0.15, 1);
    @apply mx-2 text-gray-500;
}
.navlink-text {
    height: auto;
    transition: all 0.3s cubic-bezier(0.85, 0, 0.15, 1);
}
.fade-text-enter-active,
.fade-text-leave-active {
    transition: all 0.2s;
    opacity: 1;
    transform: scale(1);
}
.fade-text-enter,
.fade-text-leave-to {
    opacity: 0;
    transform: scale(0);
}
.navlink {
    background-size: 0% 0%;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.85, 0, 0.15, 1);
    border-radius: 10px;
    @apply py-2 md:px-2 my-2 flex justify-center items-center;
}
.navlink:hover{
    background-size: 100% 100%;
    & > .navlink-icon {
        font-size: 1.5rem;
    }
    & > .navlink-text {
        font-weight: 700;
    }
}
.navlink > * {
    pointer-events: none;
}
.navlink--active {
    background-size: 100% 100%;
    @apply bg-red-100;
    & > .navlink-icon {
        font-size: 1.5rem;
        @apply text-black;
    }
    & > .navlink-text {
        font-weight: 700;
    }
}
</style>
