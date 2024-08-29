import type { IEditorState } from "@/editor/state/editor/typings";

const getAuthorableProps = (state: IEditorState) => state.authorableProps;

export { getAuthorableProps };
