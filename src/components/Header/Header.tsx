"use client";
import Link from "next/link";
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuPositioner } from '../ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';

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
        path: "/interior-design/residential-interior-design",
      },
      {
        title: "Commercial Interior Design",
        path: "/interior-design/commercial-interior-design",
      },
      {
        title: "next page",
        path: "/interior-design/next-page",
      },
    ]
  },
  {
    title: "The brand",
    path: "/about",
  },
  {
    title: "Renovation",
    path: "/renovation",
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
        title: "Dream Kitchen",
        path: "/renovation/dream-kitchen",
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
    <header className="fixed top-0 left-0 z-90 w-full bg-foreground/90 backdrop-blur-md">
      <div className="container flex items-center justify-between mx-auto text-background">
        <Link href="/">
          <Image 
          className="mr-auto py-1"
          src="/images/logo-light.svg"
          alt="Logo"
          loading="eager"
          width={70}
          height={70} />
        </Link>
        <nav className="flex items-center justify-between">
        <NavigationMenu className="hidden md:flex">
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
        <div className="md:hidden">
          <Sheet open={navOpen} onOpenChange={setNavOpen}>
            <SheetTrigger>
              <p className="p-2 md:hidden" aria-label="Toggle Menu">
                {navOpen ? 'Close' : 'Menu'}
              </p>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-full md:max-w-md pl-4 h-full overflow-y-auto">
              <SheetHeader>
                <Link href="/">
                  Header menu mobile
                </Link>
              </SheetHeader>
              <nav className="flex flex-col space-y-2">
                {navLinks && navLinks.map((link) => {
                  return (
                    <Fragment key={link.title}>
                      <Link href={link.path} className="text-sm hover:text-accent">{link.title}</Link>
                      {link?.submenu && (
                        <div className="flex flex-col gap-2 pl-4">
                          {link?.submenu.map((subItem) => (
                            <Link
                              key={subItem?.title}
                              href={subItem?.path}
                              className="text-sm text-muted-foreground hover:text-accent"
                            >
                              {subItem?.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </Fragment>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;