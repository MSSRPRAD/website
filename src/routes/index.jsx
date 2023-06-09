import '../root.css'
export default function Home() {
  return (
    <main class="m-5">
      <div class='Home bg-inherit'>
            <div class='p-10'>
                <h1 class='text-6xl text-center mb-10 font-bold'>Welcome!</h1>
                <hr class='border-solid border-black py-10'></hr>
                <p class='text-2xl p-10'>This is my personal website which I will try to maintain regularly. I will be posting some blog articles over the next few months here and share some parts of my work and life.</p>
                <h1></h1>
                <p class='text-2xl p-10'>As for <strong>why</strong> have a personal website, I have thought about it and :</p>
                <ul class="list-disc text-xl px-10">
                    <li class='p-5'>It is good for your mental health to write frequently and you get to organize your thoughts more often.</li>
                    <li class='p-5'>It gives me an excuse to actually stop wasting time on mindless internet scrolling and actually do something productive instead.</li>
                    <li class='p-5'>It is too easy (and free!) to make and host one nowadays that there is no excuse to not have one. 
                    <p class='p-1 text-xl text-red-700'>Edit: I'm sorry it is not that easy to make and host one. React is spawn of Satan. Leaving this here for posterity.</p>
                    </li>
                    <li class='p-5'>Even if it amounts to nothing at least I have gained some technical knowledge making the blog.</li>
                </ul>
            </div>
        </div>
    </main>
  );
}
