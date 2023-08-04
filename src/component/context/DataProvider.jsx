import React, {useState } from 'react';
import { createContext } from 'react';

const DataContext= createContext('');


const DataProvider = ({children}) => {

const[Html,SetHtml]=useState('');
const[Css,SetCss]=useState('');
const[Js,SetJs]=useState('');

  return (
    <DataContext.Provider value={
      {
        //state expoirt
        Html,SetHtml,
        Css,SetCss,
        Js,SetJs,
      }
    }
    >{children}
    </DataContext.Provider>
  )
}

export default DataProvider;
