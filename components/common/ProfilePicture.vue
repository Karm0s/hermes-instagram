<template>
    <div class="avatar"></div>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"

@Component
export default class ProfilePicture extends Vue{}
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
