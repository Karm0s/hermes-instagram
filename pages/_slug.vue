<template>
    <main class="flex flex-col items-center justify-center h-screen w-screen">
        <div class="page-info flex flex-col items-center mb-10">
            <profile-picture class="profile my-2"></profile-picture>
            <h1 class="text-3xl generalsans-bold">John's Page</h1>
            <h3 class="text-xl text-gray-500">225k Followers</h3>
        </div>
        <div class="form">
            <p class="generalsans-medium text-gray-500">Enter your informations to get featured: </p>
            <div class="my-2">
                <input type="text" placeholder="instagram usename including the @" class="input px-2 bg-gray-200 w-full">
            </div>
            <div class="my-2">
                <label class="generalsans-medium text-gray-500">Types of features: </label>
                <checkbox-input class="my-2 generalsans-semibold">Post</checkbox-input>
                <checkbox-input class="generalsans-semibold">Story</checkbox-input>
            </div>
            <app-button class="mx-auto my-10 w-full">Submit</app-button>
        </div>
    </main>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"
import ProfilePicture from "~/components/common/ProfilePicture.vue"
import CheckboxInput from "~/components/common/CheckboxInput.vue"
import AppButton from "~/components/common/AppButton.vue"

@Component({
    components: {
        ProfilePicture,
        CheckboxInput,
        AppButton
    }
})
export default class Slug extends Vue{
    asyncData({ params }:any): { slug: String }{
        console.log(params.slug)
        let slug = params.slug
        return { slug }
    }
}
</script>
<style lang="postcss" scoped>
.profile{
    width: 100px;
    height: 100px;
}
</style>
