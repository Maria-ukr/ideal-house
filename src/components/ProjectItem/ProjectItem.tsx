import { useState, useRef } from 'react';
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
      <a href={el.link} className="py-10 flex justify-between items-center uppercase text-6xl h4 opacity-50 hover:opacity-100 relative"
        ref={linkRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}>
        <Image 
          src={el.image} 
          width="100"
          height="150"
          alt=""
          className="absolute top-auto left-0 bottom-auto visible opacity-1 object-center object-cover aspect-3/5 z-1 -translate-x-1/2 -translate-y-1/2 pointer-events-none]"
          style={{left:`${coords.x}px`, top:`${coords.y}px`}}
        />
        <p className="z-2">{el.title}</p>
        <span className="z-2">{`/ ${(index+1) > 9 ? '' : 0}${index+1}`}</span>
      </a>
    </li>
  )
}

export default ProjectItem;