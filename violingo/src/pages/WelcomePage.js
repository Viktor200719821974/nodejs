import { RxCross1 } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import google from '../icons/stamp-google.svg';
import tv from '../icons/tv.svg';
import facebookInstagram from '../icons/facebook-instagram.svg';
import news from '../icons/news.svg';
import pensil from '../icons/pensil.svg';
import tiktok from '../icons/stamp-tiktok.svg';
import friends from '../icons/friends.svg';
import youtube from '../icons/stamp-youtube.svg';
import other from '../icons/stamp-other.svg';

const WelcomePage = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [googleStamp, setGoogleStamp] = useState(false);
    const [tvStamp, setTvStamp] = useState(false);
    const [facebookStamp, setFacebookStamp] = useState(false);
    const [newsStamp, setNewsStamp] = useState(false);
    const [pensilStamp, setPensilStamp] = useState(false);
    const [tiktokStamp, setTiktokStamp] = useState(false);
    const [friendsStamp, setFriendsStamp] = useState(false);
    const [youtubeStamp, setYoutubeStamp] = useState(false);
    const [otherStamp, setOtherStamp] = useState(false);
    const [buttonNoActive, setButtonNoActive] = useState(false);
    
    useEffect(() => {
        if (value === 'google') {
            setGoogleStamp(true);
            setTvStamp(false);
            setFacebookStamp(false);
            setNewsStamp(false);
            setPensilStamp(false);
            setTiktokStamp(false);
            setFriendsStamp(false);
            setYoutubeStamp(false);
            setOtherStamp(false);
            setButtonNoActive(false);
        }
        if (value === 'tv') {
            setGoogleStamp(false);
            setTvStamp(true);
            setFacebookStamp(false);
            setNewsStamp(false);
            setPensilStamp(false);
            setTiktokStamp(false);
            setFriendsStamp(false);
            setYoutubeStamp(false);
            setOtherStamp(false); 
            setButtonNoActive(false);
        }
        if (value === 'facebook') {
            setGoogleStamp(false);
            setTvStamp(false);
            setFacebookStamp(true);
            setNewsStamp(false);
            setPensilStamp(false);
            setTiktokStamp(false);
            setFriendsStamp(false);
            setYoutubeStamp(false);
            setOtherStamp(false); 
            setButtonNoActive(false);
        }
        if (value === 'news') {
            setGoogleStamp(false);
            setTvStamp(false);
            setFacebookStamp(false);
            setNewsStamp(true);
            setPensilStamp(false);
            setTiktokStamp(false);
            setFriendsStamp(false);
            setYoutubeStamp(false);
            setOtherStamp(false); 
            setButtonNoActive(false);
        }
        if (value === 'pensil') {
            setGoogleStamp(false);
            setTvStamp(false);
            setFacebookStamp(false);
            setNewsStamp(false);
            setPensilStamp(true);
            setTiktokStamp(false);
            setFriendsStamp(false);
            setYoutubeStamp(false);
            setOtherStamp(false);
            setButtonNoActive(false); 
        }
        if (value === 'tiktok') {
            setGoogleStamp(false);
            setTvStamp(false);
            setFacebookStamp(false);
            setNewsStamp(false);
            setPensilStamp(false);
            setTiktokStamp(true);
            setFriendsStamp(false);
            setYoutubeStamp(false);
            setOtherStamp(false); 
            setButtonNoActive(false);
        }
        if (value === 'friends') {
            setGoogleStamp(false);
            setTvStamp(false);
            setFacebookStamp(false);
            setNewsStamp(false);
            setPensilStamp(false);
            setTiktokStamp(false);
            setFriendsStamp(true);
            setYoutubeStamp(false);
            setOtherStamp(false); 
            setButtonNoActive(false);
        }
        if (value === 'youtube') {
            setGoogleStamp(false);
            setTvStamp(false);
            setFacebookStamp(false);
            setNewsStamp(false);
            setPensilStamp(false);
            setTiktokStamp(false);
            setFriendsStamp(false);
            setYoutubeStamp(true);
            setOtherStamp(false); 
            setButtonNoActive(false);
        }
        if (value === 'other') {
            setGoogleStamp(false);
            setTvStamp(false);
            setFacebookStamp(false);
            setNewsStamp(false);
            setPensilStamp(false);
            setTiktokStamp(false);
            setFriendsStamp(false);
            setYoutubeStamp(false);
            setOtherStamp(true);
            setButtonNoActive(false);
        }
        if (value === '') {
            setButtonNoActive(true);
        }
    }, [
        tvStamp, googleStamp, value, facebookStamp, newsStamp, pensilStamp, tiktokStamp, 
        friendsStamp, youtubeStamp, otherStamp, buttonNoActive,
    ]);
    return (
        <div>
            <div className="welcomePage_main_div_top">
                <button className="welcomePage_button_cross">
                    <RxCross1 color='#d0cccc' size={'22px'}/>
                </button> 
                <div className="welcomePage_div_around_cross"></div>
            </div>
            <div className="welcomePage_div_body">
                <h1 style={{color: '#4b4b4b', margin: '0 24px 24px'}}>
                    Звідки ви дізналися про Duolingo?
                </h1>
                <div className="welcomePage_div_main_blocks">
                    <div 
                        className={
                            !googleStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('google')}
                        >
                        <img 
                            src={google} 
                            alt="stamp google"
                            style={{width: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Із пошуку в Google</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !tvStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('tv')}
                        >
                        <img 
                            src={tv} 
                            alt="stamp tv"
                            style={{width: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>По телебаченню</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !facebookStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('facebook')}
                        >
                        <img 
                            src={facebookInstagram} 
                            alt="stamp facebook and instagram"
                            style={{width: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Із Facebook/Instagram</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !newsStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('news')}
                        >
                        <img 
                            src={news} 
                            alt="stamp news"
                            style={{width: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Із новин/статті/блогу</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !pensilStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('pensil')}
                        >
                        <img 
                            src={pensil} 
                            alt="stamp pensil"
                            style={{width: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Підсумки 2022 року</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !tiktokStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('tiktok')}
                        >
                        <img 
                            src={tiktok} 
                            alt="stamp tiktok"
                            style={{width: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>З TikTok</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !friendsStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('friends')}
                        >
                        <img 
                            src={friends} 
                            alt="stamp friends"
                            style={{width: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>Від друзів/сім’ї</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !youtubeStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('youtube')}
                        >
                        <img 
                            src={youtube} 
                            alt="stamp youtube"
                            style={{width: '80px', margin: '20px 13px 10px'}}
                        />
                        <span className="welcomePage_span_sign_in_block">
                            <b>З YouTube</b>
                        </span>
                    </div>
                    <div 
                        className={
                            !otherStamp ? "welcomePage_div_one_block" : "welcomePage_div_one_block_select"
                        }
                        onClick={() => setValue('other')}
                        >
                        <img 
                            src={other} 
                            alt="stamp other"
                            style={{width: '80px', margin: '20px 13px 10px'}}
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
                    onClick={() => navigate('')}
                    >
                        Продовжити
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;