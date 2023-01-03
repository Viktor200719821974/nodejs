import boxClose from '../../icons/box-close.svg';
const AgendaComponent = () => {
    return (
        <div>
            <div className="mainLearnPage_div_main_sign_agendaComponent display_alien_justify">
                <h2 className="mainLearnPage_h2_agendaComponent">Накопичення балів</h2>
                <span className="mainLearnPage_span_sign_agendaComponent display_alien_justify">
                    Змінити ціль
                </span>
            </div>
            <div className="mainLearnPage_div_image_purpose_agendaComponent">
                <img src={boxClose} alt="box close" className="mainLearn_image_agendaComponet"/>
                <div className="mainLearnPage_div_main_purpose_line_success_agendaComponent">
                    <h5>Щоденна ціль</h5>
                    <div className="mainLearnPage_div_main_line_success_agendaComponent">
                        <div className="mainLearnPage_div_line_success_agendaComponent"></div>
                        <h5 className="mainLearnPage_h5_success_agendaComponent">
                            {58}/{50} балів
                        </h5>
                    </div>
                </div>  
            </div>
            <div>
                <svg height='225px' width='340px' direction="ltr">
                    <text x="0" y="45" fill="#afafaf" fontSize="17px">80</text>
                    <text x="0" y="85" fill="#afafaf" fontSize="17px">60</text>
                    <text x="0" y="125" fill="#afafaf" fontSize="17px">40</text>
                    <text x="0" y="165" fill="#afafaf" fontSize="17px">20</text>
                    <text x="10" y="205" fill="#afafaf" fontSize="17px">0</text>
                    <text x="30" y="220" fill="#afafaf" fontSize="17px">Пн</text>
                    <text x="73" y="220" fill="#afafaf" fontSize="17px">Вт</text>
                    <text x="116" y="220" fill="#afafaf" fontSize="17px">Ср</text>
                    <text x="159" y="220" fill="#afafaf" fontSize="17px">Чт</text>
                    <text x="202" y="220" fill="#afafaf" fontSize="17px">Пт</text>
                    <text x="245" y="220" fill="#afafaf" fontSize="17px">Сб</text>
                    <text x="288" y="220" fill="#afafaf" fontSize="17px">Нд</text>
                    <g fill="none">
                        <path stroke="#afafaf" d="M40 40 l260 0" />
                        <path stroke="#afafaf" d="M40 80 l260 0" />
                        <path stroke="#afafaf" d="M40 120 l260 0" />
                        <path stroke="#afafaf" d="M40 160 l260 0" />
                        <path stroke="#afafaf" d="M40 200 l260 0" />
                    </g>
                </svg>

            </div>
        </div>
    );
};

export default AgendaComponent;