import React from 'react';
import Editor from './Editor';
import { Box,styled } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from './context/DataProvider';

const Container=styled(Box)(
  {
    display:"flex",
    background:"#000",
    height:'50vh',
  }
)


const Code = () => {  
  
  const {html,setHtml,
    css,setCss,
    js,setJs,}=useContext(DataContext);
   


  return (
   <>
 <Container>

<Editor heading='html' icon="/" color="#ff3c41" 
value={html} onChange={setHtml}/>

<Editor heading='css' icon= "*" color="blue"
 value={css} onChange={setCss}/>

<Editor heading='javascript' icon="()" color="yellow"
 value={js} onChange={setJs}/>
 </Container>
   </>

  );
}

export default Code;
