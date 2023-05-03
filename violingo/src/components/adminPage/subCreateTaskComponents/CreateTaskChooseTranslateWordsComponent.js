const CreateTaskChooseTranslateWordsComponent = ({ arrayIdTranslateWords, }) => {
    // console.log(arrayIdTranslateWords);
    return (
        <div>
            {
                arrayIdTranslateWords && arrayIdTranslateWords.map(c => 
                    <div key={c.id}>
                        <span>
                            <b>Question:</b> {c.question}
                        </span>
                        <span><b>Answer:</b> {c.answer}</span>
                    </div>
                )
            }
        </div>
    );
};

export default CreateTaskChooseTranslateWordsComponent;