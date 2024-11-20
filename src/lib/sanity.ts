import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient, QueryParams } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const { projectId, dataset } = client.config();

export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 0,
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: { revalidate },
  });
}
