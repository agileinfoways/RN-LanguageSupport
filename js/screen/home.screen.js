import React from 'react';

import HomeComponent from '../component/home.component';


export default class Selection extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <HomeComponent {...this.props} />
        )
    }

}