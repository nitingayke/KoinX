import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TokenomicsComponent() {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
        datasets: [
            {
                label: "Votes",
                data: [80, 20],
                backgroundColor: [
                    "rgb(0 191 255)",
                    "orange",
                ],
                borderWidth: 0, // Removes the border
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false, // Hides the legend
            },
            tooltip: {
                enabled: true,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <section className="bg-white rounded-lg p-4">
            <h1 className="text-xl font-bold py-3">Tokenomics</h1>
            <h3 className="font-bold">Initial Distribution</h3>
            <div className="flex items-center py-5 h-full">
                <div className="w-40">
                    <Doughnut data={data} options={options} />
                </div>
                
                <div className="text-sm space-y-2 flex-1 flex-col items-center">
                    <p className="text-sky-500">Crowdsale investors: 80%</p>
                    <p className="text-orange-500">Foundation: 20%</p>
                </div>
            </div>
            <p className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel incidunt recusandae voluptatem, maxime mollitia quae esse aperiam itaque, iure rem pariatur dolorem nisi quo dolore repellat ratione aut porro!
                Omnis ea aliquam eius quia quos dolor ipsa vitae quaerat vero commodi atque corrupti nobis ab magnam, ratione cumque animi recusandae earum? Sit, perspiciatis? Quia rerum deleniti expedita velit sequi.
                Consequatur error iure tempora cumque illo possimus assumenda totam asperiores aliquam nesciunt a dicta aspernatur obcaecati amet ratione omnis odio sint exercitationem culpa, necessitatibus ad saepe ducimus impedit. Possimus, omnis!
            </p>


        </section>
    );
}
