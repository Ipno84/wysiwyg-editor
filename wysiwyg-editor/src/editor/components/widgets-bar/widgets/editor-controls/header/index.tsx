import React from 'react';

import { WidgetHeader } from '@/editor/components/widgets-bar/widget/header';
import { WidgetNames } from '@/editor/state/editor/enums';

const EditorControlsWidgetHeader: React.FC = () => (
    <WidgetHeader title="Editor Controls" subheader="Simply change some editor settings" widgetName={WidgetNames.EDITOR_CONTROLS} />
);

export { EditorControlsWidgetHeader };
