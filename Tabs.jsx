'use client';
import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import ReactPlayer from 'react-player';

// Import your images
import keyIcon from "../public/Images/book.png";
import keyIcon2 from "../public/Images/voice.png";
import keyIcon3 from "../public/Images/artist.png";
import keyIcon4 from "../public/Images/audio.png";
import keyIcon5 from "../public/Images/ai.png";
import keyIcon6 from "../public/Images/vr.png";
import keyIcon7 from "../public/Images/text.png";

import offering from "../public/Images/view.png";
import offering2 from "../public/Images/view2.png";
import offering3 from "../public/Images/view3.png";
import offering4 from "../public/Images/view4.png";
import offering5 from "../public/Images/view5.png";
import offering6 from "../public/Images/view6.png";
import offering7 from "../public/Images/view7.png";
import button from "../public/Images/playbtn.png";

const ChevronIcon = ({ isOpen }) => (
    <svg className={`transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0898438 10.59L4.66984 6L0.0898438 1.41L1.49984 0L7.49984 6L1.49984 12L0.0898438 10.59Z" fill="#ACACAC" />
    </svg>
);

const CustomLearning = ({ activeTab }) => {
    const [openTab, setOpenTab] = useState(parseInt(activeTab) || 1);
    const [activeOfferIndex, setActiveOfferIndex] = useState(null);
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const [videoUrl, setVideoUrl] = useState('');
    const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleTabs = (tabNumber) => {
        setOpenTab(tabNumber);
    };

    const toggleOffers = (index) => {
        setActiveOfferIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const openModal = (url) => {
        setVideoUrl(url);
        setVideoLoading(true);
        setModal(true);
        setHasOpenedOnce(true);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setModal(false);
            setIsClosing(false);
            setVideoUrl('');
        }, 500);
    };

    useEffect(() => {
        if (!modal) {
            setVideoUrl('');
        }
    }, [modal]);

    const tabsData = [
        {
            id: 1,
            icon: keyIcon,
            title: "Dummy Title 1",
            img: offering,
            buttonContent: 'Dummy Button 1',
            videoUrl: 'https://videos.pexels.com/video-files/25649996/11903278_1920_1080_30fps.mp4',
            innerText: 'Dummy inner text for tab 1.'
        },
        {
            id: 2,
            icon: keyIcon2,
            title: "Dummy Title 2",
            img: offering2,
            buttonContent: 'Dummy Button 2',
            videoUrl: 'https://videos.pexels.com/video-files/26599523/11970283_2560_1440_24fps.mp4',
            innerText: 'Dummy inner text for tab 2.'
        },
        {
            id: 3,
            icon: keyIcon3,
            title: "Dummy Title 3",
            img: offering3,
            buttonContent: 'Dummy Button 3',
            videoUrl: 'https://videos.pexels.com/video-files/1448735/free-video-1920x1080.mp4',
            innerText: 'Dummy inner text for tab 3.'
        },
        {
            id: 4,
            icon: keyIcon4,
            title: "Dummy Title 4",
            img: offering4,
            buttonContent: 'Dummy Button 4',
            videoUrl: 'https://videos.pexels.com/video-files/853789/free-video-1920x1080.mp4',
            innerText: 'Dummy inner text for tab 4.'
        },
        {
            id: 5,
            icon: keyIcon5,
            title: "Dummy Title 5",
            img: offering5,
            buttonContent: 'Dummy Button 5',
            videoUrl: 'https://videos.pexels.com/video-files/1409899/free-video-1920x1080.mp4',
            innerText: 'Dummy inner text for tab 5.'
        },
        {
            id: 6,
            icon: keyIcon6,
            title: "Dummy Title 6",
            img: offering6,
            buttonContent: 'Dummy Button 6',
            videoUrl: 'https://videos.pexels.com/video-files/2859013/free-video-1920x1080.mp4',
            innerText: 'Dummy inner text for tab 6.'
        },
        {
            id: 7,
            icon: keyIcon7,
            title: "Dummy Title 7",
            img: offering7,
            buttonContent: 'Dummy Button 7',
            videoUrl: 'https://videos.pexels.com/video-files/1093662/free-video-1920x1080.mp4',
            innerText: 'Dummy inner text for tab 7.'
        },
    ];

    return (
        <div className="container relative" id="e-Learning">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-[60px]">
                <div className="col-span-1 lg:col-span-1"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-right">
                </div>
                <div className="col-span-1 lg:col-span-1"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-beige-100 rounded-t-3xl h-[30px] lg:h-[60px]">
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
                <div className="col-span-1 lg:col-span-10 border-left flex items-center justify-center border-bottom border-right">
                </div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-beige-100">
                <div className="col-span-1 lg:col-span-1"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-right border-bottom flex justify-center lg:justify-start">
                    <div className="rounded-lg border border-gray-300 bg-white text-Blue-200 text-base font-normal py-2.5 px-8 w-max">Tab content and tab accordion</div>
                </div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-beige-100">
                <div className="col-span-1 lg:col-span-1"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-right border-bottom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 ">
                        <div className="col-span-1 lg:col-span-6 border-right">
                            <h1 className="text-black-900 font-semibold text-xl sm:text-4xl py-4 lg:py-9 text-center lg:text-left">Tab content with responsive video player</h1>
                        </div>
                        <div className="col-span-1 lg:col-span-6">
                            <p className="text-sm sm:text-base font-medium text-gray-400 p-4 lg:p-12 text-center lg:text-left">Dummy description text goes here.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-beige-100 rounded-b-3xl">
                <div className="col-span-1 lg:col-span-1"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-right">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col-span-1 lg:col-span-5 border-right pb-[30px] lg:pb-[60px]">
                            {/* Desktop */}
                            <div className="hidden lg:block mt-8 w-full lg:w-[90%] space-y-3">
                                {tabsData.map((tab) => (
                                    <div
                                        key={tab.id}
                                        className={`bg-white rounded-xl py-5 px-4 cursor-pointer ${openTab === tab.id ? 'border border-primary' : ''}`}
                                        onClick={() => toggleTabs(tab.id)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="">
                                                <img className="h-10 w-10" src={tab.icon.src} alt="keyIcons" />
                                            </div>
                                            <div className="text-sm sm:text-lg font-medium text-black-900">{tab.title}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Mobile */}
                            <div className="block lg:hidden px-3 mt-10">
                                <div className="accordion">
                                    {tabsData.map((tab, index) => (
                                        <div key={index} className="border border-gray-300 rounded-xl mb-3 py-4 px-3 bg-white">
                                            <div className="flex items-center justify-between cursor-pointer rounded-xl" onClick={() => toggleOffers(index)}>
                                                <div className="rounded-xl cursor-pointer">
                                                    <div className="flex items-center gap-3">
                                                        <div>
                                                            <img className="h-10 w-10" src={tab.icon.src} alt="keyIcons" />
                                                        </div>
                                                        <div className="text-sm sm:text-lg font-medium text-black-900">{tab.title}</div>
                                                    </div>
                                                </div>
                                                <div className="w-5 h-5">
                                                    <ChevronIcon isOpen={activeOfferIndex === index} />
                                                </div>
                                            </div>
                                            <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${activeOfferIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                                <div className="flex justify-between items-center mt-2.5">
                                                    <div className="overflow-hidden relative">
                                                        <div className="absolute pl-5 lg:pl-7 pb-4 lg:pb-16 bottom-0 w-full pt-[100px] img-inside-wrapper">
                                                            <div className="text-sm font-normal w-max text-black-900 py-1 px-2.5 rounded-xl bg-white">
                                                                {tab.buttonContent}
                                                            </div>
                                                            <div className="text-white font-medium text-sm sm:text-base mt-6 w-full sm:w-4/5">
                                                                {tab.innerText}
                                                            </div>
                                                        </div>
                                                        <img className="h-auto w-full" src={tab.img.src} alt="banner" />

                                                        <button onClick={() => openModal(tab.videoUrl)} className="play-button w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                                            <img src={button.src} alt="Play Button" className="play-icon" />
                                                            <div className="wave-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                                <div className="wave"></div>
                                                                <div className="wave"></div>
                                                                <div className="wave"></div>
                                                            </div>
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-7 hidden lg:flex justify-end pb-[60px]">
                            <div className="block tab-content tab-space">
                                {tabsData.map((tab) => (
                                    <div key={tab.id} className={openTab === tab.id ? 'block' : 'hidden'}>
                                        <div className="overflow-hidden relative">
                                            <div className="absolute pl-5 lg:pl-7 pb-4 lg:pb-16 bottom-0 w-full pt-[100px] img-inside-wrapper">
                                                <div className="text-sm font-normal w-max text-black-900 py-1 px-2.5 rounded-xl bg-white">
                                                    {tab.buttonContent}
                                                </div>
                                                <div className="text-white font-medium text-sm sm:text-base mt-6 w-full sm:w-4/5">
                                                    {tab.innerText}
                                                </div>
                                            </div>
                                            <img src={tab.img.src} alt="banner" className="h-[655px] w-[600px] mt-8" />

                                            <button onClick={() => openModal(tab.videoUrl)} className="play-button w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                                <img src={button.src} alt="Play Button" className="play-icon" />
                                                <div className="wave-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                    <div className="wave"></div>
                                                    <div className="wave"></div>
                                                    <div className="wave"></div>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1"></div>
            </div>
            {modal && (
                <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999]">
                    <div
                        className={`modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1] ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
                        onClick={closeModal}
                    ></div>
                    <div className={`modal-content relative bg-white p-0 rounded-lg w-4/5 max-w-[800px] z-[2] ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}>
                        <IoCloseOutline
                            className="modal-close absolute top-[10px] right-[10px] cursor-pointer text-xl text-black-900 z-[1000] bg-white rounded-full flex justify-center items-center border"
                            onClick={closeModal}
                        />
                        <div className="video-player-container relative w-full">
                            {(videoLoading || !hasOpenedOnce) && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                                </div>
                            )}
                            <ReactPlayer
                                url={videoUrl}
                                width="100%"
                                height="100%"
                                controls
                                playing={!videoLoading}
                                onReady={() => setVideoLoading(false)}
                                onBuffer={() => setVideoLoading(true)}
                                onBufferEnd={() => setVideoLoading(false)}
                                config={{
                                    file: {
                                        attributes: {
                                            style: { opacity: videoLoading ? 1 : 1, transition: 'opacity 0.9s ease-in-out' }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomLearning;