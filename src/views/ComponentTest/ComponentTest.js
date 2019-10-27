import React, { Component } from 'react';
import MaskedInput from '../../components/MaskedInput/MaskedInput';


export default class ComponentTest extends Component {
    constructor(props){
        super(props);

        this.state = {
            testField: ""
        }
    }

    handleChange = (value) => {
        this.setState({
            testField: value
        });
    }

    render() {
        return (
            <div>
                <MaskedInput
                    mask='(###)###-####'
                    value={this.state.testField}
                    onFieldChange={this.handleChange}
                />
                <div className="form-control">
                    {this.state.testField}
                </div>
            </div>
        )
    }
}
