"use client";

import { SlideDeck } from "@/components/SlideDeck";
import Slide1 from "./slides/1";
import Slide2 from "./slides/2";
import Slide4 from "./slides/4";
import Slide5 from "./slides/5";
import Slide7 from "./slides/7";
import Slide11 from "./slides/11";
import Slide12 from "./slides/12";
import Slide13 from "./slides/13";
import Slide14 from "./slides/14";
import Slide15 from "./slides/15";

export default function AnnualMeeting() {
  const slides = [
    <Slide1 key={1} />,
    <Slide2 key={2} />,
    <Slide4 key={4} />,
    <Slide5 key={5} />,
    <Slide7 key={7} />,
    <Slide11 key={11} />,
    <Slide12 key={12} />,
    <Slide13 key={13} />,
    <Slide14 key={14} />,
    <Slide15 key={15} />,
  ];

  return <SlideDeck slides={slides} />;
}
