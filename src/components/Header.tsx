import { PropsWithChildren } from "react";
import './Header.scss'

const logoUrl = 'https://cdn-icons-png.flaticon.com/512/1057/1057556.png';

function Header(props: PropsWithChildren) {

    return (
        <header className="app-header">
            <div className="logo">
                <img src={logoUrl} alt="" />
                <div className="title">My Notes</div>
            </div>
            <div className="toolbar">
                {props.children}
            </div>
        </header>
    );
}

export default Header;


