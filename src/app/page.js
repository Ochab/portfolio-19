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
        impact: 'Re-platformed core software with 90k users. Estimated savings of $30M.',
        caseDeck: 'https://www.figma.com/deck/ilC80IdLpBDB4Qmdk06xmC/T-Mobile-Case-Study?node-id=1-186&t=kWQvzR5Xxf7oi62G-1',
      },
      {
        company: 'DRF',
        role: 'Lead',
        impact: 'New digital CPG launched in six weeks, including research and design system.',
        caseDeck: 'https://www.figma.com/deck/9ou4ej5D1NN3cKqOC7ffNF/DRF-Case-Study?node-id=1-186&t=x7UHeCmL01YrZWou-1',
      },
      {
        company: 'Resolute',
        role: 'Lead',
        impact: 'Prototyped and tested AI-driven health application.',
        caseDeck: 'https://www.figma.com/deck/y0na3vZj4hxh2dLjK6fK1z/Resolute?node-id=1-186&t=VeSxoC0b5tPz1LuD-1',
      },
      {
        company: 'Make-A-Wish',
        role: 'Lead',
        impact: 'Created visionary designs for core app that enabled funding.',
        caseDeck: 'https://www.figma.com/deck/ERA9niPrbyo0Cjwc9uLcWZ/Make-A-Wish?node-id=1-186&t=Dtw0yX2DR07e1qSP-1',
      },
      {
        company: 'Walgreens',
        role: 'UX Lead',
        impact: 'Researched and implemented SaaS features for streamlined operations.',
      },
      {
        company: 'Wells Fargo',
        role: 'Strategy Lead',
        impact: 'Designed a strategy to migrate from mobile website to a dedicated mobile app.',
      },
      {
        company: 'Cigna',
        role: 'UX / Visual',
        impact:
          'Improved diabetes prevention program; semester enrollment increased 5x, dropoff reduced.',
      },
      {
        company: 'Method',
        role: 'UX Lead',
        impact:
          'New product strategy and research prototyping, identified new market gap and solution.',
      },
      {
        company: 'Hitachi',
        role: 'UX',
        impact: 'Early product strategy for web services implementation.',
      },
      {
        company: 'Dow',
        role: 'Visual Design',
        impact: 'Research journeys to identify opportunities for solution design.',
      },
      {
        company: 'Playmonster',
        role: 'Solution Design',
        impact:
          'B2B sales platform that led to increased sales during COVID pivot.',
      },
      {
        company: 'Children‘s Wisconsin',
        role: 'UX',
        impact: 'Re-platformed core software with 90k users. Estimated savings of $30M.',
      },
      {
        company: 'Goodwill',
        role: 'Visual Design',
        impact: 'Core journeys for organizational vision.',
      },
      {
        company: 'VFL',
        role: 'Visual Design',
        impact:
          'Redesigning beta consumer web app for launch based on community feedback.',
      },
      {
        company: 'Mavis',
        role: 'UX',
        impact:
          'Prototypes for early product research; vision map to identify solution opportunities.',
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
              <th className="py-8"></th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp, idx) => (
              <tr key={idx} className="max-md:flex max-md:flex-col border-b border-gray-200 align-baseline max-md:py-24 justify-end">
                <td className="pb-0 md:py-12 pr-4 font-bold max-md:text-lg">{exp.company}</td>
                <td className="pt-0 md:py-12 pr-16 max-md:text-gray-600 max-md:font-medium">{exp.role}</td>
                <td className="py-12 pr-4">{exp.impact}</td>
                <td className="py-12 flex md:justify-end">
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
                      className="w-full inline-flex items-center px-4 py-12 rounded hover:bg-sky-300 text-sm"
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
