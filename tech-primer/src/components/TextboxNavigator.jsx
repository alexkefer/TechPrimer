import React, { useState, useEffect } from 'react';
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
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
        prompt("What are you not able to understand");
    }

    useEffect(() => {
        const handleResize = () => {
            const h = Math.min(window.innerWidth, window.innerHeight) * 0.5;
            document.getElementById('dynamic-size').style.height = h + 'px';
        };

        window.addEventListener('resize', handleResize);
        window.dispatchEvent(new Event('resize'));

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    // // Trigger the resize event initially to set the initial width
    // window.dispatchEvent(new Event('resize'));

    return (
        <div className="flex flex-col mx-20 pb-8 gap-[2rem]">
            {/* content */}
            <h1 className='text-center text-6xl font-bold'>{titles[currentIndex]}</h1>
            <h1 className='text-center text-3xl'>{subTitles[currentIndex]}</h1>
            <img id='dynamic-size' className='mx-auto' src={images[currentIndex]} alt={`Image ${currentIndex}`}/>
            <p className='text-center text-2xl whitespace-pre-line bg-white bg-opacity-50 rounded border-8 border-transparent outline outline-1'>{textBoxes[currentIndex]}</p>
            
            {/* check for understanding buttons */}
            <div className='flex justify-around text-2xl'>
                {
                !misunderstood ?
                    !understood ?
                        <button className='button' onClick={checkMisunderstood}>
                            <FaRegCircleXmark className='my-1'/>
                        </button>
                    :
                        <button className='button cursor-default hover:cursor-default opacity-[0.1]'>
                            <FaRegCircleXmark className='my-1'/>
                        </button>
                :
                    <button className='button cursor-default hover:cursor-default opacity-[0.1]'>
                        <FaRegCircleXmark className='my-1'/>
                    </button>
                }
                {
                !understood ?
                    !misunderstood ?
                        <button className='button' onClick={checkMark}>
                            <FaRegCircleCheck className='my-1'/>
                        </button>
                    :
                    <button className='button cursor-default hover:cursor-default opacity-[0.1]'>
                        <FaRegCircleCheck className='my-1'/>
                    </button>
                :
                    <button className='button cursor-default hover:cursor-default opacity-[0.1]'>
                        <FaRegCircleCheck className='my-1'/>
                    </button>
                }
            </div>

            {/* navigation buttons */}
            <div className='flex justify-around text-2xl'>
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
                        (understood || misunderstood) && currentIndex != textBoxes.length - 1 ?
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