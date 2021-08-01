<template>
    <img class="avatar" src="https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg" alt="">
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"

@Component
export default class ProfilePicture extends Vue{}
</script>
<style lang="postcss" scoped>
.avatar-container{
    @apply flex items-center justify-center;
}
.avatar {
    width: 50px !important;
    height: 50px;
    border-radius: 100%;
    transition: border-radius 0.3s ease-in;
    object-fit: fill;
    @apply bg-red-100 flex-shrink-0;
}
.avatar:hover {
    border-radius: 20px;
}
</style>
