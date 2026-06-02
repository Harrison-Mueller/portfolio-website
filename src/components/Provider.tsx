import { createContext, useState, useContext, useEffect, type ReactNode, useRef } from "react";

interface ProviderProps {
    scrollToSection: (section:number) => void;
}

interface Prov {
    children?: ReactNode
}

const UserContext = createContext<ProviderProps | undefined>(undefined);



function Provider({children} : Prov) {
    // const [ currentSection, setCurrentSection ] = useState(0);
    const currentSection = useRef(10);
    // const [ lastScroll, setLastScroll ] = useState(10);
    const lastScroll = useRef(10);
    const scrollEnabled = useRef(true);
    const sections = ["home", "about", "projects", "contact"];

    useEffect(() => {
        currentSection.current = 0;
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
        window.addEventListener('wheel', watchScroll, { passive: false });
        window.addEventListener('touchmove', watchScroll, { passive: false });
        window.addEventListener('keydown', watchScroll, { passive: false });
    }, []);

    useEffect(() => {
        console.log("window change!");
    }, [currentSection.current]);

    const scrollToSection = (section: number) => {
        if(section >= sections.length || section < 0) {
            return;
        }
        const currentSectionElement = document.getElementById(sections[section] + "-page-section");
        if(!currentSectionElement) {
            return;
        }
        window.scrollTo({
            top: currentSectionElement.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
        });
        scrollEnabled.current = false;
        setTimeout(() => {
            scrollEnabled.current = true;
        }, 200);
        currentSection.current = section;
    };  

    const watchScroll = (e: WheelEvent | TouchEvent | KeyboardEvent) => {
        if(!scrollEnabled.current) {
            e.preventDefault();
            return;
        }

        const currentSectionElement = document.getElementById(sections[currentSection.current] + "-page-section");
        if(!currentSectionElement) {
            return;
        }
        if(window.scrollY > lastScroll.current) {
            if(currentSectionElement.getBoundingClientRect().bottom <= window.innerHeight * 0.8) {
                scrollToSection(currentSection.current + 1);
                e.preventDefault();
            }
        }
        if(window.scrollY < lastScroll.current) {
            if (currentSectionElement.getBoundingClientRect().top >= window.innerHeight * 0.2) {
                scrollToSection(currentSection.current - 1);
                e.preventDefault();
            }
        }
        lastScroll.current = window.scrollY;
    }


    return(
        <UserContext.Provider value={{ scrollToSection }}>
            {children}
        </UserContext.Provider> 
    )
}

export const context = () => {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error("UserContext is undefined");
    }
    return context;
};

export default Provider;