import { createCachedSelector } from 're-reselect';

import type { WidgetNames } from '@/editor/state/editor/enums';
import type { IEditorState } from '@/editor/state/editor/typings';

import { getWidgetAsDialog } from '@/editor/state/editor/selectors/sidebars/get-widget-as-dialog';

const isWidgetAsDialog = createCachedSelector(
    [getWidgetAsDialog, (_: IEditorState, widgetName: WidgetNames) => widgetName],
    (widgetAsDialog, widgetName) => widgetAsDialog === widgetName,
)((_: IEditorState, widgetName: WidgetNames) => widgetName);

export { isWidgetAsDialog };
