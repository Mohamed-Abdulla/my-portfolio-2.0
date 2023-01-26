import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "production"; // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const config = {
  projectId,
  dataset,
  apiVersion: "2023-01-1",
  useCdn: process.env.NODE_ENV === "production",
  token: token,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config as any).image(source);
