<template>
    <div class="flex flex-col w-full h-screen overflow-x-hidden overflow-y-scroll px-4 lg:px-10 py-8">
        <slot/>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class DashboardContent extends Vue {}
</script>
<style lang="postcss" scoped></style>
