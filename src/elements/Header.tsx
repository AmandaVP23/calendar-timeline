import React, { Component } from 'react';

interface OwnProps {}

interface OwnState {
    days: Array<Date>;
}

const initialState: OwnState = {
    days: [],
}

export enum IntervalType {
    HOUR = 'HOUR',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
}

// year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number
const minDate = new Date(2021, 6, 7);
const maxDate = new Date(2021, 6, 10);
const minHour = 9;
const maxHour = 18;

const interval: IntervalType = IntervalType.DAY; // hour | day | week | month;
// se interval = 'days' e não tem minHour e maxHour então vai ser o dia inteiro, se tiver minHour apenas então minHour até 23h, se apenas tiver maxHour então será de 00h até maxHour

/*
ter variavel min max que é do tipo date/moment, se IntervalType for hora então vai pegar a hora dessa variavel
 */


class Header extends Component<OwnProps, OwnState> {
    state = initialState;

    componentDidMount() {
        switch (interval) {
            case IntervalType.HOUR:
                this.calculateIntervalTypeHour();
                break;
            case IntervalType.DAY:
                this.calculateDays();
                break;
            case IntervalType.WEEK:
            case IntervalType.MONTH:
            default:
        }
        this.calculateDays();
    }

    calculateDays = () => {

    }

    calculateIntervalTypeHour = () => {
        const days: Array<Date> = [];
        let incrementedDate = new Date(minDate);

        while (incrementedDate < maxDate) {
            days.push(new Date(incrementedDate));
            incrementedDate.setDate(incrementedDate.getDate() + 1);
        }

        this.setState({
            days,
        })
    }

    /**
     * assumindo agora que mostra por outras, depois vai ter intervalo - segundos, minutos, horas, dias, ...
     */
    /*
    receber como props o intervalo de baixo (dias, mes, horas) -> se for dias, em cima será mês
    mas e se quiser em baixo por semanas? em cima mês? 8 -> 15 (março
    esconder top bar? para mostrar tudo em baixo? permitir override do mes
     */
    render() {
        const { days } = this.state;
        const mainItemWidth = `${(maxHour - minHour) * 100}px`;
        const hoursArray = Array.from({ length: (maxHour - minHour) + 1}, (v, i) => minHour + i);

        return (
            <div className="ct-header">
                {Object.keys(days).map(k => {
                    const day = days[Number(k)];

                    return (
                        <div
                            className="ct-header__col"
                            style={{
                                width: mainItemWidth,
                            }}
                            key={`${day.getDate()}/${day.getMonth() + 1}`}
                        >
                            <div>
                                {`${day.getDate()}/${day.getMonth() + 1}`}
                            </div>
                            <div className="ct-header__col__bottom">
                                {Object.keys(hoursArray).map(k => {
                                    const hour = hoursArray[Number(k)];
                                    return (
                                        <div className="ct-header__col__bottom__item">
                                            {hour}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Header;
