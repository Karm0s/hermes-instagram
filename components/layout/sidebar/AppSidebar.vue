<template>
    <aside class="sidebar">
        <div class="sidebar-header">
            <h1 class="brand generalsans-semibold" :class="this.$mq === 'sm' ? 'hidden' : ''">featurerequest.co</h1>
            <h1 class="brand generalsans-semibold" :class="this.$mq === 'sm' ? '' : 'hidden'">FR</h1>
        </div>
        <div class="navlinks">
            <div class="upper-links">
                <button id="home" class="navlink" :class="this.active === 'home' ? 'navlink--active' : ''" @click="navlinkClick">
                    <fa class="navlink-icon" icon="home" />
                    <transition name="fade-text" mode="out-in">
                        <span class="navlink-text" v-if="this.$mq !== 'sm'">Home</span>
                    </transition>
                </button>

                <button id="feature-requests" class="navlink" :class="this.active === 'feature-requests' ? 'navlink--active' : ''" @click="navlinkClick">
                    <fa class="navlink-icon" icon="inbox" />
                    <transition name="fade-text" mode="out-in">
                        <span class="navlink-text" v-if="this.$mq !== 'sm'">Feature Requests</span>
                    </transition>
                </button>

                <button id="request-page" class="navlink" :class="this.active === 'request-page' ? 'navlink--active' : ''" @click="navlinkClick">
                    <fa class="navlink-icon" icon="file" />
                    <transition name="fade-text" mode="out-in">
                        <span class="navlink-text" v-if="this.$mq !== 'sm'">Requests Page</span>
                    </transition>
                </button>

                <button id="account" class="navlink" :class="this.active === 'account' ? 'navlink--active' : ''" @click="navlinkClick">
                    <fa class="navlink-icon" icon="user" />
                    <transition name="fade-text" mode="out-in">
                        <span class="navlink-text" v-if="this.$mq !== 'sm'">Account</span>
                    </transition>
                </button>
            </div>
            <div class="lower-links">
                <button id="logout" class="navlink" :class="this.active === 'logout' ? 'navlink--active' : ''" @click="navlinkClick">
                    <fa class="navlink-icon" icon="door-open" />
                    <transition name="fade-text" mode="out-in">
                        <span class="navlink-text" v-if="this.$mq !== 'sm'">Log Out</span>
                    </transition>
                </button>
            </div>
        </div>
    </aside>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class AppSidebar extends Vue {
    active: String = "home"
    sidebarOpen: Boolean = false

    navlinkClick(e: any) {
        let id: String = e.target.id
        this.active = id
        this.$emit("section-change", id)
    }

    sidebarButtonClick() {
        this.sidebarOpen = !this.sidebarOpen
    }
}
</script>
<style lang="postcss" scoped>
.sidebar {
    @apply bg-blue-100 md:px-8 h-screen flex flex-col py-8;
}
.sidebar-header {
    @apply flex items-center justify-center mt-3 mb-10;
}
.navlinks{
    @apply flex-grow flex flex-col items-start justify-between h-full px-1;
}
.upper-links{
    @apply flex flex-col items-start justify-start;
}
.navlink-icon {
    width: 2rem;
    font-size: 1.25rem;
    transition: font-size 0.3s cubic-bezier(0.85, 0, 0.15, 1);
    @apply mx-2;
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
    @apply w-full py-2 md:px-2 my-2 flex justify-start items-center;
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
    }
    & > .navlink-text {
        font-weight: 700;
    }
}
</style>
