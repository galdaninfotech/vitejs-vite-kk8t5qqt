import './App.css'

import One from  '/1.jpg'
import Two from  '/2.jpg'
import Three from  '/3.jpg'
import Four from  '/4.jpg'
import Five from  '/5.jpg'

import Carousel from './carousel'
import Carousel2 from './carousel/carousel2'
import ProfessionalCarousel from './components/ProfessionalCarousel';
// import SwiperCarousel1 from './components/SwiperCarousel1';

const slides = [
  {
    src: 'https://picsum.photos/1500/500',
    alt: 'First Slide',
    label: 'Slide 1',
    description: 'Description for slide 1',
  },
  {
    src: 'https://picsum.photos/1500/500',
    alt: 'Second Slide',
    label: 'Slide 2',
    description: 'Description for slide 2',
  },
  // Add more slides here...
];

function App() {
  return (
    <>

      <div className="table w-full bg-primary mb-6 p-4 ...">
        <div className="table-header-group ...">
          <div className="table-row">
            <div className="table-cell text-left ...">Song</div>
            <div className="table-cell text-left ...">Artist</div>
            <div className="table-cell text-left ...">Year</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell text-left ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
            <div className="table-cell text-left ...">Malcolm Lockyer</div>
            <div className="table-cell ...">1961</div>
          </div>
          <div className="table-row">
            <div className="table-cell text-left ...">Witchy Woman</div>
            <div className="table-cell text-left ...">The Eagles</div>
            <div className="table-cell ...">1972</div>
          </div>
          <div className="table-row">
            <div className="table-cell text-left ...">Shining Star</div>
            <div className="table-cell text-left ...">Earth, Wind, and Fire</div>
            <div className="table-cell ...">1975</div>
          </div>
        </div>
      </div>

    <div className="columns-2 mb-6 p-2">
      <p>1. Well, let me tell you something, ...</p>
      <p className="break-before-column">2. Sure, go ahead, laugh...</p>
      <p>3. Maybe we can live without...</p>
      <p>4. Look. If you think this is...</p>
    </div>


    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-200 mb-6 p-4">
      <div className="bg-yellow-200 h-14 flex items-center justify-center">01</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">02</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">03</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">04</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">05</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">06</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">07</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">08</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">09</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">10</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">11</div>
      <div className="bg-yellow-200 h-14 flex items-center justify-center">12</div>
    </div>

    <div className="grid grid-cols-3 flow-row-dense flow-col-dense gap-4 bg-gray-200 mb-6 p-4">
      <div className="bg-yellow-200 h-20 flex items-center justify-center">01</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">02</div>
      <div className="row-span-2 bg-yellow-200 h-20 flex items-center justify-center">03</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">04</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">05</div>
      <div className="col-span-2 bg-yellow-200 h-20 flex items-center justify-center">06</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">07</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">08</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">09</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">10</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">11</div>
      <div className="col-span-2 bg-yellow-200 h-20 flex items-center justify-center">12</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">13</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">14</div>
    </div>

    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 mb-6 p-4 ...">
      <div className="col-span-2 bg-yellow-200 h-20 ">01</div>
      <div className="col-span-2 bg-yellow-200 h-20 ">02</div>
      <div className="row-span-2 bg-yellow-200 h-20 flex items-center justify-center">03</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">04</div>
      <div className="bg-yellow-200 h-20 flex items-center justify-center">05</div>
    </div>


    <div className="flex justify-between mb-6 ...">
      <div className="order-3 size-14 bg-gray-200 flex items-center justify-center">01</div>
      <div className="order-1 size-14 bg-gray-200 flex items-center justify-center">02</div>
      <div className="order-2 size-14 bg-gray-200 flex items-center justify-center">03</div>
    </div>

    <div className="flex mb-6 gap-2 ...">
      <div className="size-14 flex-none bg-gray-200 flex items-center justify-center ...">01</div>
      <div className="size-14 grow bg-gray-200 flex items-center justify-center ...">02</div>
      <div className="size-14 flex-none bg-gray-200 flex items-center justify-center ...">03</div>
    </div>

    <div className="flex mb-6 gap-2">
      <div className="w-14 flex-none bg-gray-200 ...">01</div>
      <div className="w-64 flex-1 bg-gray-200 ...">02</div>
      <div className="w-32 flex-1 bg-gray-200 ...">03</div>
    </div>

    <div className="flex flex-row flex gap-2 mb-6">
      <div className="basis-12 bg-pink-200">01</div>
      <div className="basis-24 bg-pink-200">02</div>
      <div className="basis-36 bg-pink-200">03</div>
      <div className="basis-48 bg-pink-200">04</div>
      <div className="basis-60 bg-pink-200">05</div>
    </div>

    <div className="container mx-auto flex gap-2 mb-6">
      <div className="min-w-3/4 bg-yellow-200 ...">min-w-3/4</div>
      <div className="w-full bg-yellow-200 ...">w-full</div>
    </div>

    <div className="w-20 flex flex-col gap-2 mb-6 bg-gray-200 ...">
      <div className="min-w-80 bg-pink-200 ...">min-w-80</div>
      <div className="min-w-64 bg-pink-200 ...">min-w-64</div>
      <div className="min-w-48 bg-pink-200 ...">min-w-48</div>
      <div className="min-w-40 bg-pink-200 ...">min-w-40</div>
      <div className="min-w-32 bg-pink-200 ...">min-w-32</div>
      <div className="min-w-24 bg-pink-200 ...">min-w-24</div>
      <div className="min-w-12 max-w-16 bg-pink-200 ...">12</div>
    </div>


    <div className="flex flex-col gap-2 mb-6">
      <div className="w-screen bg-orange-200 ...">w-screen</div>
      <div className="w-full bg-orange-200 ...">w-full</div>
      <div className="w-xl bg-orange-200 ...">w-xl</div>
      <div className="w-lg bg-orange-200 ...">w-lg</div>
      <div className="w-md bg-orange-200 ...">w-md</div>
      <div className="w-sm bg-orange-200 ...">w-sm</div>
      <div className="w-xs bg-orange-200 ...">w-xs</div>
      <div className="w-2xs bg-orange-200 ...">w-2xs</div>
      <div className="w-3xs bg-orange-200 ...">w-3xs</div>
    </div>

      <div className="flex mb-6 gap-2 ...">
        <div className="w-1/2 bg-cyan-300 ...">w-1/2</div>
        <div className="w-1/2 bg-cyan-300 ...">w-1/2</div>
      </div>
      <div className="flex mb-6 gap-2 ...">
        <div className="w-2/5 bg-cyan-300 ...">w-2/5</div>
        <div className="w-3/5 bg-cyan-300 ...">w-3/5</div>
      </div>
      <div className="flex mb-6 gap-2 ...">
        <div className="w-1/3 bg-cyan-300 ...">w-1/3</div>
        <div className="w-2/3 bg-cyan-300 ...">w-2/3</div>
      </div>
      <div className="flex mb-6 gap-2 ...">
        <div className="w-1/4 bg-cyan-300 ...">w-1/4</div>
        <div className="w-3/4 bg-cyan-300 ...">w-3/4</div>
      </div>
      <div className="flex mb-6 gap-2 ...">
        <div className="w-1/5 bg-cyan-300 ...">w-1/5</div>
        <div className="w-4/5 bg-cyan-300 ...">w-4/5</div>
      </div>
      <div className="flex mb-6 gap-2 ...">
        <div className="w-1/6 bg-cyan-300 ...">w-1/6</div>
        <div className="w-5/6 bg-cyan-300 ...">w-5/6</div>
      </div>
      <div className="w-full bg-cyan-300 mb-6...">w-full</div>

    <div className="flex flex-col gap-2">
      <div className="w-96 bg-cyan-300 ...">w-96</div>
      <div className="w-80 bg-cyan-300 ...">w-80</div>
      <div className="w-64 bg-cyan-300 ...">w-64</div>
      <div className="w-48 bg-cyan-300 ...">w-48</div>
      <div className="w-40 bg-cyan-300 ...">w-40</div>
      <div className="w-32 bg-cyan-300 ...">w-32</div>
      <div className="w-24 bg-cyan-300 ...">w-24</div>
    </div>

    <p>Higher resolution means more than just a better-quality image. With a
    Retina 6K display, <a className="text-blue-600 after:content-['_↗']" href="...">
    Pro Display XDR</a> gives you nearly 40 percent more screen real estate than
    a 5K display.</p>

    <p className="indent-8">So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>


    <ul className="list-image-[url(https://picsum.photos/20/20)]">
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
    </ul>

    <ul className="list-inside">
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
    </ul>
    <ul className="list-outside">
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
    </ul>
    

    <ul className="list-disc">
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
    </ul>
    <ol className="list-decimal">
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
    </ol>
    <ul className="list-none">
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      <li>Now this is a story all about how, my life got flipped-turned upside down</li>
    </ul>
    <ol className="list-[upper-roman] ...">
      <li>5 cups chopped Porcini mushrooms roman</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>5 cups chopped Porcini mushrooms</li>
    </ol>

    <article className='mb-6 text-left'>
      <time className='text-left'>Mar 10, 2020</time>
      <h2 className='text-left'>Boost your conversion rate</h2>
      <p className="line-clamp-3">
        Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
        sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
        dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
        ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
        enim.
      </p>
      <div className='flex items-center gap-4 justify-end'>
        <img className="rounded-full mt-2" src="https://picsum.photos/40/40" />
        <span className="text-md">Lindsay Walton</span>
      </div>
    </article>

    <div className="bg-gray-200 mb-6 p-4">
      <p className="underline">The quick brown fox...</p>
      <p className="line-through">The quick brown fox...</p>
      <p className="overline">The quick brown fox...</p>
      <p className="font-light md:font-bold transition duration-1000...">The quick brown fox ...</p>
      <p className="font-normal hover:underline ...">The quick <a class="underline decoration-sky-500">My Company, Inc</a> brown fox cc...</p>
      <p className="font-medium ...">The quick brown fox ...</p>
      <p className="font-semibold ...">The quick brown fox ...</p>
      <p className="font-bold ...">The quick brown fox ...</p>
      <p className="font-[800] ...">The quick brown fox ...</p>
      <p className="font-[1000] ...">The quick brown fox ...</p>

      <p>
        I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings
        at <a className="underline decoration-sky-500">My Company, Inc</a>. Outside
        of work, I like to <a className="underline decoration-pink-500">watch pod-racing</a>
        and have <a className="underline decoration-indigo-500">light-saber</a> fights.
      </p>

      <p className="underline decoration-1">The quick brown fox...</p>
      <p className="underline decoration-2">The quick brown fox...</p>
      <p className="underline decoration-4">The quick brown fox...</p><br />

      <p className="underline underline-offset-1">The quick brown fox...</p>
      <p className="underline underline-offset-2">The quick brown fox...</p>
      <p className="underline underline-offset-4">The quick brown fox...</p>
      <p className="underline underline-offset-[20px]">The quick brown fox... 200000</p><br />

      <p className="capitalize">capitalize gfdfg The quick brown fox ...</p>
      <p className="uppercase">The quick brown fox ...</p>
      <p className="lowercase">The quick brown fox ...</p>
      <p className="normal-case">The quick brown fox ...</p><br />

      <p className="underline decoration-solid">The quick brown fox...</p>
      <p className="underline decoration-double">The quick brown fox...</p>
      <p className="underline decoration-dotted">The quick brown fox...</p>
      <p className="underline decoration-dashed">The quick brown fox...</p>
      <p className="underline decoration-wavy">The quick brown fox...</p><br />

      <p className="font-stretch-extra-condensed">The quick brown fox...</p>
      <p className="font-stretch-condensed">The quick brown fox...</p>
      <p className="font-stretch-normal">The quick brown fox...</p>
      <p className="font-stretch-expanded">The quick brown fox...</p>
      <p className="font-stretch-extra-expanded">The quick brown fox...</p>
      <p className="ordinal ...">1st</p>
      <p className="slashed-zero ...">0</p>
      <p className="diagonal-fractions ...">1/2 of 3/4 5/6</p><br />

      <p className="tracking-tight ...">The quick brown fox ...</p>
      <p className="tracking-normal ...">The quick brown fox ...</p>
      <p className="tracking-wide ...">The quick brown fox ...</p><br />
    </div>

    <div className="bg-gray-200 mb-6 p-4">
      <p className="font-sans italic md:not-italic ...">The quick brown fox ...</p>
      <p className="font-serif ...">The quick brown fox ...</p>
      <p className="font-mono ...">The quick brown fox ...</p>
      <p className="font-(family-name: --my-font) ...">The quick brown fox ...</p>
      <p className="font-[Open_Sans] ...">The quick brown fox ...</p>
      <p className="font-display ...">The quick brown fox ...</p>
      <p className="font-oswald ...">The quick brown fox ...</p><br />

      <p className="subpixel-antialiased ...">The quick brown fox ...</p>
      <p className="antialiased ...">The quick brown fox ...</p><br />
    </div>

    <div className="bg-gray-200 mb-6 p-4">
      <p className="font-sans text-base ...">The quick brown fox ...</p>
      <p className="font-serif text-md ...">The quick brown fox ...</p>
      <p className="font-mono text-4xl ...">The quick brown fox ...</p>
      <p className="font-(family-name: --my-font) ...">The quick brown fox ...</p>
      <p className="font-[Open_Sans] ...">The quick brown fox ...</p>
      <p className="font-display ...">The quick brown fox ...</p>
      <p className="font-oswald ...">The quick brown fox ...</p>
      <p className="text-sm ...">The quick brown fox ...</p>
      <p className="text-base ...">The quick brown fox ...</p>
      <p className="text-lg ...">The quick brown fox ...</p>
      <p className="text-xl ...">The quick brown fox ...</p>
      <p className="text-2xl ...">The quick brown fox ...</p><br />

      <p className="text-sm/6 ...">So I started to walk into the water...</p>
      <p className="text-sm/7 ...">So I started to walk into the water...</p>
      <p className="text-sm/8 ...">So I started to walk into the water...</p>
      <p className="text-tiny ...">So I started to walk into the water...</p><br />
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6 p-4 bg-gray-200">
      <div className="size-[100px] bg-[url(https://picsum.photos/100/100)] bg-top-left"></div>
      <div className="size-[100px] bg-[url(https://picsum.photos/100/100)] bg-top"></div>
      <div className="size-[100px] bg-[url(https://picsum.photos/100/100)] bg-top-right"></div>
      <div className="size-[100px] bg-[url(https://picsum.photos/100/100)] bg-left"></div>
      <div className="size-[100px] bg-[url(https://picsum.photos/100/100)] bg-center"></div>
      <div className="size-[100px] bg-[url(https://picsum.photos/100/100)] bg-right"></div>
      <div className="size-[100px] bg-[url(https://picsum.photos/100/100)] bg-bottom-left"></div>
      <div className="size-[100px] bg-[url(https://picsum.photos/100/100)] bg-bottom"></div>
      <div className="size-[100px] bg-[url(https://picsum.photos/100/100)] bg-bottom-right"></div>
    </div>

    <div className="flex justify-evenly mb-6 p-4 bg-gray-200">
      <div className="size-24 border-4 bg-[url(https://picsum.photos/100/100)] bg-origin-border p-8 ..."></div>
      <div className="size-24 border-4 bg-[url(https://picsum.photos/100/100)] bg-origin-padding p-8 ..."></div>
      <div className="size-24 border-4 bg-[url(https://picsum.photos/100/100)] bg-origin-content p-8 ..."></div>
    </div>

    <div className="flex justify-evenly mb-6 p-4 bg-gray-200">
      <div className="size-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
      <div className="size-24 bg-gradient-to-r from-yellow-500 via-orange-500 to-green-500 ..."></div>
      <div className="size-24 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-500 ..."></div>
      <div className="size-24 bg-gradient-to-r from-pink-500 via-cyan-500 via-green-500 via-pink-500 to-green-500 ..."></div>
      <div className="size-24 bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>
    </div>

    <div className="flex justify-evenly mb-6 p-4 bg-gray-200">
      <div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-90%"></div>
      <div className="size-24 rounded-full bg-conic-180 from-red-600 via-red-50 to-red-600"></div>
      <div className="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
    </div>

    <div className="flex justify-evenly mb-6 p-4 bg-gray-200">
      <div className="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
      <div className="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
      <div className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
      <div className="size-18 rounded-full bg-radial-[at_25%_25%] from-yellow to-pink-900 to-75% "></div>
    </div>

    <div className="flex justify-evenly mb-6 p-4 bg-gray-200">
      <div className="bg-linear-to-r from-cyan-500 to-blue-500 size-[80px]"></div>
      <div className="bg-linear-to-r from-cyan-500 to-blue-500 size-[80px]"></div>
      <div className="bg-linear-to-t from-sky-500 to-indigo-500 size-[80px]"></div>
      <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 size-[80px]"></div>
      <div className="bg-linear-65 from-purple-500 to-pink-500 size-[80px]"></div>
      <div className="bg-linear-to-r from-red-500 to-yellow-500 hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-500 size-[80px] transition duration-1000"></div>
    </div>

    <div className="flex justify-evenly mb-6 p-4">
      <input className="border-2 border-[gray] focus:border-[pink] ..." />
      <input className="border-2 border-[gray] focus:border-[pink] ..." />
    </div>

    <div className="">
      <ul className="grid grid-cols-4 divide-x-1 divide-[orange] bg-[#ddd] mb-6 p-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>

    <div className="grid grid-cols-4 divide-x-4 bg-[#ddd] mb-6 p-4">
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>

    <div className="grid grid-cols-4 divide-x-1 bg-[#ddd] mb-6 p-4">
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>

    <div className="flex justify-evenly bg-[#ddd] mb-6 p-4">
      <div className="border-t-4 border-b-4 border-indigo-600 size-[100px] ..."></div>
      <div className="border-r-4 border-indigo-600 size-[100px] ..."></div>
      <div className="border-b-4 border-indigo-600 size-[100px] ..."></div>
      <div className="border-l-8 border-indigo-600 size-[100px] ..."></div>
    </div>

    <div className="flex justify-evenly bg-[#ddd] mb-6 p-4">
      <div className="border border-indigo-600 size-[100px] ..."></div>
      <div className="border-2 border-indigo-600 size-[100px] ..."></div>
      <div className="border-4 border-indigo-600 size-[100px] ..."></div>
      <div className="border-8 border-indigo-600 size-[100px] ..."></div>
    </div>

    <div className="flex justify-evenly bg-[#ddd] mb-6 p-4">
      <div className="rounded-tl-4xl rounded-br-4xl size-[100px] bg-[green]"></div>
      <div className="rounded-tl-full rounded-br-full size-[100px] bg-[green]"></div>
      <div className="rounded-br-full size-[100px] bg-[green]"></div>
      <div className="rounded-bl-full size-[100px] bg-[green]"></div>
    </div>

    <div className="flex justify-evenly bg-[#ddd] mb-6 p-4">
      <div className="rounded-tl-4xl size-[100px] bg-[teal]"></div>
      <div className="rounded-tr-4xl size-[100px] bg-[teal]"></div>
      <div className="rounded-br-4xl size-[100px] bg-[teal]"></div>
      <div className="rounded-bl-4xl size-[100px] bg-[teal]"></div>
    </div>

    <div className="flex justify-evenly bg-[#ddd] mb-6 p-4">
      <div className="rounded-t-full size-[100px] bg-[orange]"></div>
      <div className="rounded-r-full size-[100px] bg-[orange]"></div>
      <div className="rounded-b-full size-[100px] bg-[orange]"></div>
      <div className="rounded-l-full size-[100px] bg-[orange]"></div>
    </div>

    <div className="flex justify-evenly bg-[#ddd] mb-6 p-4">
      <div className="rounded-t-2xl size-[100px] bg-[green]"></div>
      <div className="rounded-r-2xl size-[100px] bg-[green]"></div>
      <div className="rounded-b-2xl size-[100px] bg-[green]"></div>
      <div className="rounded-l-2xl size-[100px] bg-[green]"></div>
    </div>
    
    <div className="flex justify-evenly bg-[#ddd] mb-6 p-4">
      <div className="size-[100px] bg-[green] rounded-sm ..."></div>
      <div className="size-[100px] bg-[orange] rounded-md ..."></div>
      <div className="size-[100px] bg-[teal] rounded-lg ..."></div>
      <div className="size-[100px] bg-[yellow] rounded-2xl ..."></div>
      <div className="size-[100px] bg-[pink] rounded-full ..."></div>
    </div>

    <div className="flex justify-evenly bg-[#ddd] mb-6 p-4">
      <div className="size-[100px] bg-[green] mask-clip-border border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(https://picsum.photos/100/100)] ...">1</div>
      <div className="size-[100px] mask-clip-padding border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(https://picsum.photos/100/100)] ...">2</div>
      <div className="size-[100px] mask-clip-content border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(https://picsum.photos/100/100)] ...">3</div>
    </div>

    <div className="flex justify-evenly mb-6">
      <div className="size-[100px] bg-[blue] bg-[url(https://picsum.photos/100/100)] bg-blend-multiply ..."></div>
      <div className="size-[100px] bg-[blue] bg-[url(https://picsum.photos/100/100)] bg-blend-soft-light ..."></div>
      <div className="size-[100px] bg-[blue] bg-[url(https://picsum.photos/100/100)] bg-blend-overlay ..."></div>
    </div>

    <div className="flex justify-center -space-x-18 mb-6">
      <div className="bg-[blue] size-[50px] mix-blend-multiply  ..."></div>
      <div className="bg-[pink] size-[50px] mix-blend-multiply ..."></div>
    </div>


    <div className="flex justify-evenly bg-[#ddd] p-4 mb-6">
      <button className="bg-indigo-500 opacity-100 ...">Button A</button>
      <button className="bg-indigo-500 opacity-75 ...">Button B</button>
      <button className="bg-indigo-500 disabled:opacity-75 ..." disabled>Button C</button>
      <button className="bg-indigo-500 opacity-25 ...">Button D</button>
    </div>

    <div className="flex flex-col gap-4 bg-[#ccc] p-4">
      <p className="text-shadow-2xs ...">The quick brown fox...</p>
      <p className="text-shadow-xs ...">The quick brown fox...</p>
      <p className="text-shadow-sm ...">The quick brown fox...</p>
      <p className="text-shadow-md ...">The quick brown fox...</p>
      <p className="text-shadow-lg/30 text-shadow-[black] ...">The quick brown fox...</p>
    </div>
    <br />


    <div className="flex justify-evenly gap-4 mb-6">
      <button className="ring ring-blue-500 ...">Subscribe</button>
      <button className="ring-2 ...">Subscribe</button>
      <button className="ring-4 ...">Subscribe</button>
    </div>

    <div className="flex justify-evenly gap-4 mb-6">
      <button className="bg-cyan-500 inset-shadow-lg inset-shadow-cyan-500/50 ...">Subscribe</button>
      <button className="bg-blue-500 inset-shadow-lg inset-shadow-blue-500/50 ...">Subscribe</button>
      <button className="bg-indigo-500 inset-shadow-lg inset-shadow-indigo-500/50 ...">Subscribe</button>
    </div>

    <div className="flex justify-evenly gap-4 mb-6">
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
      <button className="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
      <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
    </div>

    <div className="flex justify-evenly-gap-4 mb-6">
      <div className="bg-[url(https://picsum.photos/200/200)] ...">
        <div className="backdrop-blur-xs size-[200px] ..."></div>
      </div>
      <div className="bg-[url(https://picsum.photos/200/200)] ...">
        <div className="bg-white/30 backdrop-blur-md size-[200px] ..."></div>
      </div>
      <div className="bg-[url(https://picsum.photos/200/200)] ...">
        <div className="backdrop-blur-xs backdrop-grayscale size-[200px] ..."></div>
      </div>
    </div>


    <div className="flex justify-evenly gap-4 mb-6">
      <img className="saturate-50 ..." src="https://picsum.photos/100/100" />
      <img className="saturate-100 ..." src="https://picsum.photos/100/100" />
      <img className="saturate-150 ..." src="https://picsum.photos/100/100" />
      <img className="saturate-200 ..." src="https://picsum.photos/100/100" />
    </div>
    <div className="flex justify-evenly gap-4 mb-6">
      <img className="grayscale-0 ..." src="https://picsum.photos/100/100" />
      <img className="grayscale-25 ..." src="https://picsum.photos/100/100" />
      <img className="grayscale-50 ..." src="https://picsum.photos/100/100" />
      <img className="grayscale hover:grayscale-0 transition duration-500 ..." src="https://picsum.photos/100/100" />
    </div>
    <div className="flex justify-evenly gap-4 mb-6">
      <img className="contrast-50/50 drop-shadow-4xl drop-shadow-orange-500 dark:drop-shadow-none ..." src="https://picsum.photos/100/100" />
      <img className="contrast-100 ..." src="https://picsum.photos/100/100" />
      <img className="contrast-125 ..." src="https://picsum.photos/100/100" />
      <img className="contrast-200 ..." src="https://picsum.photos/100/100" />
    </div>
    <div className="flex justify-evenly gap-4 mb-6">
      <img className="brightness-50 ..." src="https://picsum.photos/100/100" />
      <img className="brightness-100 ..." src="https://picsum.photos/100/100" />
      <img className="brightness-125 ..." src="https://picsum.photos/100/100" />
      <img className="brightness-200 ..." src="https://picsum.photos/100/100" />
    </div>

    <div className="flex justify-evenly mb-6">
      <img className="blur-none" src="https://picsum.photos/100/100" />
      <img className="blur-sm" src="https://picsum.photos/100/100" />
      <img className="blur-lg" src="https://picsum.photos/100/100" />
      <img className="blur-2xl" src="https://picsum.photos/100/100" />
    </div>

<table className="w-full table-auto border-collapse text-sm"><caption className="caption-bottom pt-4 text-xs text-gray-500 dark:text-gray-400">Table 3.1: Professional wrestlers and their signature moves.</caption><thead><tr><th className="border border-gray-200 bg-gray-50 p-4 py-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">Wrestler</th><th className="border border-gray-200 bg-gray-50 p-4 py-3 pr-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">Signature Move(s)</th></tr></thead><tbody className="bg-white dark:bg-gray-800"><tr><td className="border border-gray-200 p-4 pl-8 text-gray-500 dark:border-gray-600 dark:text-gray-400">"Stone Cold" Steve Austin</td><td className="border border-gray-200 p-4 pr-8 text-gray-500 dark:border-gray-600 dark:text-gray-400">Stone Cold Stunner, Lou Thesz Press</td></tr><tr><td className="border border-gray-200 p-4 pl-8 text-gray-500 dark:border-gray-600 dark:text-gray-400">Bret "The Hitman" Hart</td><td className="border border-gray-200 p-4 pr-8 text-gray-500 dark:border-gray-600 dark:text-gray-400">The Sharpshooter</td></tr><tr><td className="border border-gray-200 p-4 pl-8 text-gray-500 dark:border-gray-600 dark:text-gray-400">Razor Ramon</td><td className="border border-gray-200 p-4 pr-8 text-gray-500 dark:border-gray-600 dark:text-gray-400">Razor's Edge, Fallaway Slam</td></tr></tbody></table>

    <table className="bg-teal-100 mb-6">
  <caption className="caption-top">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th className="border border-green-300 ...">Wrestler</th>
      <th className="border border-green-300 ...">Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-green-300 ...">"Stone Cold" Steve Austin</td>
      <td className="border border-green-300 ...">Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td className="border border-green-300 ...">Bret "The Hitman" Hart</td>
      <td className="border border-green-300 ...">The Sharpshooter</td>
    </tr>
    <tr>
      <td className="border border-green-300 ...">Razor Ramon</td>
      <td className="border border-green-300 ...">Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>

    <table className="table-fixed mb-6 bg-green-500">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>

    <table className="table-auto mb-6">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>


    <table className="border-separate border border-gray-400 border-spacing-2 mb-6">
  <thead>
    <tr>
      <th className="border border-gray-300 ...">State</th>
      <th className="border border-gray-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 ...">Indiana</td>
      <td className="border border-gray-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td className="border border-gray-300 ...">Ohio</td>
      <td className="border border-gray-300 ...">Columbus</td>
    </tr>
    <tr>
      <td className="border border-gray-300 ...">Michigan</td>
      <td className="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>


<table className="border-collapse border border-gray-400 mb-24">
  <thead>
    <tr>
      <th className="border border-gray-300 ...">State</th>
      <th className="border border-gray-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 ...">Indiana</td>
      <td className="border border-gray-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td className="border border-gray-300 ...">Ohio</td>
      <td className="border border-gray-300 ...">Columbus</td>
    </tr>
    <tr>
      <td className="border border-gray-300 ...">Michigan</td>
      <td className="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>



    <div className="animate-spin transition duration-700">G</div>
    <div className="animate-mywiggle">ggggggggggg</div>




    <button type="button" className="bg-indigo-500 ..." disabled>
  <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
  </svg>
  Processing…
</button>


<button className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white ...">
  <svg className="size-5 fill-current ...">
    
  </svg>
  Check for updates
</button>


    <div className="select-none ...">The quick brown fox jumps over the lazy dog.</div>

<div className="snap-x flex gap-2 ...">
  <div className="snap-center ...">
    <img src="https://picsum.photos/100/100" />
  </div>
  <div className="snap-center ...">
    <img src="https://picsum.photos/100/100" />
  </div>
  <div className="snap-center ...">
    <img src="https://picsum.photos/100/100" />
  </div>
  <div className="snap-center ...">
    <img src="https://picsum.photos/100/100" />
  </div>
  <div className="snap-center ...">
    <img src="https://picsum.photos/100/100" />
  </div>
  <div className="snap-center ...">
    <img src="https://picsum.photos/100/100" />
  </div>
</div>

<br />

    <label>
  <input type="checkbox" checked />
  Browser default
</label>
<label>
  <input className="accent-pink-500" type="checkbox" checked />
  Customized
</label>

<label>
  <input className="accent-regal-blue" type="checkbox" />
  Customized Color
</label>

<br />

<textarea className="caret-pink-500 ..."></textarea>

<br className="border-b h-2 mb-6" />

<div className="scheme-light ...">
  <input type="date" />
</div>
<div className="scheme-dark ...">
  <input type="date" />
</div>
<div className="scheme-light-dark ...">
  <input type="date" />
</div>

<button className="cursor-pointer bg-green-500">Submit</button>
<button className="cursor-progress">Saving...</button>
<button className="cursor-not-allowed" disabled>Confirm</button>
<br />
<br />



    

    <div className="mb-12 flex items-center border-b pb-6 ">
      <img className="translate-x-6" src="https://picsum.photos/100/100" />
      <img className="translate-x-8" src="https://picsum.photos/100/100" />
      <img className="translate-x-1/2" src="https://picsum.photos/100/100" />
    </div>

    <div className="flex justify-evenly gap-12">
      <img className="bg-teal-500 p-2 rotate-45 hover:rotate-0 transition " src="https://picsum.photos/100/100" />
      <img className="rotate-90 " src="https://picsum.photos/100/100" />
      <img className="rotate-210 " src="https://picsum.photos/100/100" />
    </div>

    <div className="flex justify-evenly gap-12 mt-24">
      <img className="scale-45 hover:rotate-0 transition " src="https://picsum.photos/100/100" />
      <img className="scale-100 " src="https://picsum.photos/100/100" />
      <img className="scale-210 " src="https://picsum.photos/100/100" />
    </div>

    <button className="transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
      Button
    </button>

    <div className="bg-green-500 h-32 flex items-center justify-center hover:rotate-z-60 _hover:translate-x-[80vw] hover:bg-indigo-500 transition duration-300 delay-150 ease-in-out">gggg</div>
    <button style={{background: "orange"}} className="mt-4 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">nnnn</button>
    <div className="size-2 bg-amber-700 flex items-center justify-center text-white my-4">size-16</div>
    
    <ProfessionalCarousel slides={slides} autoAdvanceInterval={6000} />
      <img
        className='w-full h-[70vh] md:h-[500px] object-cover object-right'
        src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80'
        alt=''
      />
      <Carousel2 />
      <div className="app">
        <Carousel>
          <img id="slideImg0" src={One} />
          <img id="slideImg1" src={Two} />
          <img id="slideImg2" src={Three} />
          <img id="slideImg3" src={Four} />
          <img id="slideImg4" src={Five} />
        </Carousel>
      </div>
      
    </>
  );
}

export default App