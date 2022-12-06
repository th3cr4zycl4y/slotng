import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./config";
import { createClient } from "next-sanity";

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
