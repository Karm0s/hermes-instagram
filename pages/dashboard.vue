<template>
    <main class="flex items-start h-full overflow-x-hidden w-screen justify-start">
        <app-sidebar class="flex-shrink-0" @section-change="changeSection"></app-sidebar>
        <dashboard-content>
            <transition name="component-fade" mode="out-in">
                <component :is="this.currentSection"></component>
            </transition>
        </dashboard-content>
    </main>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import AppSidebar from "~/components/layout/sidebar/AppSidebar.vue"
import DashboardContent from "~/components/layout/DashboardContent.vue"
import HomeDashboard from "~/components/layout/HomeDashboard.vue"
import FeatureRequestsDashboard from "~/components/layout/FeatureRequestsDashboard.vue"
import RequestPageDashboard from "~/components/layout/RequestPageDashboard.vue"
import AccountDashboard from "~/components/layout/AccountDashboard.vue"

@Component({
    components: {
        AppSidebar,
        DashboardContent,
        HomeDashboard,
        FeatureRequestsDashboard,
        RequestPageDashboard,
        AccountDashboard,
    },
})
export default class Dashboard extends Vue {
    currentSection: String = "HomeDashboard"

    changeSection(sectionId: String) {
        if (sectionId === "home") {
            this.currentSection = "HomeDashboard"
        } else if (sectionId === "feature-requests") {
            this.currentSection = "FeatureRequestsDashboard"
        } else if (sectionId === "request-page") {
            this.currentSection = "RequestPageDashboard"
        } else if (sectionId === "account") {
            this.currentSection = "AccountDashboard"
        }
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
