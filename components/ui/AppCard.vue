<template>
    <div class="card">
        <div class="card-content w-full">
            <slot/>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"

@Component
export default class AppCard extends Vue{}
</script>
<style lang="postcss" scoped>
.card {
    border-radius: 15px;
    @apply flex flex-col items-center justify-start;
}
.card-content {
    @apply flex flex-col items-center justify-center;
}
</style>
