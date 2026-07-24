"use client";
import { useState, useRef } from 'react';
import {clsx} from 'clsx';
import Image from 'next/image';

interface Project {
  title: string;
  image: string;
  link: string;
}

interface ProjectItemProps {
  el: Project;
  index: number;
}

function ProjectItem({el, index}: ProjectItemProps) {
  
  const basePath = process.env.NODE_ENV === "production" ? "/ideal-house" : "";
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if(!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();

    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <li className="border-y-1 divide-x border-ring projects-types__item">
      <a href={el.link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        ref={linkRef}
        className="py-10 flex justify-between items-center uppercase text-6xl lg:text-3xl md:text-xl h4 opacity-50 hover:opacity-100 relative transition duration-300">
        <Image 
          src={`${basePath}${el.image}`} 
          width="100"
          height="150"
          alt={el.title}
          className={clsx("absolute top-auto left-0 bottom-auto visible opacity-1 object-center object-cover aspect-3/5 z-1 -translate-x-1/2 -translate-y-1/2 transition duration-300 pointer-events-none", isHovered ? 'opacity-100' : 'opacity-0')}
          style={{left:`${coords.x}px`, top:`${coords.y}px`}}
        />
        <p className="z-2 break-all">{el.title}</p>
        <span className="z-2 shrink">{`/ ${(index+1) > 9 ? '' : 0}${index+1}`}</span>
      </a>
    </li>
  )
}

export default ProjectItem;