import React from 'react';

export default function Team() {
    return (
        <div className='bg-white rounded-lg p-4'>
            <h1 className='text-xl font-bold'>Team</h1>

            <p className='py-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate, et delectus provident nulla blanditiis fugiat exercitationem tempore, commodi qui fuga suscipit, error quas vitae aperiam hic non distinctio architecto.</p>

            {
                [
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayln4lELdg993iKj4T4b5Wph76-aR1Ad3tw&s",
                        name: "John Smith",
                        position: "Software Engineer",
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprlAmFA7_3kOvot4NEKZLs2z8P4q7drpEbg&s",
                        name: "Elina Willianms",
                        position: "SDE HR",
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc55yNuvELmxy9mwEgQBCW69CIn7KXxWf4Ng&s",
                        name: "John Smith",
                        position: "Cyber Security Manager",
                    },
                ].map((team, idx) => (
                    <div key={idx} className="p-4">
                        <div className="md:flex space-y-5 md:space-y-0 items-center bg-sky-100 rounded py-4 px-6 md:space-x-6">
                            {/* Image and Details */}
                            <div className="flex flex-col items-center justify-center space-y-3 md:w-1/3">
                                <img
                                    src={team.image}
                                    alt={team.name}
                                    className="w-24 h-24 rounded-xl object-cover md:w-32 md:h-32"
                                />
                                <p className="font-bold text-center">{team.name}</p>
                                <p className="text-gray-500 text-sm text-center">{team.position}</p>
                            </div>

                            {/* Description */}
                            <div className="text-sm text-gray-800 md:w-2/3">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Necessitatibus assumenda temporibus explicabo harum laboriosam
                                    adipisci mollitia quis autem at distinctio deleniti, commodi
                                    molestiae dolores alias pariatur quam, sequi excepturi soluta!
                                </p>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores
                                    illum ducimus sit tenetur voluptatem minus nihil vel? Odio veritatis
                                    animi odit, excepturi nemo placeat corporis praesentium obcaecati
                                    officia quibusdam!
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}