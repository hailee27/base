/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
} from "@mui/material";

interface SelectedSingle {
  label?: string;
  data?: any;
  listSelect: any;
  onchangeValue?: any | null;
}

const SelectSingleForm = ({
  data,
  listSelect,
  label,
  onchangeValue,
}: SelectedSingle) => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value?.split(",") : value
    );

    //callbackSelectSingle
    onchangeValue(value);
  };

  //check xem trong selected đã có data chưa!!!
  useEffect(() => {
    const res = listSelect.filter((select: any) => select.id === data);
    data && setSelected(res[0]?.id);
  }, [data, listSelect]);
  return (
    <div>
      <FormControl sx={{ marginY: 1, width: 350 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
        >
          {listSelect?.map((select: any, index: number) => (
            <MenuItem key={index} value={select.id}>
              <ListItemText primary={select.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default React.memo(SelectSingleForm);
