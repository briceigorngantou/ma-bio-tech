import React, { useRef, useState, useContext } from "react";
import { Grid, Button, TextField, TextareaAutosize } from "@mui/material";

import AppContext from "../../config/AppContext";
const FormInput = () => {
  const name = useRef();
  const email = useRef();
  const [message, setmessage] = useState(null);
  const { setDataInput } = useContext(AppContext);

  const handleSubmit = () => {
    name.current.value && email.current.value && message
      ? setDataInput({
          name: name.current.value,
          email: email.current.value,
          message: message,
        })
      : alert("Merci de renseigner tous les champs svp");
  };

  return (
    <Grid p={2}>
      <Grid p={1}>
        <TextField id="name" inputRef={name} label="Nom" variant="outlined" />
      </Grid>
      <Grid p={1}>
        <TextField
          id="email"
          inputRef={email}
          label="Email"
          variant="outlined"
        />
      </Grid>
      <Grid p={1}>
        <TextareaAutosize
          minRows={5}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
          id="message"
          placeholder="Votre message svp..."
          variant="outlined"
        />
      </Grid>
      <Grid p={1}>
        <Button variant={"contained"} onClick={handleSubmit}>
          Envoyer
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormInput;
