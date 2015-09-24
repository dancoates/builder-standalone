import React from 'react';


export default class App extends React.Component {

    render() {
        console.log(this.props);
        console.log(__DEV__);
        return (<div>Hello World</div>);
    }
}