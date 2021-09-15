import { Module, VuexModule, VuexAction, VuexMutation} from "nuxt-property-decorator"

import { NavigationNames } from "~/types/Navigation"

@Module({
  name: "navigationModule",
  stateFactory: true,
  namespaced: true
})
export default class NavigationModule extends VuexModule {
  activeSection:NavigationNames = NavigationNames.HOME

  get currentSection() {
    return this.activeSection
  }

  get currentComponent() {
    if (this.activeSection === NavigationNames.HOME) {
        return "HomeDashboard"
    } else if (this.activeSection === NavigationNames.FEATURE_REQUEST) {
        return "FeatureRequestsDashboard"
    } else if (this.activeSection === NavigationNames.REQUEST_PAGE) {
        return "RequestPageDashboard"
    } else if (this.activeSection === NavigationNames.ACCOUNT) {
        return "AccountDashboard"
    }
  }

  @VuexAction({commit: "UPDATE_ACTIVE_SECTION"})
  changeActiveSection(section:NavigationNames){
    return section
  }

  @VuexMutation
  UPDATE_ACTIVE_SECTION(payload:NavigationNames){
    this.activeSection = payload
  }
}