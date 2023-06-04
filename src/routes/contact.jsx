import '../root.css'
import { AiFillGithub } from 'solid-icons/ai'
import { FaBrandsLinkedin } from 'solid-icons/fa'
import { ImMail } from 'solid-icons/im'

export default function Contact() {
  return (
    <div className='Home bg-inherit'>
            <div className='h-full w-full'>
                <h1 className="text-6xl text-center m-10 p-5">Contact Me?</h1>
                <div className="p-10 flex flex-col items-center justify-center">
                    <div className="m-5 flex flex-col p-10 justify-center">
                        <a href="https://www.linkedin.com/in/malladi-pradyumna" className="flex items-center mx-10 py-5 text-4xl h-24">
                        <FaBrandsLinkedin className="h-fit w-fit px-5" />
                        <span className="ml-2 px-10">https://www.linkedin.com/in/malladi-pradyumna</span>
                        </a>
                        <a href="https://github.com/MSSRPRAD" className="flex items-center mx-10 py-5 text-4xl h-24">
                        <AiFillGithub className="h-fit w-fit px-5" />
                        <span className="ml-2 px-10">https://github.com/MSSRPRAD</span>
                        </a>
                        <a href="mailto:f20210367@hyderabad.bits-pilani.ac.in" className="flex items-center mx-10 py-5 text-4xl h-24">
                        <ImMail className="h-fit w-fit px-5" />
                        <span className="ml-2 px-10">f20210367@hyderabad.bits-pilani.ac.in</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  );
}