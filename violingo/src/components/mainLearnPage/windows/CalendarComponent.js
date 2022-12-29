import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { arrayWeekday } from '../../../constants/arrays';
// import Calendar from 'react-calendar';
// import Calendar from 'moedim';

const CalendarComponent = () => {
    const date = new Date();
    const monthNow = date.toLocaleString('ukr', { month: 'long' });
    const [value, setValue] = useState(date);
    const [monthValue, setMonthValue] = useState(monthNow);
    const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1);
    
    const getDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    }
    const previousMonth = () => {
        setCurrentMonth((date.getMonth() + 1) - 1);
        // setMonthValue(date.setMonth(currentMonth).toLocaleString('ukr', { month: 'long' }));
    }
    const currentYear = date.getFullYear();
    const month = date.setMonth(date.getDate() + 1);
    console.log(currentYear, 'currentYear');
    // const currentMonth = date.getMonth() + 1;
    console.log(currentMonth, 'currentMonth');
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
    console.log(daysInCurrentMonth);
    // const month = date.toLocaleString('ukr', { month: 'long' });
    console.log(month);
    // const weekday = date.toLocaleDateString('ukr', { weekday: 'short' });
    // console.log(weekday);
    const day = [];
    for (let i=1; i < daysInCurrentMonth + 1; i++) {
        day.push(i);
    }
    // console.log(day);
    // var prvDateMonth = new Date(date.getFullYear(),date.getMonth()-1,date.getMonth());
    // console.log(prvDateMonth.toLocaleString('ukr', { month: 'long' }));
    // console.log(previousMonth);
    return (
        <div>
            <div className="calendarComponent_div_month_buttons">
                <button 
                    className="calendarComponent_button"
                    onClick={previousMonth}
                    >
                    <IoIosArrowBack color='#afafaf'/>
                </button>
                <span className="calendarComponent_title_month_year">
                    {monthValue} {currentYear}
                </span>
                <button className="calendarComponent_button">
                    <IoIosArrowForward color='#afafaf'/>
                </button>
                <ul className="calendarComponent_ul_weekdays">
                    {
                        arrayWeekday.map(c => 
                            <li 
                                key={c.id}
                                className="calendarComponent_li_weekdays"
                                >
                                {c.name}
                            </li>
                        )
                    }                   
                </ul>
                <ul className="calendarComponent_ul_days">
                    {
                        day.map((c, index) => 
                            <li 
                                key={index}
                                className="calendarComponent_li_days"
                                >
                                    {c}
                            </li>
                        )
                    }
                </ul>
                {/* <Calendar 
                    onChange={setValue} 
                    value={value} 
                    locale={'us'} 
                /> */}
                {/* <Calendar value={value} onChange={(d) => setValue(d)} locale={'ukr'}/> */}
            </div>
        </div>
    );
};

export default CalendarComponent;