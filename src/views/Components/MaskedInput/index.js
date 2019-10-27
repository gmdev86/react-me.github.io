import React, { Component } from 'react'
import MaskedInput from '../../../components/MaskedInput/MaskedInput';

export default class index extends Component {
    constructor(props){
        super(props);

        this.state = {
            displayField: ""
        }
    }

    handleChange = (value) => {
        this.setState({
            displayField: value
        });
    }

    render() {
        return (
          <div>
            <div className="row">
              <div className="col-md-6">
                <label>Masked Input (###)###-####</label>
                <MaskedInput
                  mask="(###)###-####"
                  value={this.state.displayField}
                  onFieldChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-control">{this.state.displayField}</div>
              </div>
            </div>
          </div>
        );
    }
}
