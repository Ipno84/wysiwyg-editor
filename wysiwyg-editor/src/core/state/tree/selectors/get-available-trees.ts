import type { ITreeState } from "@/core/state/tree/typings";

const getAvailableTrees = (state: ITreeState) => state.availableTrees;

export { getAvailableTrees };
