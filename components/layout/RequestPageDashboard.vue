<template>
    <section class="w-full h-full">
        <dashboard-header>
            <h1 class="text-3xl align-middle generalsans-medium">Requests Page</h1>
        </dashboard-header>
        <div>HEllooooooooooooo there</div>
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
export default class RequestPageDashboard extends Vue{}
</script>
<style lang="postcss" scoped>

</style>
