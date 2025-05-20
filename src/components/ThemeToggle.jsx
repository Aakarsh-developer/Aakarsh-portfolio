import { useEffect, useState } from "react";
import {Moon, Sun}  from "lucide-react"


function ThemeToggle(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }else{
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }
    }, [] )

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return(
        <button onClick={toggleTheme} className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition duration-300 ease-in-out">
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-white"/>}
        </button>
    )
    
};

export default ThemeToggle;



