import React, { useState } from 'react';
import { FaC, FaRegCircleCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import '../App.css';

function TextBoxNavigator ({ titles, subTitles, textBoxes, images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [understood, setUnderstood] = useState(false);
    const [misunderstood, setMisunderstood] = useState(false);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? textBoxes.length - 1 : prevIndex - 1));
        setUnderstood(true);
        setMisunderstood(false);
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === textBoxes.length - 1 ? 0 : prevIndex + 1));
        setUnderstood(false);
        setMisunderstood(false);
    };

    const checkMark = () => {
        setUnderstood(true);
    };

    const checkMisunderstood = () => {
        setMisunderstood(true);
    }

    return (
        <div className="flex flex-col mx-20 pb-8 gap-[2rem]">
            {/* content */}
            <h1 className='text-center text-2xl'>{titles[currentIndex]}</h1>
            <h1 className='text-center text-xl'>{subTitles[currentIndex]}</h1>
            <img className='mx-20' src={images[currentIndex]} alt={`Image ${currentIndex}`} />
            <p className='text-center'>{textBoxes[currentIndex]}</p>
            
            {/* navigation buttons */}
            <div className='inline-flex justify-around flex-wrap'>
                { 
                !understood ? 
                    <button className='button' onClick={checkMark}>
                        <FaRegCircleCheck className='my-1'/>
                    </button>
                :
                    <button className='button cursor-default hover:cursor-default opacity-[0.1]'>
                        <FaRegCircleCheck className='my-1'/>
                    </button>
                }

                { 
                !misunderstood ? 
                    <button className='button' onClick={checkMisunderstood}>
                        <IoCloseCircleOutline className='my-1'/>
                    </button>
                :
                    <button className='button cursor-default hover:cursor-default opacity-[0.1]'>
                        <IoCloseCircleOutline className='my-1'/>
                    </button>
                }
            </div>





            <div className='flex justify-around'>
                {
                currentIndex != 0 ?
                    <button className='button' onClick={goToPrevious}>
                        Prev Page
                    </button>
                :
                    <button className='button cursor-default hover:cursor-default opacity-[0]'>
                        Prev Page
                    </button>
                }
                {
                currentIndex != textBoxes.length - 1 ?
                    (
                        understood && !misunderstood && currentIndex != textBoxes.length - 1 ?
                            <button className='button' onClick={goToNext}>
                                Next Page
                            </button>
                        :
                            <button className='button opacity-[0.1]'>
                                Next Page
                            </button>
                    )
                :
                    <button className='cursor-default hover:cursor-default button opacity-0'>
                        Next Page
                    </button>
                }
            </div>
        </div>
    );
}

export default TextBoxNavigator;