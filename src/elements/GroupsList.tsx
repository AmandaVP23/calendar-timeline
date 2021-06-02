import React, { Component } from 'react';

interface OwnProps {}

interface OwnState {}

const initialState: OwnState = {
}

class GroupsList extends Component<OwnProps, OwnState> {
    state = initialState;

    render() {
        return (
            <div className="ct-groups-list">
            </div>
        );
    }
}

export default GroupsList;
