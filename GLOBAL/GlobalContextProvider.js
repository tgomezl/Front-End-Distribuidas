import React, { useState } from 'react'

//CREO EL CONTEXTO
const MyContext = React.createContext('defaultValue');



const GlobalContextProvider = ({children}) => {
  
    //estos valores y sus funciones van a ser accesibles desde cualquier componente
    const[idusercontexto,setIdusercontexto]=useState(101);
    const[idrecetacontexto,setIdrecetacontexto]=useState(102);
    const [nombreusuariocontexto,setNombreusuariocontexto]=useState('juan');
    
    
    return (
    <MyContext.Provider value={{
        idusercontexto,setIdusercontexto,
        idrecetacontexto,setIdrecetacontexto,
        nombreusuariocontexto,setNombreusuariocontexto
    }}>
        {children}
    </MyContext.Provider>    
    
  )
}

export {GlobalContextProvider,MyContext}
