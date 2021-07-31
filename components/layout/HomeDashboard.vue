<template>
    <section class="w-full h-full">
        <dashboard-header>
            <h1 class="text-3xl align-middle generalsans-medium">Welcome, <span class="font-bold generalsans-bold">Yanis</span></h1>
        </dashboard-header>
        <div class="grid grid-cols-6">
            <stats-card title="Statistics" class="col-span-4 row-span-2 bg-blue-100">
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
            <activity-card title="Recent Activity" class="card row-span-1 col-span-2 bg-green-100">
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
                <recent-feature></recent-feature>
            </activity-card>
            <stats-card title="Weekly Statistics" class="row-span-2 col-span-4 bg-green-100">
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
            <ads-card class="col-span-2 row-span-2 bg-green-100"></ads-card>
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

import AdsCard from "~/components/ui/advertisement-card/AdsCard.vue"

@Component({
    components: {
        DashboardHeader,
        StatsCard,
        StatItem,
        ActivityCard,
        RecentFeature,
        AdsCard
    }
})
export default class HomeDashboard extends Vue {}
</script>
<style lang="postcss" scoped>
</style>
