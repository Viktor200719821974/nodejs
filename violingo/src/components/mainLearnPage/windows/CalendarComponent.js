import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { arrayWeekday } from '../../../constants/arrays';

const CalendarComponent = () => {
    const date = new Date();
    const monthNow = date.toLocaleString('ukr', { month: 'long' });
    const yearNow = date.toLocaleString('ukr', { year: 'numeric'});
   
    const [monthValue, setMonthValue] = useState(monthNow);
    const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1);
    const [yearValue, setYearValue] = useState(date.getFullYear());
    const [daysInCurrentMonth, setDaysInCurrentMonth] = useState();
    const [dayWeek, setDayWeek] = useState('');
    const [day, setDay] = useState([]);
    const [dayNow] = useState(date.getDate());
    const [monthNowBool, setMonthNowBool] = useState(true);
    
    let location = 'ukr';
    let dateStr = `${currentMonth}/1/${yearValue}`;
    const getDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    }
    const getDayName = (dateString, location) => {
    let date = new Date(dateString);
    return date.toLocaleDateString(location, { weekday: 'short' });        
    }
    const getMonthName = (dateString, location) => {
        let date = new Date(dateString);
        return date.toLocaleDateString(location, { month: 'long'});
    }
    const getArrayDay = (daysInCurrentMonth, days) => {
        for (let i=1; i < daysInCurrentMonth + 1; i++) {
            days.push(i); 
        }
        return days; 
    }
    const dateNow = (currentMonth, yearValue, location) => {
        let dateStr = `${currentMonth}/1/${yearValue}`;
        if (currentMonth === 0) {
            setCurrentMonth(12);
            setYearValue(yearValue - 1);
            dateStr = `12/1/${yearValue - 1}`;
            setMonthValue(getMonthName(dateStr, location)); 
            setDaysInCurrentMonth(getDaysInMonth(yearValue - 1, 12));
        }
        if (currentMonth === 13) {
            setCurrentMonth(1);
            setYearValue(yearValue + 1);
            dateStr = `1/1/${yearValue + 1}`;
            setMonthValue(getMonthName(dateStr, location)); 
            setDaysInCurrentMonth(getDaysInMonth(yearValue + 1, 1));
        }else {
            setMonthValue(getMonthName(dateStr, location)); 
            setDaysInCurrentMonth(getDaysInMonth(yearValue, currentMonth));
        } 
    } 
    const previousMonth = () => {
        setCurrentMonth(currentMonth - 1); 
        dateNow(currentMonth - 1, yearValue, location);
    }
    const nextMonth = () => {
        setCurrentMonth(currentMonth + 1);
        dateNow(currentMonth + 1, yearValue, location); 
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
        if ((monthNow === monthValue) && (yearValue === Number(yearNow))) {
            setMonthNowBool(true);
        } 
        setDaysInCurrentMonth(getDaysInMonth(yearValue, currentMonth));
        setDayWeek(getDayName(dateStr, location));
    }, [
        currentMonth, monthValue, daysInCurrentMonth, dayWeek, dayNow, dateStr, location,
        yearValue, monthNowBool, monthNow, yearNow,
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
            </div>
        </div>
    );
};

export default CalendarComponent;