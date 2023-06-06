import '../root.css'
import { AiFillGithub } from 'solid-icons/ai'
import { FaBrandsLinkedin } from 'solid-icons/fa'
import { ImMail } from 'solid-icons/im'

export default function Contact() {
  return (
    <div className='Home bg-inherit'>
            <div className='p-10'>
                <h1 className="text-6xl text-center mb-10 font-bold">Contact Me?</h1>
                <hr class='border-solid border-black py-10'></hr>
                <div className="p-10 flex items-center overflow-scroll">
                    <div className="p-5">
                        <a href="https://www.linkedin.com/in/malladi-pradyumna" className="flex items-center mx-10 py-5 text-4xl h-24">
                        <FaBrandsLinkedin className="h-fit w-fit" />
                        <span className="ml-2 px-10 hover:text-orange-800 text-4xl py-5">https://www.linkedin.com/in/malladi-pradyumna</span>
                        </a>
                        <a href="https://github.com/MSSRPRAD" className="flex items-center mx-10 py-5 text-4xl h-24">
                        <AiFillGithub className="h-fit w-fit" />
                        <span className="ml-2 px-10 hover:text-orange-800 text-4xl py-5">https://github.com/MSSRPRAD</span>
                        </a>
                        <a href="mailto:f20210367@hyderabad.bits-pilani.ac.in" className="flex items-center mx-10 py-5 text-4xl h-24">
                        <ImMail className="h-fit w-fit" />
                        <span className="ml-2 px-10 hover:text-orange-800 text-4xl py-5">f20210367@hyderabad.bits-pilani.ac.in</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  );
}