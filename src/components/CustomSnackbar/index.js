import React, {Component} from 'react';

import {Snackbar} from '@material-ui/core';

export default class CustomSnackbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
            return (
                <div>
                    <Snackbar
                        anchorOrigin={{ 'vertical':'top', 'horizontal': 'right' }}
                        open={this.props.open}
                        onClose={this.props.onClose}
                        autoHideDuration={2000}
                        message={this.props.message}
                    />
                </div>
            )
    }


}


