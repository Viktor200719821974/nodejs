import { useEffect, useState } from 'react';

import Welcome1Component from '../components/Welcome1Component';
import Welcome2Component from '../components/Welcome2Component';
import Welcom3Component from '../components/Welcome3Component';
import Welcome4Component from '../components/Welcome4Component';
import Welcome5Component from '../components/Welcome5Component';
import Welcome6Component from '../components/Welcome6Component';

const WelcomePage = () => {
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
    const [newComponent, setNewComponent] = useState(false);
    const [cultureStamp, setCultureStamp] = useState(false);
    const [trainingBrainStamp, setTrainingBrain] = useState(false);
    const [educationStamp, setEducationStamp] = useState(false);
    const [travelsStamp, setTravelsStamp] = useState(false);
    const [careerStamp, setCareerStamp] = useState(false);
    const [familyAndFriendsStamp, setFamilyAndFriends] = useState(false);
    const [other2Stamp, setOther2Stamp] = useState(false);
    const [newComponent1, setNewComponent1] = useState(true);
    const [easy, setEasy] = useState(false);
    const [usual, setUsual] = useState(false);
    const [serious, setSerious] = useState(false);
    const [intensive, setIntensive] = useState(false);
    const [newComponent2, setNewComponent2] = useState(true);
    const [newComponent3, setNewComponent3] = useState(true);
    const [newComponent4, setNewComponent4] = useState(true);
    
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
            setUsual(true);
        }
        if (value === 'culture') {
            setCultureStamp(true);
            setTrainingBrain(false);
            setEducationStamp(false);
            setTravelsStamp(false);
            setCareerStamp(false);
            setFamilyAndFriends(false);
            setOther2Stamp(false);
            setButtonNoActive(false);
        }
        if (value === 'training brain') {
            setCultureStamp(false);
            setTrainingBrain(true);
            setEducationStamp(false);
            setTravelsStamp(false);
            setCareerStamp(false);
            setFamilyAndFriends(false);
            setOther2Stamp(false);
            setButtonNoActive(false);
        }
        if (value === 'education') {
            setCultureStamp(false);
            setTrainingBrain(false);
            setEducationStamp(true);
            setTravelsStamp(false);
            setCareerStamp(false);
            setFamilyAndFriends(false);
            setOther2Stamp(false);
            setButtonNoActive(false);
        }
        if (value === 'travels') {
            setCultureStamp(false);
            setTrainingBrain(false);
            setEducationStamp(false);
            setTravelsStamp(true);
            setCareerStamp(false);
            setFamilyAndFriends(false);
            setOther2Stamp(false);
            setButtonNoActive(false);
        }
        if (value === 'career') {
            setCultureStamp(false);
            setTrainingBrain(false);
            setEducationStamp(false);
            setTravelsStamp(false);
            setCareerStamp(true);
            setFamilyAndFriends(false);
            setOther2Stamp(false);
            setButtonNoActive(false);
        }
        if (value === 'family and friends') {
            setCultureStamp(false);
            setTrainingBrain(false);
            setEducationStamp(false);
            setTravelsStamp(false);
            setCareerStamp(false);
            setFamilyAndFriends(true);
            setOther2Stamp(false);
            setButtonNoActive(false);
        }
        if (value === 'other2') {
            setCultureStamp(false);
            setTrainingBrain(false);
            setEducationStamp(false);
            setTravelsStamp(false);
            setCareerStamp(false);
            setFamilyAndFriends(false);
            setOther2Stamp(true);
            setButtonNoActive(false);
        }
        if (value === 'easy') {
            setEasy(true); 
            setUsual(false);  
            setSerious(false); 
            setIntensive(false);
            setButtonNoActive(false);
        }
        if (value === 'usual') {
            setEasy(false); 
            setUsual(true);  
            setSerious(false); 
            setIntensive(false);
            setButtonNoActive(false);
        }
        if (value === 'serious') {
            setEasy(false); 
            setUsual(false);  
            setSerious(true); 
            setIntensive(false);
            setButtonNoActive(false);
        }
        if (value === 'intensive') {
            setEasy(false); 
            setUsual(false);  
            setSerious(false); 
            setIntensive(true);
            setButtonNoActive(false);
        }
    }, [
        tvStamp, googleStamp, value, facebookStamp, newsStamp, pensilStamp, tiktokStamp, 
        friendsStamp, youtubeStamp, otherStamp, buttonNoActive, cultureStamp, trainingBrainStamp, 
        educationStamp, travelsStamp, careerStamp, familyAndFriendsStamp, other2Stamp, easy,
        usual, serious, intensive,
    ]);
    return (
        <div>
            {
                !newComponent && 
                    <Welcome1Component 
                        tvStamp={tvStamp}
                        googleStamp={googleStamp} 
                        value={value}
                        facebookStamp={facebookStamp} 
                        newsStamp={newsStamp} 
                        pensilStamp={pensilStamp} 
                        tiktokStamp={tiktokStamp}
                        friendsStamp={friendsStamp} 
                        youtubeStamp={youtubeStamp} 
                        otherStamp={otherStamp} 
                        buttonNoActive={buttonNoActive} 
                        setValue={setValue}
                        setNewComponent={setNewComponent}
                        setButtonNoActive={setButtonNoActive} 
            />}
            {
                (newComponent && newComponent1) &&
                    <Welcome2Component
                        cultureStamp={cultureStamp} 
                        setValue={setValue} 
                        trainingBrainStamp={trainingBrainStamp} 
                        educationStamp={educationStamp} 
                        travelsStamp={travelsStamp} 
                        careerStamp={careerStamp}
                        familyAndFriendsStamp={familyAndFriendsStamp} 
                        other2Stamp={other2Stamp} 
                        buttonNoActive={buttonNoActive} 
                        setNewComponent={setNewComponent}
                        setOtherStamp={setOtherStamp}
                        setFacebookStamp={setFacebookStamp} 
                        setFriendsStamp={setFriendsStamp} 
                        setGoogleStamp={setGoogleStamp} 
                        setTiktokStamp={setTiktokStamp} 
                        setYoutubeStamp={setYoutubeStamp}
                        setTvStamp={setTvStamp}
                        setNewsStamp={setNewsStamp} 
                        setPensilStamp={setPensilStamp}
                        setCultureStamp={setCultureStamp} 
                        setTrainingBrain={setTrainingBrain} 
                        setEducationStamp={setEducationStamp} 
                        setTravelsStamp={setTravelsStamp} 
                        setCareerStamp={setCareerStamp} 
                        setFamilyAndFriends={setFamilyAndFriends} 
                        setOther2Stamp={setOther2Stamp}
                        setNewComponent1={setNewComponent1}
                />
            }
            {
                (!newComponent1 && newComponent2) &&
                    <Welcom3Component
                        setNewComponent1={setNewComponent1}
                        buttonNoActive={buttonNoActive}
                        easy={easy}                         
                        usual={usual}                 
                        serious={serious}                        
                        intensive={intensive} 
                        setValue={setValue}
                        setNewComponent2={setNewComponent2}
                    />
            }
            {   (!newComponent2 && newComponent3) && 
                    <Welcome4Component
                        setNewComponent2={setNewComponent2}
                        buttonNoActive={buttonNoActive}
                        setNewComponent3={setNewComponent3}
                    />
            }
            {
                (!newComponent3 && newComponent4) &&
                    <Welcome5Component
                        setNewComponent3={setNewComponent3}
                        setNewComponent4={setNewComponent4}
                    />
            }
            {
                !newComponent4 && 
                    <Welcome6Component
                        setNewComponent4={setNewComponent4}
                    />
            }
        </div>
    );
};

export default WelcomePage;