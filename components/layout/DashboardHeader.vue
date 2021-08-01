<template>
    <div class="flex flex-grow justify-between items-center mx-2 mb-4">
        <!-- <h1 class="text-3xl align-middle generalsans-medium">Welcome, <span class="font-bold generalsans-bold">Yanis</span></h1> -->
        <slot/>
        <user-avatar>
            <h3 class="text-sm generalsans-semibold" v-if="this.$mq!=='sm'">John</h3>
            <h4 class="text-xs generalsans-medium" v-if="this.$mq!=='sm'">225K followers</h4>
        </user-avatar>
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
