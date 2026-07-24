
export interface PageHomeContent {
  title: string;
  subtitle: string;
  bgImage: string;
  link: string;
}


export interface LoadPageContent {
  title: string;
  subtitle: string;
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

