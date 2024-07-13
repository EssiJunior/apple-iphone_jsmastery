"use client"

import { appleDarkImg, appleImg, bagDarkImg, bagImg, searchDarkImg, searchImg } from '../utils';
import { navLists } from '../constants';
import Image from 'next/image';
import { darkTheme, lightTheme } from '../utils/theme';
import { useTheme } from 'styled-components'

const Navbar = ({ toggleTheme }) => {

    const theme = useTheme()
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">

                <Image
                    src={theme.tag === 'light' ? appleDarkImg : appleImg}
                    width={14}
                    height={18}
                    alt='Apple'
                />

                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav) => (
                        <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                            {nav}
                        </div>
                    ))}
                </div>

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    {
                        theme.tag === 'light' ?

                            <Image
                                src='/assets/theme/dark.svg'
                                alt='logo'
                                width={20}
                                height={20}
                                className='cursor-pointer z-20'
                                onClick={() => toggleTheme(darkTheme)}
                            /> :
                            <Image
                                src='/assets/theme/light.svg'
                                alt='logo'
                                width={20}
                                height={20}
                                className='cursor-pointer z-20'
                                onClick={() => toggleTheme(lightTheme)}
                            />

                    }
                    <Image
                        src={theme.tag === 'light' ? searchDarkImg: searchImg}
                        width={18}
                        height={18}
                        alt='search'
                    />
                    <Image
                        src={theme.tag === 'light' ? bagDarkImg: bagImg}
                        width={18}
                        height={18}
                        alt='bag'
                    />
                </div>
            </nav>
        </header>
    )
}

export default Navbar