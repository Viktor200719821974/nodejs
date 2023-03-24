import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { LOGIN_PAGE, LEARN_PAGE } from '../../constants';
import { arrayWelcome3, arrayWelcome2 } from '../../constants/arrays';
import { postStatistic } from '../../http/statisticApi';
import { isStatisticUser, statisticUser } from '../../redux/actions';

const Welcome3Component = ({
    setNewComponent1, setNewComponent2, setIdElement, idElement, 
    setEveryDayTarget, howDidYouKnow, whatAreYouStuding, everyDayTarget, setButtonNoActive,
    email,
}) => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { user } = useSelector(state => state.userReducer);
    
    const buttonBack = () => {
        setNewComponent1(true);
        setIdElement(arrayWelcome2.filter(c => c.name === whatAreYouStuding).map(c => c.id)[0]);
        (whatAreYouStuding === '') && setButtonNoActive(false);
        (whatAreYouStuding !== '') && setButtonNoActive(true);
    }
    const click = async () => {
        try {
            setButtonNoActive(false);
            setNewComponent2(false);
            if (email === null) {
                email = user.email;
            }
            await postStatistic(howDidYouKnow, whatAreYouStuding, everyDayTarget, email)
                .then(data => {
                    if (data.status === 201) {
                        dispatch(statisticUser(data.data));
                        dispatch(isStatisticUser(true));
                        // navigate(isLogin ? LEARN_PAGE : LOGIN_PAGE);
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }        
    }
    return (
        <div>
            <div className="welcomePage_main_div_top display_alien_justify">
                <button 
                    className="welcomePage_button_cross" 
                    onClick={buttonBack}
                    >
                    <BiArrowBack color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross">
                    <div className="welcomePage_div_one_download" style={{width: '40%'}}></div>
                </div>
            </div>
            <div className="welcomePage_div_body_welcome3Component">
                <h1 style={{color: '#4b4b4b', margin: '0 24px 24px'}}>
                    Чудово! Тепер виберіть щоденну ціль
                </h1>
                <div className="welcomePage_div_main_table_welcome3Component">
                   {
                    arrayWelcome3.map(c => 
                        <div key={c.id}>
                            {(c.id === 1) && 
                                <div 
                                    className={
                                        (idElement !== c.id) 
                                            ? "welcomePage_div_table_row_top_welcome3Component" 
                                            : "welcomePage_div_table_row_top_welcome3Component_select"
                                    }
                                    onClick={() => {
                                        setEveryDayTarget(c.name);
                                        setIdElement(c.id); 
                                    }}
                                     >
                                    <span className="welcomePage_div_table_column_left_welcome3Component">
                                        <b>{c.title}</b>
                                    </span>
                                    <span className="welcomePage_div_table_column_right_welcome3Component">
                                        {c.time} 
                                    </span>
                                </div>
                            }
                            {((c.id !== 1) && (c.id !== 4)) && 
                                <div 
                                    className={
                                        (idElement !== c.id) 
                                            ? "welcomePage_div_table_row_center_welcome3Component" 
                                            : "welcomePage_div_table_row_center_welcome3Component_select"
                                    }
                                    onClick={() => {
                                        setEveryDayTarget(c.name);
                                        setIdElement(c.id); 
                                    }}
                                    >
                                    <span className="welcomePage_div_table_column_left_welcome3Component">
                                        <b>{c.title}</b>
                                    </span>
                                    <span className="welcomePage_div_table_column_right_welcome3Component">
                                        {c.time} 
                                    </span>
                                </div>
                            }
                            {(c.id === 4) && 
                                <div 
                                    className={
                                        (idElement !== c.id) 
                                            ? "welcomePage_div_table_row_down_welcome3Component" 
                                            : "welcomePage_div_table_row_down_welcome3Component_select"
                                    }
                                    onClick={() => {
                                        setEveryDayTarget(c.name);
                                        setIdElement(c.id); 
                                    }}
                                    >
                                    <span className="welcomePage_div_table_column_left_welcome3Component">
                                        <b>{c.title}</b>
                                    </span>
                                    <span className="welcomePage_div_table_column_right_welcome3Component">
                                        {c.time} 
                                    </span>
                                </div>
                            }    
                        </div>
                    )
                   }
                </div>
                <div 
                    className="welcomePage_div_button_next display_alien_justify"
                    onClick={click}
                    style={{width: '580px'}}
                    >
                        Продовжити
                </div>
            </div>
        </div>
    );
};

export default Welcome3Component;