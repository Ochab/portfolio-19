import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@awesome.me/kit-cb9f7960b3/icons/classic/solid'

function Intro() {
  return (
    <div className="p-6 w-full max-w-screen-md mx-auto text-center">
      <div className="rounded-full overflow-hidden p-4 border-2 border-sky-800 inline-block">
       <Image
          src="/images/greg-on-blue.png"
          alt="Feature highlight"
          width={192}
          height={192}
          quality={100}
          className="w-128 h-128 bg-sky-800 rounded-full"
        />
      </div>
      <h1 className="text-4xl font-bold mt-24 mb-16">Hi Adobe! I'm Greg Ochab—</h1>
      <h2 className="text-2xl font-regular">a full-stack product designer with 20 years of experience in Product Design, UX and UI, with a passion for Figma and AI experiences.</h2>
    </div>
  )
}

function Slide({ title, eyebrow, description, children }) {
    return (
      <div className="w-full flex justify-center">
        <div className="md:flex md:w-[1336px] md:h-[752px] bg-slate-200 overflow-hidden rounded-8">
          {/* Left panel */}
          <div className="md:w-[380px] md:h-full bg-slate-50 px-12 py-16">
            <div className="text-sm font-medium text-sky-600 uppercase tracking-wide mb-2">
              {eyebrow}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
  
          {/* Right panel for children */}
          <div className="flex-1 h-full">
            {children}
          </div>
        </div>
      </div>
    );
  }
  

export default function HeyAdobe() {
  return (
    <main className="flex flex-col pt-64 md:pt-192 pb-128 gap-128">
      <Intro />
      
        <Slide 
            title="AI Health Tracker" 
            eyebrow="Recent Projects" 
            description="Created a GenAI focused experience for tracking calories in an easy and encouraging way." 
        >
            <Image
              src="/images/adobe/resolute.png"
              alt="AI health tracker images"
              width={956}
              height={752}
              quality={100}
              className="w-full h-full object-cover"
            />
        </Slide>
        
    </main>
  );
} 