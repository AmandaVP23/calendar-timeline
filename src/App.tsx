import React from 'react';
import GroupsList from "./elements/GroupsList";
import Header from "./elements/Header";

function App() {
    return (
        <div className="calendar-timeline">
            <GroupsList />
            <div className="calendar-timeline__content">
                <Header />
            </div>
        </div>
    );
}

export default App;
