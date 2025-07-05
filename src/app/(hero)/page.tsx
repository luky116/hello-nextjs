// import homeSrc from '@/../public/1.jpeg';
import homeSrc from '@/../public/1.jpeg';
import Hero from '@/app/components/hero';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
  <Hero imgUrl={homeSrc} altTxt="Home" content="Welcome to our website"></Hero>
  );
}
