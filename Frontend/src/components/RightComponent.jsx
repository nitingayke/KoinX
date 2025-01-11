import React from 'react';
import EastIcon from '@mui/icons-material/East';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function RightComponent() {
    return (
        <>
            <div className='p-4 bg-blue-500 rounded-lg h-fit text-center space-y-3 py-10 text-white'>
                <h1 className='text-lg font-semibold'>Get Start With KoinX for Free</h1>
                <p className='text-sm'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>

                <img src="https://media.licdn.com/dms/image/v2/D4D12AQGsruFsUutZfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1665657107920?e=2147483647&v=beta&t=q4NSi6ofx5eIkHnjaXHJ_fM6SKwMrj5COHVwSxzBSwM" alt="" />

                <button className='bg-white py-2 px-5 rounded text-gray-800 font-semibold'>Get Started for FREE <EastIcon style={{ fontSize: '1.3rem' }} /></button>
            </div>
            <div className='p-4 bg-white rounded-xl'>
                <h1 className='text-2xl font-bold mb-4'>Trending Coins (24h)</h1>

                <div className='space-y-4'>
                    {
                        [
                            { title: "Ethereum(ETH)", status: 8.21 },
                            { title: "Bitcoin(BTC)", status: 5.26 },
                            { title: "Polygon(MATIC)", status: 4.32 },
                        ].map((data, idx) => (
                            <div key={idx} className='flex justify-between'>
                                <h1 className='text-md font-semibold text-gray-500'>{data.title}</h1>
                                <button className='bg-green-100 rounded px-2 text-green-800'><ArrowDropUpIcon /> <span className='text-sm'>{data.status}</span></button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}