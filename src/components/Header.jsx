import NavBar from "./NavBar";
import { VsHome } from 'solid-icons/vs'
import { CgProfile } from 'solid-icons/cg'
import { BsLightning } from 'solid-icons/bs'
import { VsMail } from 'solid-icons/vs'
import { TbBrandBlogger } from 'solid-icons/tb'
import { createSignal, onCleanup } from 'solid-js';
import { Collapse } from 'solid-collapse';
import { FiMenu } from 'solid-icons/fi'

export default function Header() {
    const [isOpen, setIsOpen] = createSignal(true);

    // Clean up the state when the component is unmounted
    onCleanup(() => {
        setIsOpen(false);
    });

    const toggleNavbar = () => {
        setIsOpen(!isOpen());
    };

    return (
    <div class="bg-current sm:h-auto md:h-2/5 lg:h-2/5 border-black border-b-4">
        <button class="lg:hidden px-4 py-4 text-white" onClick={toggleNavbar} >
          <FiMenu></FiMenu>
        </button>
        <Collapse value={isOpen()} class="my-transition">
        <NavBar routes={[
            { name: 'Home', icon: VsHome, redirect: '/website/' },
            { name: 'About', icon: CgProfile, redirect: '/website/about' },
            { name: 'Projects', icon: BsLightning, redirect: '/website/projects' },
            { name: 'Blog', icon: TbBrandBlogger, redirect: '/website/blog' },
            { name: 'Contact', icon: VsMail, redirect: '/website/contact' },
        ]} />
        </Collapse>
    </div>
    );
}