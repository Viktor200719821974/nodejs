import { useNavigate } from 'react-router-dom';

const MenuDownLinksComponent = ({name, id, nav}) => {
    const navigate = useNavigate();
    return (
        <li 
            className="menuDownLinksComponent_li"
            onClick={() => navigate(nav)}
            >
            {name}
        </li>

    );
};

export default MenuDownLinksComponent;