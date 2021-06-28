import React from 'react';
import Button from './Button';
class Clock extends React.Component{
    state = {date:  new Date(), locale: 'bn-BD'}

    componentDidMount(){
        setInterval(() => {
           this.tick();
        }, 1000);
    }
    tick(){
        this.setState({date:  new Date()});
    }
    handleClick = (arg1) => {
      this.setState({locale:  arg1});
    }
    render(){
      const {date, locale} = this.state;

      return (
        <div>
          <h5>{date.toLocaleTimeString(locale)}</h5>
        
           { locale==='bn-BD' ? (<Button change_locale={this.handleClick} locale={'en-US'} show={false} enable/>) : (<Button change_locale={this.handleClick} locale={'bn-BD'} show enable={false}/>) }
           
        </div>
      );
    }
  }

  export default Clock;