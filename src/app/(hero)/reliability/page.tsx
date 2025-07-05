// import homeSrc from '@/../public/1.jpeg';
import homeSrc from '@/../public/3.jpeg';
import Hero from '@/app/components/hero';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability Page",
}

export default function Reliability() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Reliability image" content="Welcome to Reliability Page"></Hero>
  );
}
