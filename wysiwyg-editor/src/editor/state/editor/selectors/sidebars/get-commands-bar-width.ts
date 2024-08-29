import { createSelector } from 'reselect';

import { isCommandsBarOpen } from '@/state/editor/selectors/is-commands-bar-open';

const getCommandsBarWidth = createSelector([isCommandsBarOpen], (commandsBarOpen) => (commandsBarOpen ? 200 : 50));

export { getCommandsBarWidth };
