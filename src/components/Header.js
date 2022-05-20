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
                    <img src={logo}></img>
                </div>
                <div class="menu">
                    <div className='options'>
                        <a href="">
                            <div>
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>
                            <div>
                                <p>Planes Moviles</p>
                            </div>
                        </a>
                    </div>
                    <div className='options'>
                        <a href="">
                            <div>
                                <ion-icon name="home-outline"></ion-icon>
                            </div>
                            <div>
                                <p>Planes Hogar</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Header;