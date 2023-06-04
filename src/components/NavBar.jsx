export default function NavBar({ routes }) {
  return (
    <div class='h-full'>
        <ul class='shadow-black flex flex-col xl:flex-row justify-between items-center pb-5 px-5 lg:py-5'>
          {routes.map((route, index) => (
            <li key={index} class='hover:text-red-800  border-b-2 lg:border-b-4 hover:border-red-800'>
              <a href={`${route.redirect}`} class="text-xl hover:text-2xl hover:text-red-800 flex items-center space-x-2 m-2">
                <route.icon />
                <span class=''>{route.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
}