<template>
    <app-card>
        TICK ADDDDD HERRREEE
    </app-card>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"
import AppCard from "../AppCard.vue"

@Component({
    components: {
        AppCard,
    }
})
export default class AdsCard extends Vue{}
</script>
<style lang="postcss" scoped>
.card{
    width: 300px;
    height: 300px;

}
</style>
