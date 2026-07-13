"use client";
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuPositioner } from '../ui/navigation-menu';

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Interior Design",
    path: "/interior-design",
    submenu: [
      {
        title: "Interior Architecture",
        path: "/interior-design/interior-architecture",
      },
      {
        title: "Lighting Design",
        path: "/interior-design/lighting-design",
      },
      {
        title: "Residential Interior Design",
        path: "/interior-design/residential",
      },
      {
        title: "Commercial Interior Design",
        path: "/interior-design/commercial",
      },
    ]
  },
  {
    title: "The brand",
    path: "/about",
  },
  {
    title: "Renovation",
    path: "/renovation", // Fixed the Cyrillic 'к' typo here
    submenu: [
      {
        title: "Design And Build",
        path: "/renovation/design-and-build",
      },
      {
        title: "Construction Company",
        path: "/renovation/construction-company",
      },
      {
        title: "Kitchen Renovation",
        path: "/renovation/kitchen",
      },
      {
        title: "Bathroom Renovation",
        path: "/renovation/bathroom",
      },
    ]
  },
  {
    title: "Careers",
    path: "/careers",
  },
  {
    title: "Contact",
    path: "/contact",
  },
]

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-90 w-full bg-background/90 backdrop-blur-md">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-bold text-primary">
          <Image 
          className="mr-auto my-4"
          src="/next.svg"
          width={50}
          height={50} />
        </Link>
        <nav className="flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks && navLinks.map((link) => {
            return (
              <NavigationMenuItem key={link.title} className="uppercase">
                  {!link?.submenu ? <NavigationMenuLink href={link.path} className="uppercase">
                    {link.title}
                  </NavigationMenuLink> : <>
                  <NavigationMenuTrigger className="uppercase">{link.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {link?.submenu && link?.submenu.map((sublink) => {
                    return (
                      <NavigationMenuLink key={sublink?.title} href={sublink?.path}>
                        {sublink?.title}
                      </NavigationMenuLink>
                    )
                  })}
                </NavigationMenuContent></>}
              </NavigationMenuItem>
            )
            })}
            <NavigationMenuPositioner />
          </NavigationMenuList>
        </NavigationMenu>
        </nav>
      </div>
    </header>
  )
}

export default Header;