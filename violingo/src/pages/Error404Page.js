import error404 from '../icons/error404.svg';
import { HOME_PAGE } from '../constants';

const Error404Page = () => {
    return (
        <div className="error404Page_main_div">
            <img src={error404} alt={'sad violingo'} className="error404Page_image"/>
            <span className="error404Page_span">
                <h1 className="error404Page_h1">Error 404</h1>
                <h5 className="error404Page_h5">
                    Sorry, the page you were looking for doesn’t exist. Try going to 
                    <a href={HOME_PAGE} className="error404Page_a">
                        duolingo.com
                    </a>
                    , or follow us on 
                    <a href={HOME_PAGE} className="error404Page_a">
                        Twitter
                    </a> or 
                    <a href={HOME_PAGE} className="error404Page_a">
                        Facebook
                    </a>.
                </h5>
                <h4 className="error404Page_h4">violingo</h4>
            </span>
            
        </div>
    );
};

export default Error404Page;