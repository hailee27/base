import React, { useEffect, useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Checkbox,
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Chip,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name: string, listSelect: readonly string[], theme: Theme) {
  return {
    fontWeight:
      listSelect?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface SelectedMulti {
  label?: string;
  data?: any;
  listSelect: string[];
  onchangeValue?: any;
  deleteChip?: any;
}
const SelectMultiForm = ({
  data,
  listSelect,
  label,
  onchangeValue,
  deleteChip,
}: SelectedMulti) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value?.split(",") : value
    );
    //callbackSelectMulti
    onchangeValue(value);
  };

  //check xem trong selected đã có data chưa!!!
  useEffect(() => {
    const names = listSelect?.filter((value: string) => {
      return data?.includes(value);
    });
    setSelected(names);
  }, [data, listSelect, setSelected]);

  const handleDelete = (data: any) => {
    setSelected((chips) => chips.filter((chip) => chip !== data));
    deleteChip(data);
  };
  return (
    <div>
      <FormControl sx={{ marginY: 1, width: 350 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected?.map((value: any, index: number) => (
                <Chip
                  variant="outlined"
                  color="info"
                  key={index}
                  label={value.name}
                  clickable
                  deleteIcon={
                    <Cancel
                      color="error"
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                  onDelete={() => handleDelete(value)}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {listSelect?.map((select: any) => (
            <MenuItem
              key={select.id}
              value={select}
              style={getStyles(select, selected, theme)}
            >
              <Checkbox checked={selected.indexOf(select) > -1} />

              {select.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default React.memo(SelectMultiForm);
