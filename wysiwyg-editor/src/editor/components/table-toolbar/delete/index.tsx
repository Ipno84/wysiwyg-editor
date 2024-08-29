import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button/Button';
import Dialog from '@mui/material/Dialog/Dialog';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import IconButton from '@mui/material/IconButton/IconButton';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import React, { useCallback, useState } from 'react';

import type { TableToolbarProps } from '@/editor/components/table-toolbar/typings';

const TableDelete: React.FC<TableToolbarProps> = ({ deleteActive, onDelete, deleteTitle, deleteMessage }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const openDialog = useCallback(() => {
        setDialogOpen(true);
    }, []);

    const closeDialog = useCallback(() => {
        setDialogOpen(false);
    }, []);

    const confirm = useCallback(() => {
        onDelete?.();
        setDialogOpen(false);
    }, [onDelete]);

    return (
        <>
            <Tooltip title="Delete selected" placement="bottom">
                <span>
                    <IconButton color="inherit" aria-label="delete selected" onClick={openDialog} edge="start" disabled={!deleteActive}>
                        <DeleteIcon />
                    </IconButton>
                </span>
            </Tooltip>
            <Dialog open={dialogOpen} onClose={closeDialog} aria-labelledby="delete-dialog-title" aria-describedby="delete-dialog-description">
                <DialogTitle id="delete-dialog-title">{deleteTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-dialog-description">{deleteMessage}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="error">
                        Cancel
                    </Button>
                    <Button onClick={confirm} color="primary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export { TableDelete };
