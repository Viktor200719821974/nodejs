import { useEffect, useState } from 'react';

import Welcome1Component from '../components/welcome/Welcome1Component';
import Welcome2Component from '../components/welcome/Welcome2Component';
import Welcome3Component from '../components/welcome/Welcome3Component';
import Welcome4Component from '../components/welcome/Welcome4Component';
import Welcome5Component from '../components/welcome/Welcome5Component';
import Welcome6Component from '../components/welcome/Welcome6Component';

const WelcomePage = () => {
    const [buttonNoActive, setButtonNoActive] = useState(false);
    const [newComponent, setNewComponent] = useState(false);
    const [newComponent1, setNewComponent1] = useState(true);
    const [newComponent2, setNewComponent2] = useState(true);
    const [newComponent3, setNewComponent3] = useState(true);
    const [newComponent4, setNewComponent4] = useState(true);
    const [newComponent5, setNewComponent5] = useState(false);
    const [idElement, setIdElement] = useState(0);
    const [howDidYouKnow, setHowDidYouKnow] = useState('');
    const [whatAreYouStuding, setWhatAreYouStuding] = useState('');
    const [everyDayTarget, setEveryDayTarget] = useState('');
    
    useEffect(() => {
    }, [
        buttonNoActive, newComponent5, idElement, howDidYouKnow, whatAreYouStuding, 
        newComponent, everyDayTarget,
    ]);
    return (
        <div>
            {
                (!newComponent && !newComponent5) &&  
                    <Welcome1Component  
                        buttonNoActive={buttonNoActive} 
                        setNewComponent={setNewComponent}
                        setNewComponent5={setNewComponent5}
                        setNewComponent4={setNewComponent4}
                        setHowDidYouKnow={setHowDidYouKnow}
                        setIdElement={setIdElement}
                        idElement={idElement}
                        setButtonNoActive={setButtonNoActive}
                        newComponent={newComponent}
                        whatAreYouStuding={whatAreYouStuding}
            />}
            {
                (newComponent && newComponent1) &&
                    <Welcome2Component
                        buttonNoActive={buttonNoActive} 
                        setNewComponent={setNewComponent}
                        setNewComponent1={setNewComponent1}
                        newComponent={newComponent}
                        setIdElement={setIdElement}
                        idElement={idElement}
                        setButtonNoActive={setButtonNoActive}
                        setWhatAreYouStuding={setWhatAreYouStuding}
                        setHowDidYouKnow={setHowDidYouKnow}
                        howDidYouKnow={howDidYouKnow}
                        everyDayTarget={everyDayTarget}
                        setEveryDayTarget={setEveryDayTarget}
                />
            }
            {
                (!newComponent1 && newComponent2) &&
                    <Welcome3Component
                        setNewComponent1={setNewComponent1}
                        buttonNoActive={buttonNoActive}
                        idElement={idElement}
                        setIdElement={setIdElement}
                        setEveryDayTarget={setEveryDayTarget}
                        setNewComponent2={setNewComponent2}
                        setButtonNoActive={setButtonNoActive}
                        everyDayTarget={everyDayTarget}
                        howDidYouKnow={howDidYouKnow}
                        whatAreYouStuding={whatAreYouStuding}
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
                        newComponent5={newComponent5}
                    />
            }
        </div>
    );
};

export default WelcomePage;