import {createContext, useState, useEffect} from "react";

//Creates context
export const ThemeContext = createContext();

//Theme provider
export const ThemeProvider = ({children}) => {
    //Get theme from localStorage or the system preference
    const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const [theme, setTheme] = useState(storedTheme);

    //Apply theme to document body
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme",theme);
    }, [theme]);

    //Toggle the theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

};

