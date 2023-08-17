import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-tsukuritai",
    apiKey: process.env.API_KEY,
});