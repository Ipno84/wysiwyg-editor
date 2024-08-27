import type { ITreeState } from "@/core/state/tree/typings";

const getAvailableComponents = (state: ITreeState) => state.availableComponents;

export { getAvailableComponents };
