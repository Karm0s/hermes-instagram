<template>
    <div class="flex flex-grow justify-between items-center mx-2 mb-4">
        <!-- <h1 class="text-3xl align-middle generalsans-medium">Welcome, <span class="font-bold generalsans-bold">Yanis</span></h1> -->
        <slot/>
        <user-avatar></user-avatar>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import UserAvatar from "~/components/common/UserAvatar.vue"

@Component({
    components: {
        UserAvatar,
    }
})
export default class DashboardHeader extends Vue {}
</script>
<style lang="postcss" scoped></style>
