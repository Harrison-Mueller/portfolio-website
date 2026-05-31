import { createContext, useState, useContext, type ReactNode } from "react";


interface ProviderProps {
    siteScroll: number;
    setSiteScroll: (siteScroll: number) => void;
}

interface Prov {
    children?: ReactNode
}

const UserContext = createContext<ProviderProps | undefined>(undefined);

function Provider({children} : Prov) {
    const [siteScroll, setSiteScroll] = useState<number>(0);

    return(
        <UserContext.Provider value={{ siteScroll, setSiteScroll}}>
            {children}
        </UserContext.Provider>
    )
}

export default Provider;