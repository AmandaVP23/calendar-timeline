import React, { Component } from 'react';

interface OwnProps {}

interface OwnState {}

const initialState: OwnState = {
}

class Header extends Component<OwnProps, OwnState> {
    state = initialState;

    render() {
        return (
            <div />
        );
    }
}

export default Header;