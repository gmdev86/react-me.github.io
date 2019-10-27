import React, { Component } from 'react'

export default class MaskedInput extends Component {
    constructor(props){
        super(props);

        let newArr = props.mask.split('');
        let newLen = newArr.filter((v) => (v === '#')).length;

        this.state = {
            maxLength: newLen
        }

        this.checkOverflow = this.checkOverflow.bind(this);
    }

    handleChange = (event) => {
        const { value } = event.target;
        let cleanValue = value.replace(/[^\d]/g, '');
        cleanValue = this.checkOverflow(cleanValue, this.state.maxLength);
        this.props.onFieldChange(cleanValue);
    }

    static format( value, mask ) {
        let i = 0;
        let lastReplacedIndex = -1;
        const filledMask = mask.replace(/#/g, (_, j) => {
            if(i >= value.length){
                return '#';
            }
            lastReplacedIndex = j;
            return value[i++];
        });

        return filledMask.substring(0, lastReplacedIndex + 1);
    }

    checkOverflow(value, maxLength){
        if(value.length >= maxLength){
            return value.substring(0, maxLength);
        } else {
            return value;
        }
    }

    render() {
        const { value, mask  } = this.props;
        return (
            <input 
                value={MaskedInput.format(value, mask)}    
                onChange={this.handleChange}
            />
        )
    }
}
