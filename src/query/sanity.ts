export const SKILLS_QUERY = `*[_type == "skill"] | order(_createdAt asc){ _id, name, imageSrc }`;
