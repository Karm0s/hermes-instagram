<template>
    <div class="user-info flex items-center justify-end">
        <div class="flex flex-col justify-start px-4">
            <slot/>
        </div>
        <profile-picture></profile-picture>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import ProfilePicture from "./ProfilePicture.vue"

@Component({
    components: {
        ProfilePicture,
    }
})
export default class UserAvatar extends Vue {}
</script>
<style lang="postcss" scoped>
</style>
