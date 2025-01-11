import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


const data = {
  labels: [
    "01 Dec", "02 Dec", "03 Dec", "04 Dec", "05 Dec", "06 Dec", "07 Dec", "08 Dec", "09 Dec", "10 Dec",
    "11 Dec", "12 Dec", "13 Dec", "14 Dec", "15 Dec", "16 Dec", "17 Dec", "18 Dec", "19 Dec", "20 Dec",
    "21 Dec", "22 Dec", "23 Dec", "24 Dec", "25 Dec", "26 Dec", "27 Dec", "28 Dec", "29 Dec", "30 Dec"
  ],
  datasets: [
    {
      label: "Bitcoin Price (USD)",
      data: [
        42000, 42200, 41800, 43000, 43500, 44000, 45000, 46000, 45500, 45200,
        44800, 44000, 43800, 44200, 44600, 44500, 44200, 44000, 43200, 42800,
        43000, 43400, 43800, 44000, 44500, 44800, 44200, 44000, 43800, 43200
      ],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
      tension: 0.3, 
    },
  ],
};


const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};


function MainSection() {
  return (
    <main className="flex-1 bg-white rounded-lg p-4">

      <div className="flex items-center space-x-3 pb-5">
        <div className="text-3xl font-bold flex items-center">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt="Bitcoin Logo"
            className="w-8 h-8"
          />
          <span className="ml-3">Bitcoin BTC</span>
        </div>
        <div className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md">
          Rank #1
        </div>
      </div>

      <div className="space-x-4 text-sm ">
        <span className="text-xl font-bold">$46,953.04</span>
        <span className="text-green-500 font-medium">+2.51%</span>
        <span className="text-gray-500">(24H)</span>
      </div>
      <p className="text-gray-800 text-sm">₹ 39,42,343</p>


      <div className="mt-6 flex flex-wrap md:flex-nowrap justify-between">
        <h3 className="font-semibold">Bitcoin Price Chart (USD)</h3>
        <div className="flex flex-wrap overflow-auto md:space-x-4 text-gray-600">
          {["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"].map((filter) => (
            <button
              key={filter}
              className="py-1 px-3 me-2 mb-2 text-sm rounded-md bg-gray-200 hover:bg-blue-100 hover:text-blue-500"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="py-5">
        <Line data={data} options={options} />
      </div>
    </main>
  );
}

export default MainSection; 