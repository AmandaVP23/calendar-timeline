import React from 'react';
import GroupsList from "./elements/GroupsList";
import Header from "./elements/Header";
import {Group} from "./types";

const groups: Array<Group> = [{
    id: 'group_1',
    name: 'Group 1',
}, {
    id: 'group_2',
    name: 'Group 2',
}, {
    id: 'group_3',
    name: 'Group 3',
}]

function App() {
    return (
        <div className="calendar-timeline">
            <Header />
            <div className="ct-content">
                <GroupsList groups={groups} />
                <div className="ct-scroll">
                    aqui
                </div>
            </div>
        </div>
    );
}

export default App;
