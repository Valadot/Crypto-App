import {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from "./BackToTopButton.styles";

const BackToTopButton = () => {

    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 900){
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
            onClick={scrollUp}><FontAwesomeIcon size="xl" icon={faArrowUp} style={{color: "#ffffff",}} /></Button>}
            
        </div>
    )

}

export default BackToTopButton