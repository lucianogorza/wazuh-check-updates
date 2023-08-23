import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface WazuhCheckUpdatesPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WazuhCheckUpdatesPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
