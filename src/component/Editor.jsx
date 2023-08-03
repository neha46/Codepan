import React from 'react';
import {Box,styled}from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Controlled as ControlledEditor} from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';



const Heading=styled(Box)
(
  {
background:"#3a3a3a",
paddingTop:5,
paddingBottom:12,
paddingLeft:5,
display:'flex',
paddingRight:6,
placeContent:"center",
  }
)

const Header=styled(Box)
({
  display:'flex',
  background: '#060606',
  color:"white",
padding:5,
fontWeight:700,
justifyContent:'space-between',
})

const Editor = () => {
  return (
    <>
    <Box>
      <Header> 
            <Heading>
              <Box 
              component='span'
              style={{background:"red",
              height:20,
              width:20,
              display:"flex",
          paddingBottom:4 , 
          borderRadius:5,
          marginRight:5,
         placeContent: 'center', }}>/ </Box>Html
          </Heading>
          <ArrowDropDownIcon/>
        </Header>
        <ControlledEditor/>
    </Box>
    </>
  );
}

export default Editor;
