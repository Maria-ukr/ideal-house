'use client';

import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Map, {Marker, Popup} from 'react-map-gl/maplibre';
import {setWorkerUrl} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import pagesData from '@/src/data.json';
import { CONSTANTS } from '@/src/constants';
import {ProjectAddress, WorksSection} from '@/src/types/index';

setWorkerUrl(
  new URL('maplibre-gl/dist/maplibre-gl-worker.mjs', import.meta.url).toString()
);

const pageContent = pagesData["works"] as WorksSection; 

interface LocationMarker {
  title: string;
  slug: string;
  cover: string;
  address: ProjectAddress;
}

const LOCATIONS: LocationMarker[] = Object.values(pageContent.projects).map(el => ({
  title: el.title,
  slug: el.slug,
  cover: el.heroImage,
  address: el.address,
}))

function Page() {
  const {BASE_URL} = CONSTANTS;

  const [selectedLocation, setSelectedLocation] = useState<LocationMarker | null>(LOCATIONS[0]);

  return (
    <div>
      <Map
        initialViewState={{longitude: 2.2975, latitude: 48.8530, zoom: 15}}
        style={{width: '100%', height: '100vh'}}
        mapStyle="https://tiles.openfreemap.org/styles/liberty">
          {LOCATIONS.map((loc) => (
            <>
              <Marker
                key={loc.title}
                longitude={Number(loc.address.longitude)}
                latitude={Number(loc.address.latitude)}
                anchor="bottom"
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setSelectedLocation(loc);
                }}
              />
              <Popup
                longitude={Number(loc.address.longitude)}
                latitude={Number(loc.address.latitude)}
                anchor="bottom"
                offset={[0, -44]}
                closeButton={false}
                className='w-40 flex-col rounded-[3px] text-[#111]'
              >
                <Link href={`${BASE_URL}${loc?.slug}`} className='flex flex-col gap-1'>
                  <Image 
                    src={`${BASE_URL}${loc.cover}`} 
                    alt={loc.title}
                    width={100}
                    height={100}
                    className="block h-auto w-full" 
                  />
                  <strong className="m-0 text-xs px-2">#{loc.title}</strong>
                  <p className="m-0 px-2 pb-1 text-xs leading-normal text-neutral-700">
                    {loc.address.address}
                  </p>
                </Link>
              </Popup>
            </>
          ))
        }
      </Map>
    </div>
  )
}

export default Page;