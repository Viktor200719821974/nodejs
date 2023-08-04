import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { 
    LEARN_PAGE, REVIEW_PAGE, SHOP_PAGE, SCHOOLS_PAGE, SETTINGS_COACH, SETTINGS_SOUND, 
} from '../constants';
import NavBarComponent from '../components/mainLearnPage/NavBarComponent';
import HeaderComponent from '../components/mainLearnPage/HeaderComponent';
import LearnComponent from '../components/mainLearnPage/learnComponent/LearnComponent';
import ReviewComponent from '../components/mainLearnPage/ReviewComponent';
import ShopComponent from '../components/mainLearnPage/ShopComponent';
import SchoolsComponent from '../components/mainLearnPage/SchoolsComponent';
import MenuDownLinksComponent from '../components/MenuDownLinksComponent';
import { arrayMenuDownLinks, arrayPurposeSettingsCoachComponent } from '../constants/arrays';
import SettingsCoachComponent from '../components/mainLearnPage/SettingsCoachComponent';
import SettingsSoundComponent from '../components/mainLearnPage/SettingsSoundComponent';
import MainLearnBodyRightComponent from '../components/mainLearnPage/mainLearnPageBodyRight/MainLearnBodyRightComponent';
import arrow from '../icons/arrow-up-blue.svg';
import { getStatistic } from '../http/statisticApi';
import { getAgendaUser, updateAgendaUser } from '../http/agendaApi';
import { updateUserLessonId } from '../http/userApi';
import { fetchUser, isEndModuleActions, } from '../redux/actions';

const MainLearnPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userReducer);
    const { isEndModule } = useSelector(state => state.isEndModuleReducer);
    const { themes } = useSelector(state => state.arrayThemesReducer);
    const { lessons } = useSelector(state => state.arrayLessonsReducer);
    // console.log(location);
    const [everyDayTarget, setEveryDayTarget] = useState('');
    const [learnPage, setLearnPage] = useState(false);
    const [reviewPage, setReviewPage] = useState(false);
    const [shopPage, setShopPage] = useState(false);
    const [schoolPage, setSchoolPage] = useState(false);
    const [settingsCoach, setSettingsCoach] = useState(false);
    const [settingsSound, setSettingsSound] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [mouseOnFlag, setMouseOnFlag] = useState(false);
    const [mouseOnFire, setMouseOnFire] = useState(false);
    const [mouseOnRuby, setMouseOnRuby] = useState(false);
    const [mouseOnAvatar, setMouseOnAvatar] = useState(false);
    const [idElement, setIdElement] = useState(1);
    const [points, setPoints] = useState(0);
    const [choosePurposeDay, setChoosePurposeDay] = useState('');
    const [changeBodyRight, setChangeBodyRight] = useState(false);
    const [offSoundEffects, setOffSoundEffects] = useState(true);
    const [offExerciseToSpeak, setOffExerciseToSpeak] = useState(true);
    const [offExerciseToAudio, setOffExerciseToAudio] = useState(true);
    const [activeButton, setActiveButton] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollBool, setScrollBool] = useState(false);
    const [dayWeek, setDayWeek] = useState('');
    const [daysOfWeekArray, setDaysOfWeekArray] = useState(null);
    const [pointsOfDayArray, setPointsOfDayArray] = useState(null);
    const [dayUpdate, setDayUpdate] = useState('');
    const [arrayIndex, setArrayIndex] = useState([]);
    const [updateBool, setUpdateBool] = useState(false);
    const [dateUpdate, setDateUpdate] = useState(' ');
    const [show, setShow] = useState(false);
    const [topBlock, setTopBlock] = useState('-44');
    const [topTriangle, setTopTriangle] = useState('7');
    
    let daysOfWeekArrayConst = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
    const date = new Date();
    const locate = 'ukr';
    const index = daysOfWeekArray && daysOfWeekArray.indexOf(dayWeek);
    const maxNumberInArrayPoints = pointsOfDayArray && Math.max(...pointsOfDayArray);
    
    daysOfWeekArray && daysOfWeekArray.sort((a, b) => {
        const currentDayIndex = new Date().getDay();
        const adjustedIndexA = (daysOfWeekArrayConst.indexOf(a) - currentDayIndex + 7) % 7;
        const adjustedIndexB = (daysOfWeekArrayConst.indexOf(b) - currentDayIndex + 7) % 7;
        return adjustedIndexA - adjustedIndexB;
    });
    pointsOfDayArray && pointsOfDayArray.sort((a, b) => {
        const adjustedIndexA = (pointsOfDayArray.indexOf(a) - index - 1 + 7) % 7;
        const adjustedIndexB = (pointsOfDayArray.indexOf(b) - index - 1 + 7) % 7;
        return adjustedIndexA - adjustedIndexB;
    });
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    const idPurpose = everyDayTarget && arrayPurposeSettingsCoachComponent
            .filter(c => c.name === everyDayTarget)
            .map(c => c.id)[0];
    const getDayName = (date, location) => {
        const dayName = date.toLocaleDateString(location, { weekday: 'short' });
        let firstLetter = dayName.charAt(0);
        firstLetter = firstLetter.toUpperCase();
        const twoLetter = dayName.charAt(1);
        return firstLetter + twoLetter;        
    };
    const daysNotLearned = (dayUpdate, dayNow, arrayDayWeek, dateUpdate, dateNow) => {
        const subtractDates = Math.abs(dateNow - new Date(dateUpdate));
        const days = Math.floor(subtractDates / (24*60*60*1000));
        let array = [];
        if (days < 7) {
            const dayUpdateIndex = arrayDayWeek && arrayDayWeek.indexOf(dayUpdate);
            const dayNowIndex = arrayDayWeek && arrayDayWeek.indexOf(dayNow);
            const filterDaysArray = arrayDayWeek && arrayDayWeek
                .filter((c, index) => index > dayUpdateIndex && index < dayNowIndex);
            if (filterDaysArray) {
                for (let i = 0; i < filterDaysArray.length; i++) {
                    array.push(arrayDayWeek.indexOf(filterDaysArray[i]));
                }
            }
        } else {
            array = [0, 1, 2, 3, 4, 5, 6];
        }
        return array;
    };
    
    useEffect(() => {
        let action = true;
        if (action) {
            setDayWeek(getDayName(date, locate));
            if (dateUpdate !== ' '){
                if (new Date().getDate() !== new Date(dateUpdate).getDate()) {
                    setArrayIndex(daysNotLearned(dayUpdate, dayWeek, daysOfWeekArray, dateUpdate, date));
                    if (arrayIndex.length > 0) {
                        setUpdateBool(true);
                    } else {
                        setUpdateBool(false);
                    }
                }
            }
            if (location.pathname === LEARN_PAGE) {
                setLearnPage(true);
                setReviewPage(false);
                setSchoolPage(false);
                setShopPage(false);
                setIdElement(1);
                setSettingsCoach(false);
                setSettingsSound(false);
                setChangeBodyRight(false);
                setActiveButton(false);
            }
            if (location.pathname === REVIEW_PAGE) {
                setReviewPage(true);
                setLearnPage(false);
                setSchoolPage(false);
                setShopPage(false);
                setIdElement(2);
                setSettingsCoach(false);
                setSettingsSound(false);
                setChangeBodyRight(false);
                setActiveButton(false);
            }
            if (location.pathname === SHOP_PAGE) {
                setShopPage(true);
                setReviewPage(false);
                setLearnPage(false);
                setSchoolPage(false);
                setIdElement(3);
                setSettingsCoach(false);
                setSettingsSound(false);
                setChangeBodyRight(false);
                setActiveButton(false);
            } 
            if (location.pathname === SCHOOLS_PAGE) {
                setSchoolPage(true);
                setShopPage(false);
                setReviewPage(false);
                setLearnPage(false);
                setIdElement(4);
                setSettingsCoach(false);
                setSettingsSound(false);
                setChangeBodyRight(false);
                setActiveButton(false);
            }
            if (location.pathname === SETTINGS_COACH) {
                setSettingsCoach(true);
                setLearnPage(false);
                setReviewPage(false);
                setSchoolPage(false);
                setShopPage(false);
                setChangeBodyRight(true);
            }
            if (location.pathname === SETTINGS_SOUND) {
                setSettingsCoach(false);
                setSettingsSound(true);
                setLearnPage(false);
                setReviewPage(false);
                setSchoolPage(false);
                setShopPage(false);
                setChangeBodyRight(true);
            }
            if (idElement === idPurpose && offSoundEffects && offExerciseToSpeak && offExerciseToAudio) {
                setActiveButton(false);
            }
            if ((idElement > 10 && idElement !== idPurpose) || !offSoundEffects || !offExerciseToSpeak || !offExerciseToAudio) {
                setActiveButton(true);
            }
            if (mouseOnFlag || mouseOnFire || mouseOnRuby || mouseOnAvatar) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }
        return(() => {
            action = false;
        });
    // eslint-disable-next-line   
    }, [
        learnPage, shopPage, reviewPage, location.pathname, schoolPage, isActive, mouseOnAvatar,
        mouseOnFire, mouseOnFlag, mouseOnRuby, idElement, settingsCoach,
        settingsSound, choosePurposeDay, changeBodyRight, offSoundEffects, offExerciseToSpeak,
        offExerciseToAudio, activeButton, show,
        idPurpose,   
        // dayUpdate, everyDayTarget, moduleId, dayWeek, index, updateBool,
    ]);
    useMemo(() => {
        const fetchStatistic = () => {
            try {
                getStatistic().then(data => {
                    if (data.status === 200) {
                        setEveryDayTarget(data.data.everyDayTarget);
                    }
                });
            } catch(e) {
                console.log(e.message);
            }
                
        };
        fetchStatistic();
        const fetchGetAgendaUser = async() => {
            try {
                await getAgendaUser().then(data => {
                    if (data.status === 200) {
                        setDaysOfWeekArray(data.data.daysOfWeekArray);
                        setPointsOfDayArray(data.data.pointsOfDayArray);
                        setDayUpdate(getDayName(new Date(data.data.updatedAt), locate));
                        setDateUpdate(data.data.updatedAt);
                    }
                });
            } catch(e) {
                console.log(e.message);
            }
        }
        fetchGetAgendaUser();
        const fetchUpdateAgendaUser = async () => {
            try {
                await updateAgendaUser(daysOfWeekArray, points, index, pointsOfDayArray, arrayIndex, updateBool)
                    .then();
            } catch(e) {
                console.log(e.message);
            }
        }
        if (updateBool) {
            fetchUpdateAgendaUser();
        }
        const fetchUpdateUserLessonId = async() => {
            try {
                const lessonId = lessons.filter(c => c.moduleId === user.module_id).map(c => c.id)[0];
                if (lessonId === undefined) {
                    alert('The next module do not content the lessons. ');
                } else {
                   await updateUserLessonId(lessonId).then(data => {
                        if(data.status === 200) {
                            dispatch(fetchUser(data.data));
                        }
                    });  
                }
                dispatch(isEndModuleActions(false));
            } catch(e) {
                console.log(e.message);
            }          
        }
        if (isEndModule) {
            fetchUpdateUserLessonId();
        }
    // eslint-disable-next-line
    }, [arrayIndex, updateBool, points, user.module_id, isEndModule, ]);
    useMemo(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
            if (scrollPosition >= 250) {
                setScrollBool(true);
            } else {
                setScrollBool(false);
            }
    },[scrollPosition,]);
    useMemo(() => {
        if (!show && topBlock === '-44' && topTriangle === '7') {
            const timer = () => {
                setTopBlock('-50');
                setTopTriangle('1');
            };
            setTimeout(timer, 1000);
        }
        if (!show && topBlock === '-50' && topTriangle === '1') {
            const previosTimer = () => {
                setTopBlock('-44');
                setTopTriangle('7');
            };
            setTimeout(previosTimer, 1000);
        }
    },[show, topBlock, topTriangle]);
    return (
        <>
            <HeaderComponent
                isActive={isActive}
                mouseOnFlag={mouseOnFlag} 
                setMouseOnFlag={setMouseOnFlag}
                mouseOnFire={mouseOnFire}
                setMouseOnFire={setMouseOnFire}
                mouseOnRuby={mouseOnRuby} 
                setMouseOnRuby={setMouseOnRuby}
                mouseOnAvatar={mouseOnAvatar} 
                setMouseOnAvatar={setMouseOnAvatar}
            /> 
            <div className={
                !isActive 
                    ? "mainLearnPage_main_body" 
                    : "mainLearnPage_main_body_isActive"
                }
                >
                <span className="mainLearnPage_main_navBar">
                    <NavBarComponent
                        idElement={idElement}
                        setIdElement={setIdElement}
                    /> 
                </span>  
                <div className="mainLearnPage_div_body_component">
                    { learnPage && 
                        <LearnComponent
                            themes={themes}
                            show={show}
                            setShow={setShow}
                            moduleId={user.module_id}
                            topBlock={topBlock}
                            topTriangle={topTriangle}
                        /> 
                    }
                    { reviewPage && <ReviewComponent/> }
                    { shopPage && <ShopComponent/> }
                    { schoolPage && <SchoolsComponent/> }
                    { settingsCoach && <SettingsCoachComponent 
                                            navigate={navigate}
                                            idElement={idElement}
                                            setChoosePurposeDay={setChoosePurposeDay}
                                            setIdElement={setIdElement}
                                            setPoints={setPoints}
                                            idPurpose={idPurpose}
                                        /> 
                    }
                    { settingsSound && <SettingsSoundComponent
                                            offSoundEffects={offSoundEffects}
                                            setOffSoundEffects={setOffSoundEffects}
                                            offExerciseToSpeak={offExerciseToSpeak}
                                            setOffExerciseToSpeak={setOffExerciseToSpeak}
                                            offExerciseToAudio={offExerciseToAudio}
                                            setOffExerciseToAudio={setOffExerciseToAudio}
                                        /> 
                    }
                    {scrollBool && 
                        <div className="mainLearnPage_div_button_scroll_up">
                            <button
                                className="mainLearnPage_button_scroll_up"
                                onClick={() => window.scroll(0, 0)}
                                >
                                <img src={arrow} alt="arrow stamp"/>
                            </button>
                        </div>
                    }
                    <div className="mainLearnPage_div_line display_alien_justify">
                        <ul className="mainLearnPage_ul">
                            { arrayMenuDownLinks.map((c) =>  
                                <MenuDownLinksComponent
                                    key={c.id}
                                    name={c.name}
                                    id={c.id}
                                    nav={c.navigate}
                                />
                            )}
                        </ul>
                    </div>
                </div>           
                <div className="mainLearnPage_div_body_right">
                    <MainLearnBodyRightComponent
                        points={points}
                        choosePurposeDay={choosePurposeDay}
                        navigate={navigate}
                        setSettingsCoach={setSettingsCoach}
                        setIdElement={setIdElement}
                        setSettingsSound={setSettingsSound}
                        settingsCoach={settingsCoach}
                        settingsSound={settingsSound}
                        changeBodyRight={changeBodyRight}
                        activeButton={activeButton}
                        everyDayTarget={everyDayTarget}
                        daysOfWeekArray={daysOfWeekArray}
                        pointsOfDayArray={pointsOfDayArray}
                        maxNumberInArrayPoints={maxNumberInArrayPoints}
                    />
                </div>
            </div> 
        </>
    );
}

export default MainLearnPage;