import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { arrayWeekday } from '../../../constants/arrays';
// import Calendar from 'react-calendar';
// import Calendar from 'moedim';

const CalendarComponent = () => {
    const date = new Date();
    const monthNow = date.toLocaleString('ukr', { month: 'long' });
    // const [value, setValue] = useState(date);
    const [monthValue, setMonthValue] = useState(monthNow);
    const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1);
    const [yearValue, setYearValue] = useState(date.getFullYear());
    const [daysInCurrentMonth, setDaysInCurrentMonth] = useState();
    const [dayWeek, setDayWeek] = useState('');
    const [day, setDay] = useState([]);
    const [dayNow] = useState(date.getDate());
    const [monthNowBool, setMonthNowBool] = useState(true);
    // console.log(currentMonth, 'currentMonth');
    // console.log(monthValue, 'monthValue');
    const getDaysInMonth = (year, month) => {
        // console.log(month, 'month');
        return new Date(year, month, 0).getDate();
    }
    const getDayName = (dateStr, locale) => {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'short' });        
    }
    const getMonthName = (dateStr, locale) => {
        let date = new Date(dateStr);
        console.log(dateStr);
        return date.toLocaleDateString(locale, { month: 'long'});
    }
    const getArrayDay = (daysInCurrentMonth, days) => {
        for (let i=1; i < daysInCurrentMonth + 1; i++) {
            days.push(i); 
        }
        return days; 
    }
    let locale = 'ukr';
    let dateStr = `${currentMonth}/01/${yearValue}`;
    const previousMonth = () => {
        setCurrentMonth(currentMonth - 1); 
        console.log(dateStr, 'dateStr');
        setMonthValue(getMonthName(dateStr, locale)); 
        setDaysInCurrentMonth(getDaysInMonth(yearValue, currentMonth));
    }
    const nextMonth = () => {
        setCurrentMonth(currentMonth + 1); 
        console.log(dateStr, 'dateStr next month');
        setMonthValue(getMonthName(dateStr, locale)); 
        setDaysInCurrentMonth(getDaysInMonth(yearValue, currentMonth));
    }    
    useEffect(() => {
        if (dayWeek !== '') {
            let days = [];
            if (dayWeek === 'пн') {
                setDay(getArrayDay(daysInCurrentMonth, days));
            }
            if (dayWeek === 'вт') {
                days = ['',];
                setDay(getArrayDay(daysInCurrentMonth, days));
            } 
            if (dayWeek === 'ср') {
                days = ['', '',];
                setDay(getArrayDay(daysInCurrentMonth, days));
            }
            if (dayWeek === 'чт') {
                days = ['', '', '',];
                setDay(getArrayDay(daysInCurrentMonth, days));
            }
            if (dayWeek === 'пт') {
                days = ['', '', '', '',];
                setDay(getArrayDay(daysInCurrentMonth, days));
            }
            if (dayWeek === 'сб') {
                days = ['', '', '', '', ''];
                setDay(getArrayDay(daysInCurrentMonth, days)); 
            }
            if (dayWeek === 'нд') {
                days = ['', '', '', '', '', '',]; 
                setDay(getArrayDay(daysInCurrentMonth, days));
            }            
        }
        if (monthValue !== monthNow) {
            setMonthNowBool(false);
        }
        if (currentMonth === -1) {
            setCurrentMonth(12);
            setYearValue(yearValue - 1);
        }
        if (currentMonth === 13) {
            setCurrentMonth(0);
            setYearValue(yearValue + 1);
        }
        setDaysInCurrentMonth(getDaysInMonth(yearValue, currentMonth));
        setDayWeek(getDayName(dateStr, locale));
        // setMonthValue(getMonthName(dateStr, locale));
    }, [
        currentMonth, monthValue, daysInCurrentMonth, dayWeek, dayNow, dateStr, locale, 
        yearValue, monthNowBool, monthNow,
    ]);
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
                    {monthValue} {yearValue}
                </span>
                <button 
                    className="calendarComponent_button"
                    onClick={nextMonth}
                    >
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
                        day && day.map((c, index) => 
                            <li 
                                key={index}
                                className={
                                    monthNowBool && (dayNow === c) 
                                        ? "calendarComponent_li_days_now" 
                                        : "calendarComponent_li_days"
                                }
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