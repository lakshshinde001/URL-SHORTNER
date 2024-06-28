import { createContext, useContext, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { getCurrentUser } from "./db/apiAuth";

const urlContext = createContext();

const UrlProvider = ({children}) => {

    const {data:user, loading, fn:fetchUser} = useFetch(getCurrentUser);

    const isAuthenticated = user?.role !== "authenticated";
    
    useEffect(() => {
        fetchUser();
    },[])


    return <urlContext.Provider value={{user, fetchUser, loading, isAuthenticated}}>
        {children}  
    </urlContext.Provider>
}

export const urlState = () => {
    return useContext(urlContext)
}

export default UrlProvider;