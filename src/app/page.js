import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@awesome.me/kit-cb9f7960b3/icons/classic/solid'

function Intro() {
  return (
    <div className="p-6 max-w-screen-xl mx-auto max-md:px-24 md:px-32 text-center">
      <div className="rounded-full overflow-hidden p-2 border-2 border-sky-800 inline-block">
       <Image
          src="/images/greg-on-blue.png"
          alt="Feature highlight"
          width={192}
          height={192}
          quality={100}
          className="w-128 h-128 bg-sky-800 rounded-full"
        />
      </div>
      <h1 className="text-4xl font-bold mt-24 mb-16">Hello there, Greg here.</h1>
      <h2 className="text-2xl font-regular">I’m a lean product designer with 20 years of experience.</h2>
    </div>
  )
}

function Experience() {
    const experiences = [
      {
        company: 'T-Mobile',
        role: 'Principal',
        impact: 'Led modernization of mission-critical software to decrease time-on-task by as much as eight minutes',
        caseDeck: 'https://www.figma.com/deck/ilC80IdLpBDB4Qmdk06xmC/T-Mobile-Case-Study?node-id=1-186&t=kWQvzR5Xxf7oi62G-1',
      },
      {
        company: 'DRF',
        role: 'Lead',
        impact: 'Rapidly designed and launched new digital CPG product from research to deployment, including a launch-ready design system',
        caseDeck: 'https://www.figma.com/deck/9ou4ej5D1NN3cKqOC7ffNF/DRF-Case-Study?node-id=1-186&t=x7UHeCmL01YrZWou-1',
      },
      {
        company: 'Resolute',
        role: 'Lead',
        impact: 'Designed and validated an AI-powered health application through user testing and iterative prototyping',
        caseDeck: 'https://www.figma.com/deck/y0na3vZj4hxh2dLjK6fK1z/Resolute?node-id=1-186&t=VeSxoC0b5tPz1LuD-1',
      },
      {
        company: 'Make-A-Wish',
        role: 'Lead',
        impact: 'Delivered compelling product vision and core app designs to evangelize stakeholder buy-in and secure project funding',
        caseDeck: 'https://www.figma.com/deck/ERA9niPrbyo0Cjwc9uLcWZ/Make-A-Wish?node-id=1-186&t=Dtw0yX2DR07e1qSP-1',
      },
      {
        company: 'Walgreens',
        role: 'UX Lead',
        impact: 'Transformed operational efficiency through user-centered SaaS feature design and implementation',
      },
      {
        company: 'Wells Fargo',
        role: 'Strategy Lead',
        impact: 'Crafted mobile app strategy and migration roadmap to enhance customer experience and platform capabilities',
      },
      {
        company: 'Cigna',
        role: 'UX / Visual',
        impact: 'Redesigned diabetes prevention program to boost participant engagement and significantly reduce program abandonment',
      },
      {
        company: 'Method',
        role: 'UX Lead',
        impact: 'Uncovered untapped market opportunity through research and prototyping, leading to new product strategy',
      },
      {
        company: 'Hitachi',
        role: 'UX',
        impact: 'Shaped early-stage product strategy for enterprise web services, defining core user experiences and technical approach',
      },
      {
        company: 'Dow',
        role: 'Visual Design',
        impact: 'Mapped comprehensive user journeys to uncover pain points and strategic design opportunities',
      },
      {
        company: 'Playmonster',
        role: 'Solution Design',
        impact: 'Designed B2B sales platform enabling successful digital transformation during market disruption',
      },
      {
        company: "Children's Wisconsin",
        role: 'UX',
        impact: 'Created journey maps to identify friction points and developed research prototypes to validate solutions with healthcare teams',
      },
      {
        company: 'Goodwill',
        role: 'Visual Design',
        impact: 'Developed strategic user journeys to align organizational vision with customer needs',
      },
      {
        company: 'VFL',
        role: 'Visual Design',
        impact: 'Evolved beta web app design through community-driven insights to prepare for market launch',
      },
      {
        company: 'Mavis',
        role: 'UX',
        impact: 'Created strategic vision and interactive prototypes to validate product direction and identify growth opportunities',
      },
    ];
  
    return (
      <div className="p-6 max-w-screen-xl mx-auto pt-96 pb-192 max-md:px-24 md:px-32">
        <h2 className="text-xl font-bold mb-32">Recent Impact</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="max-md:hidden text-left border-b border-gray-200">
              <th className="py-8 text-sm font-normal">Company</th>
              <th className="py-8 text-sm font-normal">Role</th>
              <th className="py-8 text-sm font-normal">Impact</th>
              <th className="md:py-8"></th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp, idx) => (
              <tr key={idx} className="max-md:flex max-md:flex-col border-b border-gray-200 align-baseline max-md:py-24 justify-end">
                <td className="pb-0 md:py-12 pr-48 font-bold max-md:text-lg">{exp.company}</td>
                <td className="pt-0 md:py-12 pr-48 max-md:text-gray-600 max-md:font-medium">{exp.role}</td>
                <td className="py-12 pr-4"><p className="max-w-[540px] md:max-w-[640px] mb-8">{exp.impact}</p></td>
                <td className="py-12 flex md:pl-48 md:justify-end">
                  {exp.caseDeck ? (
                    <a
                      href={exp.caseDeck}
                      className="bg-sky-200 text-sky-800 inline-flex items-center gap-8 px-12 py-8 rounded-4 hover:bg-sky-300 font-medium whitespace-nowrap"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Case Deck
                      <FontAwesomeIcon icon={faUpRightFromSquare} className="w-[14px] h-[14px]" />
                    </a>
                  ) : (
                    // Empty placeholder to preserve height
                    <div
                      href={exp.caseDeck}
                      className="w-full hidden md:inline-flex items-center px-4 py-12 rounded hover:bg-sky-300 text-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="opacity-0">.</div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}


export default function Home() {
  return (
    <main className="pt-64 md:pt-128 pb-128">
      <Intro />
      <Experience />
    </main>
  );
}
