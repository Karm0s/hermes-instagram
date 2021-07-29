<template>
    <main class="flex items-start justify-start">
        <AppSidebar @section-change="changeSection"></AppSidebar>
        <div class="h-screen flex flex-grow">
            <div class="mx-20 my-20">
                <transition name="component-fade" mode="out-in">
                    <component :is="this.currentSection"></component>
                </transition>
            </div>
        </div>
    </main>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"
import AppSidebar from "~/components/layout/sidebar/AppSidebar.vue"
import HomeDashboard from "~/components/layout/HomeDashboard.vue"
import FeatureRequestsDashboard from "~/components/layout/FeatureRequestsDashboard.vue"
import RequestPageDashboard from "~/components/layout/RequestPageDashboard.vue"
import AccountDashboard from "~/components/layout/AccountDashboard.vue"

@Component({
    components: {
        AppSidebar,
        HomeDashboard,
        FeatureRequestsDashboard,
        RequestPageDashboard,
        AccountDashboard
    }
})
export default class Dashboard extends Vue{
    currentSection:String = "HomeDashboard";

    changeSection(sectionId:String){
        if (sectionId === 'home'){
            this.currentSection = "HomeDashboard"
        } else if (sectionId === 'feature-requests'){
            this.currentSection = "FeatureRequestsDashboard"
        } else if (sectionId === 'request-page'){
            this.currentSection = "RequestPageDashboard"
        } else if (sectionId === 'account'){
            this.currentSection = "AccountDashboard"
        }
    }
}
</script>
<style lang="postcss">
.container{
    @apply px-20 py-20;
}
.component-fade-enter-active, .component-fade-leave-active {
    transition: all .3s cubic-bezier(0.85, 0, 0.15, 1);
}
.component-fade-enter, .component-fade-leave-to{
    margin-top: 20px;
    opacity: 0;
}

</style>
