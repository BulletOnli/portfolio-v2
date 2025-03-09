export type Project = {
  _id: string;
  name: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  note: string;
};

export type Contact = {
  email: {
    label: string;
    url: string;
    value: string;
  };
  messenger: {
    label: string;
    url: string;
    value: string;
  };
  phoneNumber: {
    label: string;
    url: string;
    value: string;
  };
  github: string;
  instagram: string;
  tiktok: string;
  linkedin: string;
};
