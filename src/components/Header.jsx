import NavBar from "./NavBar";
import { VsHome } from 'solid-icons/vs'
import { CgProfile } from 'solid-icons/cg'
import { BsLightning } from 'solid-icons/bs'
import { VsMail } from 'solid-icons/vs'
import { TbBrandBlogger } from 'solid-icons/tb'


export default function Header() {
    return (
    <div class='bg-current sm:h-auto md:h-2/5 lg:h-2/5 border-black border-b-4'>
        <NavBar routes={[
            { name: 'Home', icon: VsHome, redirect: '/website/' },
            { name: 'About', icon: CgProfile, redirect: '/website/about' },
            { name: 'Projects', icon: BsLightning, redirect: '/website/projects' },
            { name: 'Blog', icon: TbBrandBlogger, redirect: '/website/blog' },
            { name: 'Contact', icon: VsMail, redirect: '/website/contact' },
        ]} />
    </div>
    );
}