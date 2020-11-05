import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function FileSelector(props) {
  const handleChange = (event) => {
    props.setFileType(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Please Select the requested file type
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={props.fileType}
        onChange={handleChange}
      >
        <FormControlLabel
          value="RGBE_File"
          control={<Radio />}
          label="RGBE_File"
        />
        <FormControlLabel
          value="JPEG_File"
          control={<Radio />}
          label="JPEG_File"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default FileSelector;
