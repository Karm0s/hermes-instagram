<template>
    <app-card class="bg-purple-200 my-2">
        <div class="flex flex-col md:flex-row md:justify-between items-center my-2 px-4 md:px-8 lg:px-10 w-full">
            <div class="flex items-center mb-4 md:mb-0">
                <profile-picture class="mr-2"></profile-picture>
                <div class="flex flex-col justify-start">
                    <h3 class="text-sm generalsans-semibold">John Slimanson</h3>
                    <h4 class="text-xs generalsans-medium">225K followers</h4>
                </div>
            </div>
            <div class="mb-4 md:mb-0">
                Wants: <span class="generalsans-bold">Story/Post</span>
            </div>
            <app-button class="contact-button mb-4 md:mb-0 md:w-1/4">
                contact
            </app-button>
        </div>
    </app-card>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import ProfilePicture from "~/components/common/ProfilePicture.vue"
import AppCard from "~/components/ui/AppCard.vue"
import AppButton from "~/components/common/AppButton.vue"

@Component({
    components: {
        ProfilePicture,
        AppCard,
        AppButton
    },
})
export default class FeatureRequest extends Vue {}
</script>
<style lang="postcss" scoped>
.contact-button{
    max-width: 150px;
}
</style>
