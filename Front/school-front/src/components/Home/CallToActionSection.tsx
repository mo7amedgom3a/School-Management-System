// src/components/Home/CallToActionSection.tsx
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from 'react-icons/rx';
import { RxTwitterLogo } from 'react-icons/rx';
import { RxInstagramLogo } from 'react-icons/rx';
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineMediumWorkmark } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";

export function CallToActionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Contact us 
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            Our website is under construction. Please contact us for more information.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="https://github.com/mo7amedgom3a" className="text-gray-800 hover:text-gray-900" prefetch={false}>          
                <RxGithubLogo className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/mohamed-gomaa-626a18249" className="text-gray-800 hover:text-gray-900" prefetch={false}>
                <RxLinkedinLogo className="w-6 h-6" />
            </Link>
            <Link href="https://medium.com/@mo7amed.gom3a.7moda" className="text-gray-800 hover:text-gray-900" prefetch={false}>
                <AiOutlineMediumWorkmark className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/mohamed-gomaa-626a18249" className="text-gray-800 hover:text-gray-900" prefetch={false}>
                <RxTwitterLogo className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com/mohamd.gomaa.hamoda/" className="text-gray-800 hover:text-gray-900" prefetch={false}>
                <RxInstagramLogo className="w-6 h-6" />
            </Link>
            <Link href="mailto:mo7amedgom3a7moda@gmail.com" className="text-gray-800 hover:text-gray-900" prefetch={false}>
                <BiLogoGmail className="w-6 h-6" />
            </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
