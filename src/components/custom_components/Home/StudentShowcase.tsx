import React from "react";
import ImageGrid from '@/components/custom_components/Home/ImageGrid';

const courseData = {
  ImageGrid: {
    
   
    studentWorks: [
      { id: 0, image: '/Website/maniacarta-blender.jpg', title: 'Fantasy Characters', student: 'Maria Santos' },
      { id: 1, image: '/Website/76d47d04ed4c782456d9fd1c051e4a8c.jpg', title: 'Cyberpunk Character', student: 'Alex Chen' },
      { id: 2, image: '/Website/jarold-sng-blend-demo-01-jsd-v02.jpg', title: 'Warrior Squad', student: 'Anna Davis' },
      { id: 3, image: '/Website/david-letondor-david-letondor-lucile-gif-hd-v2-01-empute.gif', title: 'Realistic Portrait', student: 'Sarah Kim' },    
      { id: 4, image: '/Website/danny-mac-final-sq.jpg', title: 'Anime Character', student: 'David Liu' },
      { id: 4, image: '/Website/alex-gray-3d-alex-gray-3d-11111.jpg', title: 'Sci-Fi Scene', student: 'John Walker' },
      { id: 5, image: '/Website/831dab320fbaf8cad653d9e968992b76.jpg', title: 'Creature Design', student: 'Emma Johnson' },
      { id: 6, image: '/Website/miss-zhuzhu-blenderrender1.jpg', title: 'Cartoon Character', student: 'Mike Rodriguez' },
      { id: 7, image: '/Website/jamie-fisher-upwardsdiagonalshot.jpg', title: 'Character Study', student: 'Lisa Brown' },
      { id: 8, image: '/Website/darek-zabrocki-overview1-001-darekzabrocki.jpg', title: 'Fantasy Warrior', student: 'Tom Wilson' },
      { id: 9, image: '/Website/588e5703c130dfd5983882d1706f0ceb.jpg', title: 'Warrior Squad', student: 'Anna Davis' },
      { id: 10, image: '/Website/3f242682439a8d1e23f316d84d76efff.jpg', title: 'Portrait Study', student: 'Chris Garcia' },
      { id: 11, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Character Study', student: 'Lisa Brown' },
      { id: 12, image: '/Website/leonardo-vieira-sauron-fullquality-004.jpg', title: 'Fantasy Warrior', student: 'Tom Wilson' },
      { id: 13, image: '/Website/588e5703c130dfd5983882d1706f0ceb.jpg', title: 'Warrior Squad', student: 'Anna Davis' },
    ],
  },
};





export default function Home() {
  return (


 
  
<section className="relative bg-auto bg-bottom bg-[#ffffff] bg-no-repeat h-auto w-full pt-[60px] pb-[120px] px-8">


    <div className="relative z-10 items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full">
        <div className="flex flex-col gap-3 justify-between w-full">
          <span className="text-[#000] text-3xl md:text4xl lg:text-5xl">
            Student Showcase.
          </span>
          <span className="text-[#000] font-medium text-sm sm:text-base lg:text-xl">
            From novice creatives looking to jumpstart their career to seasoned
            pros adding to their toolkit, our students produce thoughtful,
            mind-blowing work. We want the world to see it.
          </span>

 <div className=" text-white">

      {/* Student Results Section */}
      <ImageGrid
        studentWorks={courseData.ImageGrid.studentWorks}
      />
    </div>

        </div>

     
      </div>


   
    
    
    </section>
  );
}

























