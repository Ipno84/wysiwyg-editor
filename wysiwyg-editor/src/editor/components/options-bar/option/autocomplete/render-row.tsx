import ListSubheader from "@mui/material/ListSubheader/ListSubheader";
import Typography from "@mui/material/Typography/Typography";
import { ListChildComponentProps } from "react-window";

import { LISTBOX_PADDING } from "@/editor/components/options-bar/option/autocomplete/constants";

const renderRow = (props: ListChildComponentProps) => {
  const { data, index, style } = props;
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };

  if (data.hasOwnProperty("group")) {
    return (
      <ListSubheader key={data.key} component="div" style={inlineStyle}>
        {data.group}
      </ListSubheader>
    );
  }

  const item = data[index];

  if (item?.key === undefined) return null;

  const { key, ...optionProps } = item;
  console.log(item);

  return (
    <Typography
      key={key}
      component="div"
      {...optionProps}
      noWrap
      style={inlineStyle}
    >
      {item}
    </Typography>
  );
};

export { renderRow };
