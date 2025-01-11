import React, { useEffect, useState } from 'react';
import SentimentComponent from '../components/SentimentComponent.jsx';
import AboutBitcoinComponent from '../components/AboutBitcoinComponent.jsx'
import TokenomicsComponent from '../components/TokenomicsComponent.jsx';
import Team from '../components/TeamComponent.jsx';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import RightComponent from '../components/RightComponent.jsx';
import Bitcoin from '../components/Bitcoin.jsx'
import PerformanceComponent from '../components/PerformanceComponent.jsx';

export default function Home() {
    const [bitcoinData, setBitcoinData] = useState(null);

    useEffect(() => {
        const fetchBitcoinData = async () => {
            try {
                const res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`); 
                }
                const data = await res.json();
                setBitcoinData({
                    todayLow: data.market_data.low_24h?.usd || 0, 
                    todayHigh: data.market_data.high_24h?.usd || 0,
                    currentPrice: data.market_data.current_price?.usd || 0,
                    weekLow: data.market_data.low_7d?.usd || 0,
                    weekHigh: data.market_data.high_7d?.usd || 0,
                    marketCap: data.market_data.market_cap?.usd || 0,
                    volume: data.market_data.total_volume?.usd || 0,
                    allTimeHigh: data.market_data.ath?.usd || 0,
                    allTimeLow: data.market_data.atl?.usd || 0,
                    marketCapDominance: data.market_data.market_cap_percentage?.usd || 0,
                    volumeMarketCap: ((data.market_data.total_volume?.usd || 0) / (data.market_data.market_cap?.usd || 1)).toFixed(4),
                    marketCapRank: data.market_cap_rank || 0
                });
            } catch (err) {
                console.error("Error fetching Bitcoin data:", err);
            } 
        };

        fetchBitcoinData();
    }, []);
    return (
        <div className='p-3'>

            <h1 className='text-sm text-gray-500 p-2 '>Cryptocurrencies <KeyboardDoubleArrowRightIcon /> <span className='font-semibold text-gray-800'>Bitcoin</span></h1>

            <div className='md:flex md:space-x-5'>
                <div className='md:w-3/4 space-y-4 mb-5'>
                    <Bitcoin />

                    <PerformanceComponent data={bitcoinData} />

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