import React from 'react';

import './color-panel.component.scss' 



class Color extends React.Component {

    constructor(colors){
        super(colors);
        this.state = {
            colors: this.props.colors
        }
    }

    render(){
        return(
                <div className='colorPanel'>
                {
                    this.state.colors.map((color) => 
                    <div className='colorRadius' style={{backgroundColor: color}}></div>)
                }
                </div>
        )

    }
}

export default Color;