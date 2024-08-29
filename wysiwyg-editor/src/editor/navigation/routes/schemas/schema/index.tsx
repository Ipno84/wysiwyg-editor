import Grid from '@mui/material/Grid/Grid';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Content } from '@/editor/components/content';
import { Main } from '@/editor/components/main';
import { Sidebar } from '@/editor/components/sidebar';
import { TreeFold } from '@/editor/components/tree-fold';
import { WidgetsBar } from '@/editor/components/widgets-bar';
import { useTitle } from '@/editor/hooks/use-title';
import { RouteParams } from '@/editor/navigation/typings';
import { useEditorStore } from '@/editor/state/editor';
import { getSchemaName } from '@/editor/state/editor/selectors/schemas/get-schema-name';
import { IEditorState } from '@/editor/state/editor/typings';

const Schema: React.FC = () => {
    const { schemaId } = useParams<RouteParams['schema']>();
    const schemaName = useEditorStore((state: IEditorState) => getSchemaName(state, schemaId));
    useTitle(schemaName);
    return (
        <Grid container sx={{ height: 'calc(100dvh - 64px)', overflow: 'hidden' }}>
            <Sidebar>
                <TreeFold />
            </Sidebar>
            <Main>
                <Content />
            </Main>
            <Sidebar width={400}>
                <WidgetsBar />
            </Sidebar>
        </Grid>
    );
};

export { Schema };
