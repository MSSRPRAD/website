export default function NavBar(props) {
    return (
      <div className="bg-neutral-700 rounded-sm m-5 lg:w-2/5 border-black">
        <div className="p-4">
          <h3 className="text-2xl text-center font-semibold text-stone-100">{props.name}</h3>
          <p className="text-stone-300 pt-2 text-xl">{props.description}</p>
          <p className="text-2xl text-center font-semibold text-white pt-2">Tech Stack:</p>
          <ul className="list-disc text-xl italic px-5 py-5">
            {props.techStack.map((tech) => (
                <li key={tech} className='text-xl text-stone-100'>{tech}</li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center mt-4">
          <a
            href={props.githubUrl}
            className="text-center mt-4 inline-block bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            View on GitHub
          </a>
          <div className='container'>
            <p className="text-sm text-center text-red-100 pt-5">Note: {props.note}</p>
          </div>
          </div>
        </div>
      </div>
    );
};