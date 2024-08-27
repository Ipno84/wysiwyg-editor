import type { INavigationState } from "@/editor/state/navigation/typings";

const getPrimaryCommandsLinks = (state: INavigationState) =>
  state.primaryCommandsLinks;

export { getPrimaryCommandsLinks };
