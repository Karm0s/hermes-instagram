<template>
    <main class="flex flex-col md:flex-row items-start h-screen overflow-x-hidden w-screen justify-start">
        <transition name="component-fade" mode="out-in">
            <app-sidebar class="flex-shrink-0" v-if="this.$mq !== 'sm'"></app-sidebar>
        </transition>
        <!-- <app-sidebar class="flex-shrink-0" @section-change="changeSection"></app-sidebar> -->
        <dashboard-content>
            <transition name="component-fade" mode="out-in">
                <component :is="this.navigationModule.currentComponent"></component>
            </transition>
        </dashboard-content>
        <transition name="component-fade" mode="out-in">
            <bottom-dock v-if="this.$mq === 'sm'"></bottom-dock>
        </transition>
        <!-- <bottom-dock @section-change="changeSection"></bottom-dock> -->
    </main>
</template>
<script lang="ts">
import { Vue, Component, getModule, Watch } from "nuxt-property-decorator"
import AppSidebar from "~/components/layout/sidebar/AppSidebar.vue"
import BottomDock from "~/components/layout/bottom-dock/BottomDock.vue"
import DashboardContent from "~/components/layout/DashboardContent.vue"
import HomeDashboard from "~/components/layout/HomeDashboard.vue"
import FeatureRequestsDashboard from "~/components/layout/FeatureRequestsDashboard.vue"
import RequestPageDashboard from "~/components/layout/RequestPageDashboard.vue"
import AccountDashboard from "~/components/layout/AccountDashboard.vue"

import {NavigationNames} from "~/types/Navigation"

import NavigationModule from "~/store/navigationModule"

@Component({
    components: {
        AppSidebar,
        BottomDock,
        DashboardContent,
        HomeDashboard,
        FeatureRequestsDashboard,
        RequestPageDashboard,
        AccountDashboard,
    },
})
export default class Dashboard extends Vue {
    currentSection: String = "HomeDashboard"
    navigationModule!:NavigationModule
    created() {
        const navigationModuleInstance = getModule(NavigationModule, this.$store)
        this.navigationModule = navigationModuleInstance
    }
}
</script>
<style lang="postcss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
    transition: all 0.3s cubic-bezier(0.85, 0, 0.15, 1);
}
.component-fade-enter,
.component-fade-leave-to {
    margin-top: 20px;
    opacity: 0;
}
</style>
