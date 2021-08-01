<template>
    <section class="w-full h-full">
        <dashboard-header>
            <h1 class="text-3xl align-middle generalsans-medium">Requests Page</h1>
        </dashboard-header>
        <div>
            <label>Include in feature page : </label>
            <checkbox-input class="my-2 generalsans-semibold">Post features</checkbox-input>
            <checkbox-input class="my-2 generalsans-semibold">story features</checkbox-input>
        </div>
    </section>

</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"
import DashboardHeader from "~/components/layout/DashboardHeader.vue"

import CheckboxInput from "~/components/common/CheckboxInput.vue"
import TextInput from "~/components/common/TextInput.vue"

@Component({
    components: {
        DashboardHeader,
        CheckboxInput,
        TextInput
    }
})
export default class RequestPageDashboard extends Vue{}
</script>
<style lang="postcss" scoped>

</style>
