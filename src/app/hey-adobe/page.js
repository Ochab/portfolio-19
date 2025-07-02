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
        <div className="md:flex md:w-[1336px] md:h-[752px] bg-slate-200 overflow-hidden rounded-8 border-1 border-slate-200">
          {/* Left panel */}
          <div className="md:w-[380px] md:h-full bg-slate-50 px-48 py-64">
            <div className="text-xs font-medium uppercase tracking-wide mb-8">
              {eyebrow}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h3>
            <p className="text-lg mt-16 leading-relaxed">
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
    <main className="flex flex-col pt-64 md:pt-192 pb-256 gap-192">
        <Intro />
      
        <div className="flex flex-col gap-48 max-w-[1336px] mx-auto">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            </div>

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

            <Slide 
                title="T-Mobile Modernization" 
                eyebrow="Recent Projects" 
                description="I worked with T-Mobile to launch a company-wide platform that reduced time-on-task by 8 minutes, while saving an estimated $50 million through better technology and efficiency." 
                >
                <Image
                    src="/images/adobe/t-mobile.png"
                    alt="AI health tracker images"
                    width={956}
                    height={752}
                    quality={100}
                    className="w-full h-full object-cover"
                />
            </Slide>
        </div>


        <div className="flex flex-col gap-48 max-w-[1336px] mx-auto">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Artifacts & Deliverables</h2>
                <p className="text-lg leading-relaxed max-w-[480px]">
                    As a full-stack product designer, I execute across every stage of the UX, UI and Product development.
                </p>
            </div>

            <Slide 
                title="Prototypes" 
                eyebrow="Artifacts & Deliverables" 
                description="I craft prototypes at all fidelities, and can utilize either Figma or React to create interactive demos (depending on which is better suited." 
                >
                <Image
                    src="/images/adobe/prototypes.png"
                    alt="AI health tracker images"
                    width={956}
                    height={752}
                    quality={100}
                    className="w-full h-full object-cover"
                />
            </Slide>

            <Slide 
                title="Wireframes" 
                eyebrow="Artifacts & Deliverables" 
                description="I use wireframes to create conversation and facilitate learnings early and often." 
                >
                <Image
                    src="/images/adobe/wireframes.png"
                    alt="AI health tracker images"
                    width={956}
                    height={752}
                    quality={100}
                    className="w-full h-full object-cover"
                />
            </Slide>

            <Slide 
                title="User Journeys" 
                eyebrow="Artifacts & Deliverables" 
                description="I craft user journeys at all fidelities, from fast and practical to elaborate and enterprise-defining." 
                >
                <Image
                    src="/images/adobe/user-journeys.png"
                    alt="AI health tracker images"
                    width={956}
                    height={752}
                    quality={100}
                    className="w-full h-full object-cover"
                />
            </Slide>

            <Slide 
                title="Design Systems" 
                eyebrow="Artifacts & Deliverables" 
                description="I work within and expand existing design systems to create consistent experiences across enterprise-level ecosystems."
                >
                <Image
                    src="/images/adobe/design-systems.png"
                    alt="AI health tracker images"
                    width={956}
                    height={752}
                    quality={100}
                    className="w-full h-full object-cover"
                />
            </Slide>
        </div>
    </main>
  );
} 