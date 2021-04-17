import { MenuItem, Select } from "@material-ui/core";
import React from "react";

interface EditableItemProps {
  value: number | undefined;
  onValueChanged: (value: number | undefined) => void;
}

export const EditableItem = ({ value, onValueChanged }: EditableItemProps) => {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const v = event.target.value as number;
    if (v) {
      onValueChanged(v);
    } else {
      onValueChanged(undefined);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Select
      labelId="val"
      id="value"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      value={value}
      onChange={handleChange}
      variant="outlined"
      renderValue={(v) => {
        return (
          <div
            style={{
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            {value}
          </div>
        );
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={6}>6</MenuItem>
      <MenuItem value={7}>7</MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={9}>9</MenuItem>
    </Select>
  );
};
