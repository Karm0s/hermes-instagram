<template>
    <div class="user-info flex items-center justify-end">
        <div class="flex flex-col justify-start px-4">
            <h3 class="text-sm generalsans-semibold">John</h3>
            <h4 class="text-xs generalsans-medium">225K followers</h4>
        </div>
        <div class="avatar"></div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class UserAvatar extends Vue {}
</script>
<style lang="postcss" scoped>
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    transition: border-radius 0.3s ease-in;
    @apply bg-red-100;
}
.avatar:hover {
    border-radius: 20px;
}
</style>
