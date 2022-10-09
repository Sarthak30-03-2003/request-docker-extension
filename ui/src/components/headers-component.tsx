import { TextField, Box, Button } from "@mui/material";
import { useContextBody } from "../contexts/context-handler";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Headers = () => {
  const { inputHeaders, setInputHeaders } = useContextBody();
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [enteredHeaders, setEnteredheaders] = useState("");

  const createHeaders = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let headers = `{"${key}":"${value}"}`;
    setInputHeaders(JSON.parse(headers));

    console.log(typeof inputHeaders, typeof headers);
    setEnteredheaders(prev=>prev+"\n"+headers);
    setKey("");
    setValue("");


  };

  const clearEnteredHeaders = () => {
    setKey("");
    setValue("");
  };

  const changePrevHeaders = () => {
    // setEnteredheaders(prevState=>prevState+' yoyoyo')
    console.log('HIHIH');
  } 

  return (
    <div>
      <TextField
        label="JSON :"
        sx={{ width: 480 }}
        multiline
        variant="outlined"
        minRows={5}
        placeholder="{
            'key':'value',
          }"
        value={enteredHeaders}
        // onChange={changePrevHeaders}
      />
      <Box component="div" sx={{ display: "flex", flexDirection: "row", p: 2 }}>
        <TextField
          id="filled-basic"
          label="Key"
          variant="filled"
          name="key"
          onChange={(e) => setKey(e.target.value)}
          value={key}
        />
        <TextField
          id="filled-basic"
          label="val"
          variant="filled"
          name="val"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button>
          <DeleteIcon onClick={clearEnteredHeaders} />
        </Button>
      </Box>
      <Button onClick={createHeaders}>Add</Button>
    </div>
  );
};

export default Headers;
