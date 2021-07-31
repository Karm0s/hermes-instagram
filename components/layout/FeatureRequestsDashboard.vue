<template>
    <section class="w-full h-full">
        <dashboard-header>
            <h1 class="text-3xl align-middle generalsans-medium">Feature Requests</h1>
        </dashboard-header>
        <div class="flex flex-col mx-auto w-4/5">
            <feature-request></feature-request>
            <feature-request></feature-request>
            <feature-request></feature-request>
        </div>
    </section>

</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"
import DashboardHeader from "~/components/layout/DashboardHeader.vue"

import FeatureRequest from "~/components/ui/feature-request/FeatureRequest.vue"

@Component({
    components: {
        DashboardHeader,
        FeatureRequest
    }
})
export default class FeatureRequestsDashboard extends Vue{}
</script>
<style lang="postcss" scoped>

</style>
