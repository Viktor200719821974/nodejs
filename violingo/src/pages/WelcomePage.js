import { useEffect, useState } from 'react';

import Welcome1Component from '../components/Welcome1Component';
import Welcome2Component from '../components/Welcome2Component';
import Welcome3Component from '../components/Welcome3Component';
import Welcome4Component from '../components/Welcome4Component';
import Welcome5Component from '../components/Welcome5Component';
import Welcome6Component from '../components/Welcome6Component';

const WelcomePage = () => {
    const [buttonNoActive, setButtonNoActive] = useState(false);
    const [newComponent, setNewComponent] = useState(false);
    const [newComponent1, setNewComponent1] = useState(true);
    const [newComponent2, setNewComponent2] = useState(true);
    const [newComponent3, setNewComponent3] = useState(true);
    const [newComponent4, setNewComponent4] = useState(true);
    const [newComponent5, setNewComponent5] = useState(false);
    const [idElement, setIdElement] = useState(0);
    const [fromKnewValue, setFromKnewValue] = useState('');
    const [whyStudyValue, setWhyStudyValue] = useState('');
    const [timeToExeciseValue, setTimeToExeciseValue] = useState('');
    
    useEffect(() => {
        // if (value === '') {
        //     setButtonNoActive(true);
        //     setUsual(true);
        // }
    }, [
        buttonNoActive, newComponent5, idElement, fromKnewValue, whyStudyValue, 
        newComponent, timeToExeciseValue,
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
                        setFromKnewValue={setFromKnewValue}
                        setIdElement={setIdElement}
                        idElement={idElement}
                        setButtonNoActive={setButtonNoActive}
                        newComponent={newComponent}
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
                        setWhyStudy={setWhyStudyValue}
                        setFromKnewValue={setFromKnewValue}
                />
            }
            {
                (!newComponent1 && newComponent2) &&
                    <Welcome3Component
                        setNewComponent1={setNewComponent1}
                        buttonNoActive={buttonNoActive}
                        idElement={idElement}
                        setIdElement={setIdElement}
                        setTimeToExeciseValue={setTimeToExeciseValue}
                        setNewComponent2={setNewComponent2}
                        setButtonNoActive={setButtonNoActive}
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