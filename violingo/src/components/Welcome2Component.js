import { BiArrowBack } from 'react-icons/bi';

import culture from '../icons/culture.svg';
import trainingBrain from '../icons/trainingBrain.svg';
import education from '../icons/education.svg';
import travels from '../icons/travels.svg';
import career from '../icons/career.svg';
import familyAndFriends from '../icons/familyAndFriends.svg';
import other2 from '../icons/other2.svg';

const Welcome2Component = ({
    cultureStamp, setValue, trainingBrainStamp, educationStamp, travelsStamp, careerStamp,
    familyAndFriendsStamp, other2Stamp, buttonNoActive, setNewComponent, setOtherStamp,
    setFacebookStamp, setFriendsStamp, setGoogleStamp, setTiktokStamp, setYoutubeStamp,
    setTvStamp, setNewsStamp, setPensilStamp, setCultureStamp, setTrainingBrain, 
    setEducationStamp, setTravelsStamp, setCareerStamp, setFamilyAndFriends, setOther2Stamp,
    setNewComponent1,
    }) => {

    const buttonBack = () => {
        setNewComponent(false);
        setValue('');
        setGoogleStamp(false);
        setTvStamp(false);
        setFacebookStamp(false);
        setNewsStamp(false);
        setPensilStamp(false);
        setTiktokStamp(false);
        setFriendsStamp(false);
        setYoutubeStamp(false);
        setOtherStamp(false);
        setCultureStamp(false);
        setTrainingBrain(false);
        setEducationStamp(false);
        setTravelsStamp(false);
        setCareerStamp(false);
        setFamilyAndFriends(false);
        setOther2Stamp(false);
        setFriendsStamp(false);
    }

    return (
        <div>
            <div className="welcomePage_main_div_top">
                <button 
                    className="welcomePage_button_cross" 
                    onClick={buttonBack}
                    >
                    <BiArrowBack color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross">
                    <div className="welcomePage_div_one_download"></div>
                </div>
            </div>
            <div className="welcomePage_div_body" style={{marginTop: '180px'}}>
                <h1 style={{color: '#4b4b4b', margin: '0 24px 24px'}}>
                    Для чого ви вивчаєте мову?
                </h1>
                <div className="welcomePage_div_main_blocks">
                    <div 
                        className={
                            !cultureStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('culture')}
                        >
                        <img 
                            src={culture} 
                            alt="stamp culture"
                            style={{width: '108px', height: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Культура</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !trainingBrainStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('training brain')}
                        >
                        <img 
                            src={trainingBrain} 
                            alt="stamp training brain"
                            style={{width: '108px', height: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Тренування мозку</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !educationStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('education')}
                        >
                        <img 
                            src={education} 
                            alt="stamp education"
                            style={{width: '108px', height: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Освіта</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !travelsStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('travels')}
                        >
                        <img 
                            src={travels} 
                            alt="stamp travels"
                            style={{width: '108px', height: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Подорожі</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !careerStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('career')}
                        >
                        <img 
                            src={career} 
                            alt="stamp career"
                            style={{width: '108px', height: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Кар’єрні можливості</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !familyAndFriendsStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('family and friends')}
                        >
                        <img 
                            src={familyAndFriends} 
                            alt="stamp family and friends"
                            style={{width: '108px', height: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Родина та друзі</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !other2Stamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('other2')}
                        >
                        <img 
                            src={other2} 
                            alt="stamp other"
                            style={{width: '108px', height: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Інше</b>
                        </span>
                    </div>
                </div>
                <button 
                    className={
                        !buttonNoActive ? "welcomePage_div_button_next"
                         : "welcomePage_div_button_next_noActive"
                    }
                    onClick={() => setNewComponent1(false)}
                    >
                        Продовжити
                </button>
            </div> 
        </div>
    );
};

export default Welcome2Component;