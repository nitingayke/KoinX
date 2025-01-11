import React from 'react';
import EastIcon from '@mui/icons-material/East';

export default function AboutBitcoin() {
    return (
        <section className='bg-white rounded-lg p-4'>
            <h1 className='text-xl font-bold pb-4'>About Bitcoin</h1>

            <h1 className='font-bold'>What is Bitcoin ?</h1>
            <div className='py-1 text-gray-700'>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 billion. Over the past 24 hours, Bitcoin has seen a price increase of +0.36%. However, it is currently -7.70% from its 7-day all-time high of $18,366.66 and 3.40% from its 7-day all-time low of $16,394.75. As of now, Bitcoin has a circulating supply of 19.24 million BTC and a maximum supply of 21 million BTC.</div>

            <hr className='my-3 bg-d' />

            <h1 className='font-bold'>Lorem ipsum dolor sit amet</h1>
            <div className='space-y-5 py-3'>
                <p className='text-gray-500 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque pariatur reprehenderit labore, rerum distinctio sint vero officiis dolor est blanditiis placeat inventore ea laborum cumque, ratione unde delectus aspernatur!
                    Ab, nam minus corrupti eos natus quidem, dicta ratione perferendis tenetur, vero officia illo praesentium recusandae facilis aut totam ducimus cum ipsa. Quidem quae provident rerum, perspiciatis fugiat tempora omnis.
                    Soluta consectetur nihil ad voluptate excepturi ullam dolore adipisci rem, sit quam ab maxime consequuntur praesentium. Beatae ducimus pariatur dolorum dolor blanditiis eum consequatur rerum, laudantium fuga ea, illum esse.</p>
                <p className='text-gray-500 text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error distinctio suscipit exercitationem itaque delectus molestias molestiae fugiat odio, magni odit commodi eum voluptates ea dignissimos neque eligendi optio architecto aperiam?
                    Facere, atque voluptate quis sapiente suscipit deserunt doloremque reprehenderit ipsum harum earum eligendi nulla nobis in hic, ab enim ratione sed? Dolorem officiis ullam quaerat cumque quae culpa. Quaerat, quos?
                    Aperiam placeat quos eaque. Deserunt inventore numquam maxime quis vitae nam, sit minus omnis at quia! Omnis beatae, itaque delectus similique, animi voluptas in iure, eveniet rem quae officia iste.</p>

                <p className='text-gray-500 text-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit dignissimos sapiente rerum illo ad nesciunt optio unde nisi aspernatur ratione quia laudantium at neque facilis laborum, possimus animi corrupti.
                    Nihil accusamus commodi corrupti laborum facilis adipisci earum! Tenetur et voluptas aut rem facere quis tempore! Facere mollitia fugit, eveniet dolor unde sunt quo quibusdam ratione. Quae architecto deserunt laborum.
                    Quam dolor delectus nemo magni, doloribus veritatis asperiores neque aut aspernatur mollitia obcaecati a blanditiis porro velit quis provident voluptas laboriosam maxime consequatur natus nam quaerat debitis iusto. Molestias, quibusdam.
                </p>
            </div>

            <hr className='my-3' />

            <h1 className='text-xl font-bold'>Already Holding Bitcoin ?</h1>

            <div className='flex flex-wrap'>
                {
                    [
                        { image: 'https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg', title: "Calculate your Profits" },
                        { image: 'https://media.istockphoto.com/id/1465618017/photo/businessmen-investor-think-before-buying-stock-market-investment-using-smartphone-to-analyze.jpg?s=612x612&w=0&k=20&c=YNEkfoME1jbz6FUJImxCQtaGZZntrf7u-Byxmgk4pOY=', title: "Calculate your tax liability" }
                    ].map((data, idx) => (
                        <div key={idx} className='md:p-3 py-3 lg:w-1/2' >
                            <div className={`${idx % 2 === 0 ? "bg-gradient-to-r from-sky-300 to-blue-500" : "bg-gradient-to-r from-orange-300 to-red-500"} p-3 rounded flex space-x-2`} >
                                <img src={data.image} alt="" className='md:w-1/2 w-28 h-auto rounded' />
                                <div className="text-white space-y-3 p-3 font-bold flex flex-col justify-evenly">
                                    <h1 className="md:text-2xl text-md">{data.title}</h1>
                                    <button className="p-1 md:px-3 md:py-1 text-sm border rounded bg-white text-black w-fit ms-auto">
                                        Check Now <EastIcon style={{fontSize: '1rem'}} />
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

            <hr className='my-3' />

            <p className='text-gray-500 text-md px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint quidem error similique veniam aliquid dicta magnam iure nihil unde, nam tempore obcaecati rem. A vitae reprehenderit eveniet culpa vel?
            Molestiae cumque nisi dolor id natus illum ratione quidem sunt, deserunt laboriosam iusto eum quasi veniam omnis, nihil sed vero magni dicta pariatur. Voluptas adipisci tempore aliquam delectus doloremque natus!
            Labore impedit quidem molestiae cupiditate recusandae quibusdam nobis vero provident nemo inventore exercitationem molestias sequi possimus quaerat quo doloremque, dolor perferendis velit debitis iste! Ab reiciendis similique consequuntur deserunt accusamus?</p>

        </section>
    )
}