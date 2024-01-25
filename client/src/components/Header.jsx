import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSearch } from "react-icons/fa";




const Header = () => {
    const location = useLocation();
    const path = location.pathname
    return (
        <Navbar className='border-b-2'>
            <Link to={'/'} className='whitespace-nowrap text-sm self-center sm:text-xl font-semibold dark:text-white'>
                <span className='bg-cyan-600 hover:bg-cyan-800 px-2 py-1 rounded-lg text-white'>Boda&#39;s</span>Blog
            </Link>
            <form>
                <TextInput type='text' placeholder='Search...' rightIcon={FaSearch} className='hidden lg:inline' />
            </form>
            <Button className='w-12 h-10 lg:hidden' color={'cyan'}>
                <FaSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray'>
                    <FaMoon />
                </Button>
                <Link to={'/signin'}>
                    <Button outline gradientDuoTone="cyanToBlue">
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link as={'div'} active={path === '/'} >
                    <Link to={'/'}>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link as={'div'} active={path === '/about'} >
                    <Link to={'/about'}>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link as={'div'} active={path === '/projects'} >
                    <Link to={'/projects'}>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header