import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import styles from '../style'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex py-10 justify-between items-center navbar'>
            <img src='https://cdn.discordapp.com/attachments/1053710935212163072/1098133566191325184/tomLogo.png' alt="tomLogo" className='w-[154px] h-[154px]' />

            <div>
                <h3 className={`${styles.heading2}`}>Bank</h3>
            </div>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>



            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu}
                    alt='close or menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar