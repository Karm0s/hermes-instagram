<template>
    <!-- <div class="card">
        <div class="card-content w-full mt-4">
        </div>
    </div> -->
    <app-card>
        <h1 class="card-title stat-text text-2xl generalsans-medium text-center mb-20">{{this.title}}</h1>
        <div class="flex w-full md:w-4/5 justify-between">
            <slot/>
        </div>
    </app-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"
import AppCard from "../AppCard.vue"
import StatItem from "./StatItem.vue"

@Component({
    components: {
        AppCard,
        StatItem
    }
})
export default class StatsCard extends Vue {
    @Prop({default: "Statistics", type:String}) title!:String
}
</script>
<style lang="postcss" scoped>
/* .card {
    border-radius: 25px;
    min-height: 350px;
    @apply flex flex-col items-center justify-start mx-4 my-4;
}
.card-content {
    @apply flex flex-col items-center justify-center;
} */
</style>
