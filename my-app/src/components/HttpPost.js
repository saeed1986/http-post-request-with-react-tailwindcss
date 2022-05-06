import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default function HttpPost() {
  const [userName, createUser] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const post = { userName: userName };
    try {
      const res = await axios.post("http://localhost:3001/posts", post);
      console.log(res.data);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="container mt-2">
      <form onSubmit={onSubmit}>
        <div className="mb-2 mt-3">
          <TextField
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={(event) => {
              createUser(event.target.value);
            }}
            value={userName}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            multiline
            rows={8}
          />
        </div>
        <Button type="submit" className="btn btn-danger" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
