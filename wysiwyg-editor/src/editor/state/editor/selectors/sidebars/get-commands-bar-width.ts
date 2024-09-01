import { createSelector } from 'reselect';

import { isCommandsBarOpen } from '@/editor/state/editor/selectors/sidebars/is-commands-bar-open';

const getCommandsBarWidth = createSelector([isCommandsBarOpen], (commandsBarOpen) => (commandsBarOpen ? 200 : 50));

export { getCommandsBarWidth };
