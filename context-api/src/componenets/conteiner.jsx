import Button from './Button';

import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

function Container(){
    const {theme}= useContext(ThemeContext);
    return(
<div className={`app ${theme ==="dark" ? theme:""}`}>
    <Button/>
</div>

    );

   
}
export default Container;