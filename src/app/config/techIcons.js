// Tech icons configuration
const techIcons = {
  postgressql: "/icons/ui/postgressql.svg",
  node: "/icons/ui/node.svg",
  express: "/icons/ui/express.svg",
  discord: "/icons/ui/discord.svg",
  next: "/icons/ui/next.svg",
  react: "/icons/ui/react.svg",
  openai: "/icons/ui/openai.svg",
  css: "/icons/ui/css.svg",
  make: "/icons/ui/make.svg",
  stripe: "/icons/ui/stripe.svg",
  apify: "/icons/ui/apify.svg",
  gsap: "/icons/ui/gsap.svg",
  javascript: "/icons/ui/js.svg",
  retell: "/icons/ui/retell.webp",
  twilio: "/icons/ui/twilio.svg",
  tailwind: "/icons/ui/tailwind.svg",
};

// Tech stack configurations
export const techStacks = {
  bot: [
    { name: "JavaScript", icon: techIcons.javascript },
    { name: "Node.js", icon: techIcons.node },
    { name: "Express.js", icon: techIcons.express },
    { name: "PostgreSQL", icon: techIcons.postgressql },
    { name: "OpenAI", icon: techIcons.openai },
    { name: "Discord.js", icon: techIcons.discord },
  ],
  make: [
    { name: "Make", icon: techIcons.make },
    { name: "Apify", icon: techIcons.apify },
    { name: "Twilio", icon: techIcons.twilio },
    { name: "Retell AI", icon: techIcons.retell },
  ],
  agent: [
    { name: "Twilio", icon: techIcons.twilio },
    { name: "Make", icon: techIcons.make },
    { name: "Retell AI", icon: techIcons.retell },
  ],
  frontend: [
    { name: "Next.js", icon: techIcons.next },
    // { name: "React", icon: techIcons.react },
    { name: "Tailwind", icon: techIcons.tailwind },
    { name: "GSAP", icon: techIcons.gsap },
  ],
  backend: [
    { name: "Javascript", icon: techIcons.javascript },
    { name: "Node.js", icon: techIcons.node },
    { name: "Express.js", icon: techIcons.express },
    { name: "PostgreSQL", icon: techIcons.postgressql },
  ],
  api: [
    { name: "OpenAI", icon: techIcons.openai },
    { name: "Stripe", icon: techIcons.stripe },
    { name: "Discord.js", icon: techIcons.discord },
  ],
};
