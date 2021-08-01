<template>
    <div class="flex justify-between items-center my-2">
        <div class="flex w-1/3 items-center">
            <profile-picture></profile-picture>
            <div class="flex flex-col justify-start px-4">
                <h3 class="text-sm generalsans-semibold">John Slimanson</h3>
                <h4 class="text-xs generalsans-medium">225K followers</h4>
            </div>
        </div>
        <div>
            Wants: <span class="generalsans-bold">Story/Post</span>
        </div>
        <app-button class="w-1/4">
            contact
        </app-button>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import ProfilePicture from "~/components/common/ProfilePicture.vue"
import AppButton from "~/components/common/AppButton.vue"

@Component({
    components: {
        ProfilePicture,
        AppButton
    },
})
export default class FeatureRequest extends Vue {}
</script>
<style lang="postcss" scoped></style>
