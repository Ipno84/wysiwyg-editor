import type { INavigationState } from "@/editor/state/navigation/typings";

const getSecondaryCommandsLinks = (state: INavigationState) =>
  state.secondaryCommandsLinks;

export { getSecondaryCommandsLinks };
