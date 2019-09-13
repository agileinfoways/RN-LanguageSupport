import React from 'react';

import SelectionComponent from '../component/selection.component';


export default class Selection extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SelectionComponent {...this.props} />
        )
    }

}