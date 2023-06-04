import ProjectCard from '../components/ProjectCard';

export default function About() {
    return (
        <div class = 'bg-inherit p-10'>
            <h1 className='text-6xl text-center mb-10 font-bold pt-10'>Projects</h1>
            <hr class='border-solid border-black py-10'></hr>
            <div className='flex flex-row flex-wrap justify-center'>
                <ProjectCard name="IndicScriptSwap" description='An application that transliterates text between various Indic and Roman scripts quickly. The program is compiled to wasm for a demo and is available as a Rust Crate' techStack={['Rust', 'Wasm']} githubUrl='https://github.com/MSSRPRAD/IndicScriptSwap' note='None' />
                <ProjectCard name="SanskritMetresRust" description='An application that Identifies the scheme of a Sanskrit Verse. Identifies both matra based and vrtta based metres. Also uses levenshtein distance to identify the closest scheme for vrtta based metres.' techStack={['Rust']} githubUrl='https://github.com/MSSRPRAD/SanskritMetresRust' note='Needs to be rewritten as code is too unorganized' />
                <ProjectCard name="Personal Website" description='My personal website' techStack={['SolidJS', 'Javascript', 'TailwindCSS']} githubUrl='https://github.com/MSSRPRAD/Blog' note='Styling could be made better.' />
                <ProjectCard name="ML Models" description='Implemented a few ML classification Models using only numpy and pandas python libraries. It was a group project done together with Dhruv Arora as part of our Machine Learning course.' techStack={['Python', 'Numpy', 'Pandas', 'Matplotlib']} githubUrl='https://github.com/MSSRPRAD/ml-models' note='Need to fix and add naive-bayes also to repo.' />
            </div>
        </div>       
            
    );
};