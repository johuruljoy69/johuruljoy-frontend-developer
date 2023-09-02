import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Transition } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = <>
        <NavLink className={({ isActive }) => (isActive ? 'tw-menu-active' : 'hover:underline py-2 px-2')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'tw-menu-active' : 'hover:underline py-2 px-2')} to="/contact">Contact Us</NavLink>


    </>
    return (
        <nav className=" bg-gray-800 w-full fixed z-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Medium and large navbar */}
                    <div className="container mx-auto flex items-center justify-between gap-10">
                        <div className="flex-shrink-0">
                            <Link to='/'><h2 className="text-3xl font-bold text-white">SpaceX</h2></Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-3 text-white">
                                {navItems}
                            </div>
                        </div>
                        <div className="flex-shrink-0 mx-5">
                            <button className="menu-btn">Shop Now</button>
                        </div>
                    </div>{/*end of  Medium and large navbar */}


                    {/* Mobile and small navbar */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="tw-menu text-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <FiMenu className="text-3xl" />
                            ) : (
                                <CgClose className="text-3xl" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-5 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col text-white">
                            {navItems}
                        </div>
                    </div>
                )}
            </Transition>{/* end of Mobile and small navbar */}
        </nav>

    );
};

export default Navbar;