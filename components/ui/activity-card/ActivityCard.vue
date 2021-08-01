<template>
    <app-card>
        <h1 class="card-title stat-text text-lg lg:text-2xl generalsans-medium text-center mt-4 mb-8">{{this.title}}</h1>
        <div class="flex flex-col w-full justify-start divide-y-2 divide-gray-500 divide-dashed">
            <slot/>
        </div>
    </app-card>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator"
import AppCard from "../AppCard.vue"

@Component({
    components: {
        AppCard
    }
})
export default class ActivityCard extends Vue{
    @Prop({default: "Activity", type:String}) title!:String
}
</script>
<style lang="postcss" scoped>
</style>
