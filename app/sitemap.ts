import type { MetadataRoute } from "next";
import { projects } from "./Projects/projectData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.briannathomas.dev";

const sitemap = (): MetadataRoute.Sitemap => {
  const staticPaths = ["", "/Projects", "/AboutMe", "/Contact", "/Pets"];
  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/Projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
};

export default sitemap;
