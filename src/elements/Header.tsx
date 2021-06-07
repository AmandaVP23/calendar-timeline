import React, { Component } from 'react';

interface OwnProps {}

interface OwnState {
    days: Array<Date>;
}

const initialState: OwnState = {
    days: [],
}


// year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number
const minDate = new Date(2021, 6, 7);
const maxDate = new Date(2021, 6, 10);
const minHour = 9;
const maxHour = 18;

class Header extends Component<OwnProps, OwnState> {
    state = initialState;

    componentDidMount() {
        this.calculateDays();
    }

    calculateDays = () => {
        const days: Array<Date> = [];
        let incrementedDate = new Date(minDate);

        while (incrementedDate < maxDate) {
            console.log(incrementedDate);
            days.push(new Date(incrementedDate));
            incrementedDate.setDate(incrementedDate.getDate() + 1);
        }

        console.log(days);
        this.setState({
            days,
        })
    }

    /**
     * assumindo agora que mostra por outras, depois vai ter intervalo - segundos, minutos, horas, dias, ...
     */
    render() {
        const { days } = this.state;
        const mainItemWidth = `${(maxHour - minHour) * 100}px`;
        const hoursQuantity = maxHour - minHour;
        const hoursArray = Array.from(Array(hoursQuantity).keys());
        console.log(hoursArray);

        return (
            <div className="ct-header">
                <div className="ct-header__main">
                    {Object.keys(days).map(k => {
                        const day = days[Number(k)];

                        return (
                            <div
                                className="ct-header__main__item"
                                style={{
                                    width: mainItemWidth,
                                }}
                            >
                                {`${day.getDate()}/${day.getMonth() + 1}`}
                            </div>
                        )
                    })}
                </div>
                <div className="ct-header__sub">
                    sub
                </div>
            </div>
        );
    }
}

export default Header;
