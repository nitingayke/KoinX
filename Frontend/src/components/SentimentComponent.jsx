import React, { useRef } from "react";
import InfoIcon from '@mui/icons-material/Info';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const iconsList = [
    { icon: <ShowChartOutlinedIcon /> },
    { icon: <Inventory2OutlinedIcon /> },
    { icon: <InventoryOutlinedIcon /> },
    { icon: <TrendingDownIcon /> },
];

export default function SentimentComponent() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 300; 
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 300; 
        }
    };

    return (
        <section className="bg-white p-4 py-2 rounded-lg">
            <h1 className="font-bold text-xl text-gray-700">Sentiment</h1>
            <h3 className="text-sm font-semibold text-gray-500 mb-5">
                Key Events <InfoIcon style={{ fontSize: '1rem' }} />
            </h3>


            <div className=" relative">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                    <button
                        onClick={scrollLeft}
                        className="bg-gray-400 text-white py-2 px-1 rounded-full shadow-md opacity-45"
                    >
                        <ArrowLeftIcon/>
                    </button>
                </div>

                <div className="flex overflow-x-auto w-full space-x-3 scrollbar-hide mb-7" ref={scrollRef}>
                    {iconsList.map((data, idx) => (
                        <div
                            key={idx}
                            className="p-3 bg-sky-100 rounded md:w-96 w-full flex-shrink-0"
                        >
                            <div className="space-x-2">
                                <div className="flex pb-1">
                                    <div
                                        className={`${idx % 2 === 0 ? "bg-green-600" : "bg-blue-600"} text-white rounded-full h-fit p-2 flex`}
                                    >
                                        {data.icon}
                                    </div>
                                    <p className="ps-2 text-sm font-semibold text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem adipisci doloribus.
                                    </p>
                                </div>
                                <p className="text-sm text-gray-600 ps-10">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corrupti sunt libero voluptas beatae, ea fugiat cupiditate? Perspiciatis deserunt, libero modi consequatur culpa et, quia similique necessitatibus commodi, maiores quaerat.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <button
                        onClick={scrollRight}
                        className="bg-gray-400 text-white px-1 py-2 rounded-full shadow-md opacity-45"
                    >
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-semibold text-gray-500">Analyst Estimates <InfoIcon /></h1>

                <div className="lg:py-10 p-3 flex items-center space-x-4 md:space-x-10">
                    <div className="bg-green-100 rounded-full flex items-center justify-center w-32 h-32 md:w-40 md:h-40">
                        <span className="font-bold md:text-5xl text-3xl text-green-500">75%</span>
                    </div>
                    <div className="space-y-4 flex-1">
                        <div className="flex items-center space-x-2 whitespace-nowrap">
                            <span className="text-gray-600 text-sm">Buy</span>
                            <span className="w-[78%] h-3 rounded-full p-1 bg-green-500 text-white text-center"></span>
                            <span className="text-sm text-gray-500">76 %</span>
                        </div>
                        <div className="flex items-center space-x-2 whitespace-nowrap">
                            <span className="text-gray-600 text-sm">Buy</span>
                            <span className="w-[8%] h-3  rounded-full p-1 bg-gray-300 text-white text-center"></span>
                            <span className="text-sm text-gray-500">8 %</span>
                        </div>
                        <div className="flex items-center space-x-2 whitespace-nowrap">
                            <span className="text-gray-600 text-sm">Buy</span>
                            <span className="w-[18%] h-3 rounded-full p-1 bg-red-600 text-white text-center"></span>
                            <span className="text-sm text-gray-500 flex">18 %</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
