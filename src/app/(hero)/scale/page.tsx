import Image from "next/image";
// import homeSrc from '@/../public/1.jpeg';
import homeSrc from '@/../public/4.jpeg';
import Hero from '@/app/components/hero';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale Page",
  icons: "",
}

export default function Scale() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Scale image" content="Welcome to Scale Page"></Hero>
  );
}
