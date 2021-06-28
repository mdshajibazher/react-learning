import React from 'react';
class Button extends React.Component{
    
    render(){
        const {change_locale,locale,show,enable} = this.props;
        if(!enable) return null;
        return (
            <div>
                <button onClick={() => change_locale(locale)} type="button">Click</button> 
               {show && <p>Hello</p>} 
            </div>
        )
    }
}

export default Button;