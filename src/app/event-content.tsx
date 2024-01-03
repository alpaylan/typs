"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
  Typography
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    title: "Facilitating Unity Among Turkish Communities in America",
    des: "todo",
    name: "Aziz Sancar",
    position: "Nobel Laureate",
    panel: "Main Speaker",
    img: "/image/sancar2.jpg",
  },
  {
    title: "Building Generational Bridges",
    des: "todo",
    name: "Alper Coskun",
    position: "Senior Fellow, Carnegie Endowment for International Peace",
    panel: "Workshop 1",
    img: "/image/coskun.jpg",
  },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="mx-auto container">
        <Typography
          color="blue-gray"
          className="ml-6 mb-10 text-6xl font-bold leading-tight lg:w-3/4"
        >
          Speakers
        </Typography>
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
