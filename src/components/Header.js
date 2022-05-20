import React from 'react';
import logo from "../img/logo-claro.webp";

const Header = () => {
    return (
        <nav className='header'>
            <section className="header-button">
                <div className='button-text'>
                    <p>
                        Line Exclusiva de Ventas
                    </p>
                </div>
                <div className="button-phone">
                    <a href="tel:017012025">
                        <div>
                            <ion-icon name="call-outline"></ion-icon>
                        </div>
                        <div>
                            <p>(01)7012025</p>
                        </div>
                    </a>
                </div>
            </section>
            <section className="header-menu">
                <div class="logo">
                    <img src={logo} alt='claro-logo'></img>
                </div>
                <ul class="menu">
                    <li className='options'>
                        <a href="https://planeshogarperu.com.pe/">
                            <div className='icon'>
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>
                            <div className='text'>
                                <p>Planes Moviles</p>
                            </div>
                        </a>
                    </li>
                    <li className='options'>
                        <a href="https://planeshogarperu.com.pe/">
                            <div className='icon'>
                                <ion-icon name="home-outline"></ion-icon>
                            </div>
                            <div className='text'>
                                <p>Planes Hogar</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Header;