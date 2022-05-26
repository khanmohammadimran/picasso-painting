import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h2 className="font-bold normal-case text-4xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">Our Gallery</h2>
            <div className="bg-cover bg-center bg-no-repeat h-full bg-fixed">
                <div>
                    <h2 className="font-raleway normal-case text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">Follow us on instagram to see more amazing paintings!</h2>
                    <div className="flex justify-center items-center py-8">
                        <div className="bg-neutral text-neutral-content bg-gradient-to-r from-purple-400 to-pink-600 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">
                            <div className="grid grid-cols-6 col-span-2   gap-2  ">
                                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img className="h-full w-full object-cover "
                                        src="https://i.ibb.co/LS2C8MG/colored-tile-pattern-street.jpg" alt="" />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img className="h-full w-full object-cover  "
                                        src="https://i.ibb.co/h9pQCQV/buckets-paint-floor.jpg" alt="" />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img className="h-full w-full object-cover "
                                        src="https://i.ibb.co/5rrZrPb/painting-walls-pink.jpg" alt="" />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img className="h-full w-full object-cover "
                                        src="https://i.ibb.co/YPwT2SP/rhondak-native-florida-folk-artist-Yc7-Otf-Fn-0-unsplash.jpg" alt="" />
                                </div>
                                <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <div
                                        className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                                        + 23
                                    </div>
                                    <img className="h-full w-full object-cover "
                                        src="https://i.ibb.co/FhJH2wq/handsome-young-man-painting-wall-blue.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Gallery;