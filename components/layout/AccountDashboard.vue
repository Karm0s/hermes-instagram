<template>
    <section class="w-full h-full">
        <dashboard-header>
            <h1 class="text-lg leading-5 md:text-xl lg:text-2xl align-middle generalsans-medium">Account Settings</h1>
        </dashboard-header>
        <div class="flex flex-col items-start justify-start w-1/2">
            <label class="generalsans-semibold" for="">E-mail</label>
            <div class="flex flex-col w-full items-start justify-start">
                <text-input class="w-full" placeholder="bouchenna.yanis@gmail.com"></text-input>
                <app-button class="mt-4 w-1/3">update e-mail <fa class="ml-1" icon="pen"/></app-button>
            </div>
            <label class="generalsans-semibold mt-10" for="">Password</label>
            <div class="flex flex-col w-full items-start justify-start">
                <text-input class="w-full" type="password" placeholder="Old Password"></text-input>
                <text-input class="w-full" type="password" placeholder="New Password"></text-input>
                <app-button class="mt-4 w-1/3">update password<fa class="ml-1" icon="pen"/></app-button>
            </div>
        </div>
    </section>

</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"
import DashboardHeader from "~/components/layout/DashboardHeader.vue"
import TextInput from "~/components/common/TextInput.vue"
import AppButton from "~/components/common/AppButton.vue"


@Component({
    components: {
        DashboardHeader,
        TextInput,
        AppButton
    }
})
export default class AccountDashboard extends Vue{}
</script>
<style lang="postcss" scoped>
</style>
