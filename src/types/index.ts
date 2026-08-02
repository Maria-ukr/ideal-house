
export interface PageHomeContent {
  title: string;
  subtitle: string;
  bgImage: string;
  link: string;
  bgVideo: string;
}


export interface LoadPageContent {
  title: string;
  subtitle?: string;
  bgImage: string;
  serviceAbout: string;
  serviceDescriptions: {
    leftImg: string;
    rightImg: string;
    tablet: {
      tabletTitle: string;
      rows: Array<{ one: string; two: string }>;
    };
  };
  serviceTarget: {
    desc: string;
    image: string;
    imageFull: string;
  };
  serviceCollections: {
    title: string;
    desc: string;
    fileTitle: string;
    fileLink: string;
  };
  projects: Array<{title: string; image: string; link: string;}>;
}


export interface PageContent {
  title: string;
  address: string;
  office: string;
  phone: string;
  email: string;
  bgImage: string;
}

export interface PageContactContent {
  title: string;
  link: string;
  subtitle: string;
  bgImage: string;
  gallery: Array<{image: string; title: string;}>;
  slogan: Array<string>;
  sloganDesc: string;
  targetText: string;
  targetImage: string;
  targetSubtext: string;
  footerBg: string;
  footerText: string;
  footerTitle: string;
  footerButtonText: string;
  footerButtonLink: string;
}

export interface Project {
  title: string;
  image: string;
  link: string;
}

export interface ProjectItemProps {
  el: Project;
  index: number;
}

export interface VideoBgProps {
  videoSrc: string;
  classVideoBox?: string;
  poster: string;
}