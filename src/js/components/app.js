import React from 'react';
import { updateInfo } from 'actions';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        const val = e.target.value;
        const name = 'testInput';

        this.props.dispatch(updateInfo(name, val));
    }

    render() {
        return (
            <div>
                <label>Test labels</label><br/>
                <input type='text' value={this.props.testInput} onChange={this.handleChange} />

            </div>
        );
    }
}

export default connect(state => {
    return {
        testInput : state.updateInfo.testInput
    };
})(App);