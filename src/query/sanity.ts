export const SKILLS_QUERY = `*[_type == "skill"] | order(_createdAt asc){ _id, name, imageSrc }`;

export const CONTACTS_QUERY = `*[_type == "contact"][0] {
  email { label, url, value },
  messenger { label, url, value },
  phoneNumber { label, url, value },
  github,
  instagram,
  tiktok,
  linkedin
}`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt asc) {
  _id,
  name,
  description,
  imageSrc,
  tags,
  liveUrl,
  githubUrl,
  note
}`;
