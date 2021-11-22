import React from 'react';

import { MdLanguage } from 'react-icons/md';

const Header = () => {
    return (
        <>
            <header>
                <div className="container mx-auto">
                    <div className="site-logo">
                        <img src="./assets/img/logo/logo.png" width="195" height="33" alt="Logo" />
                    </div>
                    <nav className="site-menus">
                        <button className="bg-primary rounded-lg px-6 py-2 mr-3 font-bold text-xs md:text-sm hover:bg-opacity-70 transition-all">Connect Wallet</button>
                        <button className="hidden md:flex lang-picker items-center border hover:border-opacity-100 border-white border-opacity-30"><MdLanguage size={18} className="mr-1 text-gray-400" /> EN</button>
                        <button className="block md:hidden ml-4"><img src="./assets/img/mobile-menu.png" alt="Hamburger" /></button>
                    </nav>
                </div>
            </header>
        </>
    );
};
export default Header;
