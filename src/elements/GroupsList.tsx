import React, { Component } from 'react';
import {Group} from "../types";

interface OwnProps {
    groups: Array<Group>;
}

interface OwnState {}

const initialState: OwnState = {
}

class GroupsList extends Component<OwnProps, OwnState> {
    state = initialState;

    render() {
        const { groups } = this.props;

        return (
            <div className="ct-groups-list">
                {Object.keys(groups).map(k => {
                    const group = groups[Number(k)];
                    return (
                        <div className="ct-groups-list__item">
                            {group.name}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default GroupsList;
