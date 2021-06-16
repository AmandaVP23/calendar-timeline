import React, { Component } from 'react';

interface OwnProps {}

interface OwnState {
    days: Array<Date>;
    months: Array<Date>;
}

const initialState: OwnState = {
    days: [],
    months: [],
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

// calculate months
const minDateMonth = new Date(2021, 1, 10);
const maxDateMonth = new Date(2021, 7, 10);
const minDay = 1;
const maxDay = 10;
// todo -> se for pra mostrar o mes inteiro tem que verificar se mes tem 30 ou 31 dias

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
    }

    calculateDays = () => {
        const months: Array<Date> = [];
        let incrementedDate = new Date(minDateMonth);

        while (incrementedDate < maxDateMonth) {
            months.push(new Date(incrementedDate));
            incrementedDate.setMonth(incrementedDate.getMonth() + 1);
        }

        this.setState({
            months,
        });

        console.log(months);
    }

    calculateIntervalTypeHour = () => {
        const days: Array<Date> = [];
        let incrementedDate = new Date(minDate);

        while (incrementedDate < maxDate) {
            days.push(new Date(incrementedDate));
            incrementedDate.setDate(incrementedDate.getDate() + 1);
        }

        console.log(days);

        this.setState({
            days,
        });
    }

    renderMonths = () => {
        const { months } = this.state;

        const mainItemWidth = `${(maxDay - minDay + 1) * 100}px`;
        const daysArray = Array.from({ length: (maxDay - minDay) +1}, (v, i) => minDay + i);

        return Object.keys(months).map(k => {
            const month = months[Number(k)];

            return (
                <div
                    className="ct-header__col"
                    style={{
                        width: mainItemWidth,
                    }}
                    key={`${month.getMonth() + 1}/${month.getFullYear()}`}
                >
                    <div>
                        {`${month.getMonth() + 1}/${month.getFullYear()}`}
                    </div>
                    <div className="ct-header__col__bottom">
                        {Object.keys(daysArray).map(k => {
                            const day = daysArray[Number(k)];
                            return (
                                <div className="ct-header__col__bottom__item" key={`${day}-${month.getMonth() + 1}`}>
                                    {day}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        })
    }

    renderDays = () => {
        const { days } = this.state;

        const mainItemWidth = `${(maxHour - minHour + 1) * 100}px`;
        const hoursArray = Array.from({ length: (maxHour - minHour) + 1}, (v, i) => minHour + i);

        return Object.keys(days).map(k => {
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
                                    <div className="ct-header__col__bottom__item" key={`${hour}-${day.getDate()}`}>
                                        {hour}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
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
        return (
            <div className="ct-header">
                {/*{this.renderDays()}*/}
                {this.renderMonths()}
            </div>
        );
    }
}

export default Header;
