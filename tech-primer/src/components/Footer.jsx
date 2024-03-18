import { FaHeart } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div
                className={'flex bg-black bg-opacity-25 border-t-2 border-white justify-around'}>
                <div className={'m-2'}>
                    <p className={'flex gap-2 text-white text-lg font-semibold'}>Made with <FaHeart className={'mt-1'}/> by:</p>
                    <ul className={'flex flex-row gap-4'}>
                        <li className={'text-white'}>
                            Alex Kefer
                        </li>
                        <li className={'text-white'}>
                            Abby Peterson
                        </li>
                        <li className={'text-white'}>
                            Josh Kim
                        </li>
                        <li className={'text-white'}>
                            Samuel Turney
                        </li>
                    </ul>
                </div>
                <div className={'flex flex-col gap-2 m-2'}>
                    <p className={'text-white text-right'}>
                        © 2021 Tech Primer
                    </p>
                    <p className={'text-white text-right text-sm'}>
                        Built for CSCI 426 as a mock implementation of our website, whilst not complete we believe it features majority of the design
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;