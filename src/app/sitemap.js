export default function sitemap() {
  const baseUrl = "https://reinisvaravs.com";

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add more URLs as your site grows
    // {
    //   url: `${baseUrl}/projects`,
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ];
}
