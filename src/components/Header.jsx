import NavBar from "./NavBar";
import { AiOutlineHome } from 'solid-icons/ai'
import { CgProfile } from 'solid-icons/cg'
import { BsLightning } from 'solid-icons/bs'
import { RiDesignQuillPenFill } from 'solid-icons/ri'
import { VsMail } from 'solid-icons/vs'


export default function Header() {
    return (
    <div class='bg-gradient-to-r from-stone-600 to-white sm:h-auto md:h-2/5 lg:h-2/5 border-black border-b-4'>
        <NavBar routes={[
            { name: 'Home', icon: AiOutlineHome, redirect: '/website/' },
            { name: 'About', icon: CgProfile, redirect: '/website/about' },
            { name: 'Projects', icon: BsLightning, redirect: '/website/projects' },
            { name: 'Blog', icon: RiDesignQuillPenFill, redirect: '/website/blog' },
            { name: 'Contact', icon: VsMail, redirect: '/website/contact' },
        ]} />
    </div>
    );
}