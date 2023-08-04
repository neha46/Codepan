import React from 'react';
import Editor from './Editor';


const Code = () => {
  return (
   <>
   <div>

   </div>
<Editor heading={'html'} icon={"/"}/>
<Editor heading={'css'} icon={"*"}/>
<Editor heading={'javascript'} icon={"()"}/>
   </>

  );
}

export default Code;
