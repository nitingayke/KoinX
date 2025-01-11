import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 left-0 z-10 bg-white shadow-md">
            <nav className="p-3 flex justify-between items-center">
                <div className="h-8 p-1 flex-shrink-0">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3g6sUdIrEyVHp5x7Dcb8SiA4DRCu_1UcT_w&s"
                        alt="Logo"
                        className="h-full"
                    />
                </div>

                <div className='flex items-center hidden md:flex space-x-4'>

                    <a href="#crypto-taxes" className="text-gray-700 hover:text-blue-600 font-medium">
                        Crypto Taxes
                    </a>
                    <a href="#free-resources" className="text-gray-700 hover:text-blue-600 font-medium">
                        Free Resources
                    </a>
                    <a href="#crypto" className="text-gray-700 hover:text-blue-600 font-medium">
                        Crypto
                    </a>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
                        <MenuIcon fontSize="large" />
                    </button>
                </div>
            </nav>


            {isMenuOpen && (
                <div className="md:hidden bg-white p-3 space-y-4 shadow-md">
                    <a href="#crypto-taxes" className="block text-gray-700 hover:text-blue-600 font-medium">
                        Crypto Taxes
                    </a>
                    <a href="#free-resources" className="block text-gray-700 hover:text-blue-600 font-medium">
                        Free Resources
                    </a>
                    <a href="#crypto" className="block text-gray-700 hover:text-blue-600 font-medium">
                        Crypto
                    </a>
                    <button className="block w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
            )}
        </header>
    );
}
