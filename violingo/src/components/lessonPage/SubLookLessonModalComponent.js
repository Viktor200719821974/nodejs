const SubLookLessonModalComponent = ({question, answer, choosePositiveAnswer}) => {
    return (
        <div>
            {/* {   
                choosePositiveAnswer &&
                    question.map(c => 
                        <span 
                            key={c.id}
                            style={{marginRight: '4px'}}
                            >
                            {c.word}
                        </span>
                    )
            }
            {
                !choosePositiveAnswer &&
                    answer.map(c => 
                        <span 
                            key={c.id}
                            style={{marginRight: '4px'}}
                            >
                            {c.name},
                        </span>
                    ) 
            } */}
        </div>
    );
};

export default SubLookLessonModalComponent;