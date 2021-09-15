import { Store } from "vuex"
import NavigationModule from "./navigationModule"

export function createStore() {
    return new Store({
        modules: {
            NavigationModule,
        }
    })
}