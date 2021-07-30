<template>
    <div class="card">
        <div class="card-content w-full mt-4">
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
    border-radius: 25px;
    min-height: 350px;
    @apply flex flex-col items-center justify-start mx-4 my-4;
}
.card-content {
    @apply flex flex-col items-center justify-center;
}
</style>
