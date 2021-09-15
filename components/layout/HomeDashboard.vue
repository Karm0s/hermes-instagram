<template>
    <section class="w-full h-full">
        <dashboard-header>
            <h1 class="text-lg leading-5 md:text-xl lg:text-2xl align-middle generalsans-medium">Welcome, <span class="font-bold generalsans-bold">Yanis</span></h1>
        </dashboard-header>
        <div class="flex flex-col lg:flex-row justify-between items-start w-full">
            <div class="flex flex-col items-start justify-start w-full lg:mr-2 lg:w-2/3">
                <stats-card title="Statistics" class="w-full bg-blue-100">
                    <stat-item icon="user" label="Followers">
                        225k
                    </stat-item>
                    <stat-item icon="eye" label="Feature Requests">
                        7895
                    </stat-item>
                    <stat-item icon="image" label="Posts">
                        81
                    </stat-item>
                </stats-card>
                <stats-card title="Weekly Statistics" class="w-full bg-green-100 mt-4">
                    <stat-item icon="user" label="New Followers">
                        1254
                    </stat-item>
                    <stat-item icon="eye" label="Featured People">
                        12
                    </stat-item>
                    <stat-item icon="image" label="Posts">
                        81
                    </stat-item>
                </stats-card>
            </div>
            <activity-card title="Recent Activity" class="w-full mt-4 lg:mt-0 lg:w-1/3 lg:ml-2 bg-green-100 mb-2">
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
            </activity-card>
        </div>
    </section>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

import DashboardHeader from "~/components/layout/DashboardHeader.vue"

import StatsCard from "~/components/ui/stats-card/StatsCard.vue"
import StatItem from "~/components/ui/stats-card/StatItem.vue"

import ActivityCard from "~/components/ui/activity-card/ActivityCard.vue"
import RecentFeature from "~/components/ui/activity-card/events/RecentFeature.vue"


@Component({
    components: {
        DashboardHeader,
        StatsCard,
        StatItem,
        ActivityCard,
        RecentFeature,
    }
})
export default class HomeDashboard extends Vue {}
</script>
<style lang="postcss" scoped>
</style>
