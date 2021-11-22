import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaMediumM, FaTwitter, FaGithub, FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { RiDiscordFill } from 'react-icons/ri';
import { MdLanguage } from 'react-icons/md';

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="grid grid-cols-8 gap-10">
                    <div className="col-span-8 md:col-span-4">
                        <div className="mb-10">
                            <img src="./assets/img/logo/footer-logo.png" width="115" height="30" alt="Logo" />
                        </div>
                        <p className="text-white font-medium text-opacity-50 mb-9">The Coinswap Platform <br />has a suite of products in <br /> Decentralized Finance.</p>
                        <div className="hidden md:flex items-center text-white text-opacity-50 mb-9 -mx-2">
                            <FaMediumM className="mx-2" size={24} />
                            <FaTwitter className="mx-2" size={24} />
                            <FaGithub className="mx-2" size={24} />
                            <RiDiscordFill className="mx-2" size={24} />
                            <FaFacebookF className="mx-2" size={24} />
                            <FaTelegramPlane className="mx-2" size={24} />
                            <FaYoutube className="mx-2" size={24} />
                        </div>
                        <p className="hidden md:block text-xs text-white font-medium text-opacity-50 md:mb-8">© CoinSwap Space 2021</p>
                        <button className="hidden md:flex items-center lang-picker border-white border-opacity-30 hover:border-opacity-100 border"><MdLanguage size={15} className="mr-1 text-gray-400" /> EN</button>
                    </div>
                    <div className="col-span-4 md:col-span-2 pt-3">
                        <h5 className="text-lg text-white font-bold mb-7">Overview</h5>
                        <ul>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">FAQ</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">Roadmap</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">Fees</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">Refer a Friend</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">Overall Guide</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">Doc</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-span-4 md:col-span-2 pt-3">
                        <h5 className="text-lg text-white font-bold mb-7">Product & Services</h5>
                        <ul>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">SpacePad</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">AMM/Swap</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">Yield Farming</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">Stake</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">Token Listing</NavLink></li>
                            <li className="mb-2.5"><NavLink to="#" className="text-sm text-white text-opacity-50 hover:text-primary">Smart contracts</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <button className="md:hidden flex items-center lang-picker border-white border-opacity-30 hover:border-opacity-100 border mx-auto"><MdLanguage size={15} className="mr-1 text-gray-400" /> EN</button>
                </div>

                <div className="md:hidden flex items-center justify-center text-white text-opacity-50 mb-4 -mx-2 mt-10">
                    <FaMediumM className="mx-2" size={24} />
                    <FaTwitter className="mx-2" size={24} />
                    <FaGithub className="mx-2" size={24} />
                    <RiDiscordFill className="mx-2" size={24} />
                    <FaFacebookF className="mx-2" size={24} />
                    <FaTelegramPlane className="mx-2" size={24} />
                    <FaYoutube className="mx-2" size={24} />
                </div>
                <p className="block md:hidden text-center text-xs text-white font-medium text-opacity-50">© CoinSwap Space 2021</p>
            </div>
        </footer>
    );
};
export default Footer;
