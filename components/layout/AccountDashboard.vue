<template>
    <section class="w-full h-full">
        <dashboard-header>
            <h1 class="text-3xl align-middle generalsans-medium">Account Settings</h1>
        </dashboard-header>
        <div>It take a shit ton of effort and time to write maintainable code...</div>
    </section>

</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"
import DashboardHeader from "~/components/layout/DashboardHeader.vue"

@Component({
    components: {
        DashboardHeader,
    }
})
export default class AccountDashboard extends Vue{}
</script>
<style lang="postcss" scoped>

</style>
