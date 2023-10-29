import {useEffect, useState} from "react";
import { Button } from "./BackToTopButton.styles";

const BackToTopButton = () => {

    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 600){
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <div>
            {backToTopButton && <Button 
            onClick={scrollUp}>Back to top!</Button>}
            
        </div>
    )

}

export default BackToTopButton