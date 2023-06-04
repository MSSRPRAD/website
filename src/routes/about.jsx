export default function About() {
  return (
    <main class="bg-inherit">
      <div className='p-10'>
        <h1 className='text-6xl text-center mb-10 font-bold'>About Myself!</h1>
        <hr class='border-solid border-black py-10'></hr>
        <div className='flex justify-center items-center'>
        <img src="https://github.com/MSSRPRAD/website/blob/main/src/assets/pradyumna.jpeg?raw=true" alt="Profile" className='sm:h-3/5 sm:w-4/5 lg:h-1/5 lg:w-2/5 rounded-full pb-10' />    
        </div>
        <p class='text-2xl px-10'>I am Pradyumna, a third year undergraduate computer science student studying in the
            Birla Institute of Science and Technology in Hyderabad, India. I wish
            to learn some technical stacks that have a great future in the industry. 
            <br></br><br></br>
            As for what I am doing currently, I am trying to get better at Python and Rust and
            also (unwillingly) learning a bit of DSA and Javascript on the side.
        </p>
        <h1></h1>
        <p class='text-2xl px-10 pt-10'>Interests (in no particular order):</p>
        <ul className="list-disc text-xl italic py-5 px-20">
            <li>Machine Learning</li>
            <li>Modern Fullstack Web Development</li>
            <li>Linux</li>
            <li>NLP</li>
            <li>Rust & Python</li>
        </ul>
        <br></br>
        <p class='text-2xl px-10'>Some relevant courses that I have pursued in my college:</p>
        <ul className="list-disc text-xl italic py-5 px-20">
            <li>Machine Learning</li>
            <li>Data Structures and Algorithms</li>
        </ul>
    </div>
    </main>
  );
}
