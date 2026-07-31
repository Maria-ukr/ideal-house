import {VideoBgProps} from '@/src/types/index';

function VideoBg({videoSrc, classVideoBox, poster}: VideoBgProps) {
  return (
    <video 
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      className={`absolute inset-0 w-full h-full object-cover ${classVideoBox ?? ''}`} 
    >
      <source
        src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoBg;