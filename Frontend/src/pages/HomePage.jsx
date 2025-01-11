import React from 'react';
import SentimentComponent from '../components/SentimentComponent.jsx';
import AboutBitcoinComponent from '../components/AboutBitcoinComponent.jsx'

export default function Home() {
    return (
        <div className='p-3'>
            <div className='md:w-4/5 space-y-4'>
                <SentimentComponent />

                <AboutBitcoinComponent />
            </div>
        </div>
    )
}