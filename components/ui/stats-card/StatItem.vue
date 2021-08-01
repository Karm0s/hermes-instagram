<template>
    <div class="stat-item flex flex-col items-center text-center justify-center">
        <fa :icon="this.icon" class="stat-icon mb-4" />
        <p class="stat-text leading-6 generalsans-bold text-4xl w-full">
            <slot/> <br /><span class="generalsans-medium text-lg text-gray-400">{{this.label}}</span>
        </p>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator"

@Component
export default class StatItem extends Vue {
    @Prop({default: "home", type: String}) icon!:String
    @Prop({default: "Followers", type: String}) label!:String

}
</script>
<style lang="postcss" scoped>
.stat-item {
    border-radius: 25px;
    /* @apply bg-red-100 py-20 px-8; */
}
.stat-text {
    min-width: 150px;
}
.stat-icon {
    font-size: 2.5rem;
}
</style>
