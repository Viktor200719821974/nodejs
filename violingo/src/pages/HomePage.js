import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const HomePage = () =>  {
    return (
        <OverlayTrigger
        data-bs-custom-class="custom-tooltip"
        placement={'buttom'}
        overlay={
          <Tooltip data-bs-custom-class="custom-tooltip">
            <div className="div_example">
                llslfkjdllskjfkljlsjlk
            </div>
            <div className="div_example">
                lkljhhhhhhhhhhh
            </div>
            <div className="div_example">
                lkshjjjjjjkjjjs
            </div>
          </Tooltip>
        }
      >
        <div>Tooltip </div>
      </OverlayTrigger>
    );
};

export default HomePage;