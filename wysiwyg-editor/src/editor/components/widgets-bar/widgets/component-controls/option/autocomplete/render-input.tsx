import { AutocompleteRenderInputParams } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';

const renderInput = (params: AutocompleteRenderInputParams) => <TextField {...params} label="Choose Icon" />;

export { renderInput };
