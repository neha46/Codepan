import React from 'react';
import {Box,styled}from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import PropTypes from 'prop-types';
import { useState } from 'react';


const Container=styled(Box)(
  {
    flexGrow:1,
    flexBasis:0,
    display:"flex",
    flexDirection:'column',
    padding:"0 8px 8px",
  }
)


const Heading=styled(Box)
(
  {
background:"#2b2828",
paddingTop:4,
paddingBottom:8,
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
fontWeight:700,
justifyContent:'space-between',
})

const Editor = ({heading,icon,color, value, onChange}) =>
 {
  console.log(value);
  const [open,setOpen]=useState(true)
  const handleChange=(editor,data,value)=>{
onChange(value);
  }

  return (
    <>
    <Container style={open?null:{flexGrow:0}}>
      <Header> 
            <Heading>
              <Box 
              component='span'
              style={{background:color,
              height:20,
              width:20,
              display:"flex",
          paddingBottom:2 , 
          borderRadius:5,
          marginRight:5,
         placeContent: 'center', }}>/</Box>{heading}
          </Heading>
          <ArrowDropDownIcon   fontSize='small' style={{alignSelf:'center' }}
          onClick={()=>setOpen(prevState=> !prevState)}/>
        </Header>
      


       <ControlledEditor  
       className='controlled-editor'
        value={value}  
       onBeforeChange={handleChange}
        options={{
        theme:"material",
        lineNumbers:true,
  
       }}/>
    </Container>
    </>
  );
}
Editor.propTypes = {
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};


export default Editor;
