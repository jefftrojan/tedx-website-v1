/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Hero from '@/public/images/hero.jpeg';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TabsTrigger, TabsList, TabsContent, Tabs } from '@/components/ui/tabs';
import { JSX, SVGProps } from 'react';
import speaker from '/images/speaker.png';
import EventHighlight from '@/components/HighlightComponent';
import Link from 'next/link';
import Theme from '@/components/Theme/Button';
import DetailButton from '@/components/Theme/Theme';


export default function homepage() {
  const highlights = [
    { title: 'Guest Speakers', items: ['Speaker 1', 'Speaker 2', 'Speaker 3'] },
    { title: 'Talks', items: ['Talk 1', 'Talk 2', 'Talk 3'] },
    { title: 'Performance', items: ['Performance 1', 'Performance 2'] },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative h-[600px] w-full max-w-45xl mx-auto my-20 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        {/* Background Image */}
        <Image
          src="/images/hero.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        {/* Text content */}
        <div className="relative flex flex-col items-center justify-center h-full p-8 text-center text-white">
          <h1 className="text-5xl font-bold">
            Igniting Ideas, Inspiring Positive Change
          </h1>
          <p className="mt-4 text-sm">x = independently organized TED event.</p>
        </div>
      </div>
      <section className="bg-white text-black p-8 my-8">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            alt="Speaker"
            className="md:w-1/2"
            height="400"
            src="/images/home-about.png"
            style={{
              aspectRatio: '400/400',
              objectFit: 'cover',
            }}
            width="400"
          />
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
            <h3 className="text-2xl mb-4">Student-Led University TEDx Event</h3>
            <p className="mb-6">
              TEDxALURwanda is a dynamic, student-led organization that embodies
              the spirit of TED's mission to spread ideas that can change the
              world. We believe that by fostering a culture of curiosity,
              open-mindedness, and collaboration, we can create truly unique and
              impactful experiences. In 2019, we launched our inaugural event,
              themed 'Dare to Disrupt', which brought together an electrifying
              mix of voices from the African Leadership University community and
              beyond. Our goal is to inspire and empower our attendees to think
              differently, share their ideas, and make a meaningful impact in
              their communities.
            </p>
            <Link href="/about">
              <Button className="text-white">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      <div className='mt-20' />


      <section className="p-8 my-8">
      <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>

      <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 bg-beige md:p-10 p-4 ">
          <div>
            <img
              src="/images/flyer.png"
              alt="Event Image"
              className="w-[100vh] max-h-[70vh] object-cover rounded-lg"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-extrabold">Theme: What Next?</h2>
            <span className="md:flex md:justify-between md:space-y-0 space-y-2">
              <div className="flex gap-2 md:pt-0 pt-2">
                <img alt="" src="/images/calendar.svg" />
                <p className=" font-medium ">November 30th, 2024</p>
              </div>
              <div className="flex gap-2">
                <img alt="" src="/images/location.svg" />
                <p className=" flex gap-2 ">
                  <span className="font-medium">Canal Olympia</span>
                  <span>Rebero</span>
                </p>
              </div>
            </span>
            <p className=" text-justify">
              TEDxALURwanda is an independently organized, University TEDx event
              at the renowned African Leadership University licensed by TED.
              Since its inception in 2019, it has grown to become a flagship
              event at our university and within Rwanda, celebrated for its
              dynamic and disruptive ideas. The inaugural event, themed “Dare to
              Disrupt,” set a powerful precedent, followed by the equally
              impactful 2023 event under the theme “What If…?” Each year, we
              feature an exceptional lineup of speakers from various industries
              and our community, making TEDxALURwanda a recognized platform for
              sharing innovative and transformative ideas that challenge the
              status quo and inspire change.
            </p>
            <div className="pt-8 flex space-x-3">
              <Theme>
                <Link href="https://tedxalurwanda.sinc.events/tedxalurwa_570">
                  <Button
                    className=" font-semibold bg-red-500 text-white hover:scale-90 font-bricolageGrotesque"
                  >
                    Register Now
                  </Button>
                </Link>
              </Theme>

              <Link href="https://www.ted.com/tedx/events/57837">
                <Button className="ml-4" variant="outline">
                  Event details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 my-8">
        <h2 className="font-bricolageGrotesque mb-5 text-xl md:text-2xl text-center font-semibold ">
          Highlight from TEDxALURwanda 2023
          <span className="text-red-500"> "What If"</span>
        </h2>
        <iframe
          className="w-full aspect-video self-stretch md:min-h-96"
          src="https://www.youtube.com/embed/nmUbrs9gViM?si=Dl0qd_DM2_WzW8Uj"
          width={'560'}
          allow="autoplay"
          frameBorder="0"
          title="Highlight Video"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
