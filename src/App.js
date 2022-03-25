import {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import "./App.css";
import {Box, Tabs, Tab} from "@mui/material";
import Form from "./components/Form";
import Table from "./components/Table";

function App(){
  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return(
    <>

    <Box sx={{ width: '100%' , background:"#ffffff",boxShadow:"0px 2px 2px #00000029", borderRadius:"5px"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab sx={{width: "250px"}} value="one" label="Form" />
        <Tab sx={{width: "250px"}}value="two" label="Table" />
      </Tabs>
    </Box>

    { value==="one"?<Form/>:<Table/>}

    </>
  )
}

export default App;
