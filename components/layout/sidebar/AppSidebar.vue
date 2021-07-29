<template>
    <aside class="sidebar">
        <div class="brand">
            Feature Me
        </div>
        <div class="navlinks">
            <div class="upper-navlinks">
                <button id="home" class="navlink" :class="this.active === 'home'? 'navlink--active' : ''" @click="navlinkClick">
                    <fa icon="home" class="navlink-icon"/>
                    <span>Home</span>
                </button>
                <button id="feature-requests" class="navlink" :class="this.active === 'feature-requests'? 'navlink--active' : ''" @click="navlinkClick">
                    <fa icon="inbox" class="navlink-icon"/>
                    <span>Feature Requests</span>
                </button>
                <button id="request-page" class="navlink" :class="this.active === 'request-page'? 'navlink--active' : ''" @click="navlinkClick">
                    <fa icon="file" class="navlink-icon"/>
                    <span>Request Page</span>
                </button>
                <button id="account" class="navlink" :class="this.active === 'account'? 'navlink--active' : ''" @click="navlinkClick">
                    <fa icon="user" class="navlink-icon"/>
                    <span>Account</span>
                </button>
            </div>
            <div class="lower-navlinks">
                <button id="logout" class="navlink" :class="this.active === 'logout'? 'navlink--active' : ''" @click="navlinkClick">
                    <fa icon="door-open" class="navlink-icon"/>
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    </aside>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator"

@Component
export default class AppSidebar extends Vue{
    active:String = "home";

    navlinkClick(e:any){
        let id:String = e.target.id
        this.active = id
        this.$emit('section-change', id)
    }
}
</script>
<style lang="postcss" scoped>
.sidebar{
    width: 260px !important;
    min-height: 100vh;
    @apply flex flex-col items-center bg-red-300;
}
.brand{
    font-family: 'GeneralSans-Bold';
    @apply mt-2;
}
.navlinks{
    font-family: "GeneralSans-variable";
    @apply flex flex-grow flex-col items-start justify-between w-full pl-6 mt-10;
}
.upper-navlinks{
    @apply w-full;
}
.upper-navlinks > *{
    border-radius: 10px 0 0 10px;
}
.lower-navlinks{
}
.lower-navlinks > *{
    border-radius: 10px 10px 10px 10px;
    @apply pr-4;
}
.navlink{
    background-size: 0% 0%;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.85, 0, 0.15, 1);
    @apply w-full py-2 pl-2 my-2;

    & > span {
        transition: font-weight 0.3s cubic-bezier(0.85, 0, 0.15, 1);
    }
}
.navlink > * {
    pointer-events: none;
}
.navlink--active{
    background-size: 100% 100%;
    @apply bg-red-100;
    & > .navlink-icon {
        font-size: 1.5rem;
    }
    & > span {
        font-weight: 700;
    }
}
.navlink-icon{
    width: 2rem;
    font-size: 1.25rem;
    transition: font-size 0.3s cubic-bezier(0.85, 0, 0.15, 1);
    @apply mx-2;
}
.navlink{
    @apply flex justify-start items-center;
}
</style>
