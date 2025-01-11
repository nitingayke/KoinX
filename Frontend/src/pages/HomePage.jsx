import React from 'react';
import SentimentComponent from '../components/SentimentComponent.jsx';
import AboutBitcoinComponent from '../components/AboutBitcoinComponent.jsx'
import TokenomicsComponent from '../components/TokenomicsComponent.jsx';
import Team from '../components/TeamComponent.jsx';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import RightComponent from '../components/RightComponent.jsx';

export default function Home() {
    return (
        <div className='p-3'>

            <h1 className='text-sm text-gray-500 p-2 '>Cryptocurrencies <KeyboardDoubleArrowRightIcon /> <span className='font-semibold text-gray-800'>Bitcoin</span></h1>

            <div className='md:flex space-x-5'>
                <div className='md:w-3/4 space-y-4'>

                    <SentimentComponent />

                    <AboutBitcoinComponent />

                    <TokenomicsComponent />

                    <Team />
                </div>

                <div className='space-y-4'>
                    <RightComponent />
                </div>
            </div>
        </div>
    )
}