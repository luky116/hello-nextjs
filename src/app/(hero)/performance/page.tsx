// import homeSrc from '@/../public/1.jpeg';
import homeSrc from '@/../public/2.jpeg';
import Hero from '@/app/components/hero';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Page",
}

export default function Performance() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Performance image" content="Welcome to Performance Page"></Hero>
  );
}
