import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";

function Button (){
    const {theme, setTheme}= useContext(ThemeContext);

    
return <div>
    Active theme: {theme}
    <br />
    <button onClick={()=> setTheme (theme==='light'? 'dark': 'light')}>Change theme</button>
</div>
}

export default Button;