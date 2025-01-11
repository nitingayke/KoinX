import React from 'react';

export default function PerformanceComponent({ data }) {

    const defaultData = {
        todayLow: 0,
        todayHigh: 0,
        currentPrice: 0,
        weekLow: 0,
        weekHigh: 0,
        marketCap: 0,
        volume: 0,
        allTimeHigh: 0,
        allTimeLow: 0,
    };

    const stats = data || defaultData;

    const calculatePercentage = (value, min, max) => {
        if (max - min === 0) return 0;
        return ((value - min) / (max - min)) * 100;
    };

    const todayPercentage = calculatePercentage(stats.currentPrice, stats.todayLow, stats.todayHigh);
    const weekPercentage = calculatePercentage(stats.currentPrice, stats.weekLow, stats.weekHigh);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Performance</h2>
                <div className="mb-4">
                    <div className="flex justify-between items-center text-gray-600">
                        <span>Today's Low</span>
                        <span>Today's High</span>
                    </div>
                    <div className="relative h-2 bg-gray-200 rounded-full mt-1">
                        <div
                            className="absolute h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
                            style={{ width: `${todayPercentage}%` }}
                        >
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                        <span className="text-sm">{formatCurrency(stats.todayLow)}</span>
                        <span className="text-sm">{formatCurrency(stats.todayHigh)}</span>
                    </div>
                    <div className="text-center font-medium mt-1">{formatCurrency(stats.currentPrice)}</div>
                </div>

                <div>
                    <div className="flex justify-between items-center text-gray-600">
                        <span>52W Low</span>
                        <span>52W High</span>
                    </div>
                    <div className="relative h-2 bg-gray-200 rounded-full mt-1">
                        <div
                            className="absolute h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
                            style={{ width: `${weekPercentage}%` }}
                        >
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                        <span className="text-sm">{formatCurrency(stats.weekLow)}</span>
                        <span className="text-sm">{formatCurrency(stats.weekHigh)}</span>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Fundamentals</h2>
                <div className="grid grid-cols-1 gap-4 text-sm text-gray-700 border-b">
                    {[
                        { title: 'Bitcoin Price', value: formatCurrency(stats.currentPrice) },
                        { title: 'Market Cap', value: formatCurrency(stats.marketCap) },
                        { title: '24h Low/24h High', value: `${formatCurrency(stats.todayLow)} / ${formatCurrency(stats.todayHigh)}` },
                        { title: 'Market Cap Dominance', value: `${stats.marketCapDominance}%` },
                        { title: '7d Low/7d High', value: `${formatCurrency(stats.weekLow)} / ${formatCurrency(stats.weekHigh)}` },
                        { title: 'Volume/Market Cap', value: stats.volumeMarketCap },
                        { title: 'Trading Volume', value: formatCurrency(stats.volume) },
                        { title: 'All-Time High', value: formatCurrency(stats.allTimeHigh) },
                        { title: 'Market Cap Rank', value: `#${stats.marketCapRank}` },
                        { title: 'All-Time Low', value: formatCurrency(stats.allTimeLow) },
                    ].map((item, index) => (
                        <div key={index} className="flex justify-between border-b pb-2">
                            <span className="text-left">{item.title}</span>
                            <span className="text-right font-semibold">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};