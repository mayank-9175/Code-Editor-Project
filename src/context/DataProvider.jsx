import {createContext,useState} from "react"
const dataContext = createContext(null);

const DataProvider = ({children}) => {
    const[html,setHtml] = useState('');
    const[css,setCss] = useState('');
    const[js,setJs] = useState('');
    return(
        <dataContext.Provider value={{html,setHtml,css,setCss,js,setJs}}>
             {children}
        </dataContext.Provider>
    )
}
export default DataProvider;
export {dataContext};