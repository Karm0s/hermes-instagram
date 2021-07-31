<template>
    <div>
        <div class="flex items-center justify-start my-1">
            <p>You have featured <span class="generalsans-semibold ">@John</span></p>
        </div>
        <hr/>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"
import ProfilePicture from "~/components/common/ProfilePicture.vue"

@Component({
    components: {
        ProfilePicture
    }
})
export default class RecentFeature extends Vue{}
</script>
<style lang="postcss" scoped>

</style>
