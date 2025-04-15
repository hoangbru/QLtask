export const siteConfig = {
  name: "QLtask | Task Management & Productivity App",
  description:
    "Plan, manage, and conquer your daily tasks efficiently with QLtask — a modern task management tool built for productivity and simplicity.",
  url: `${process.env.NEXT_PUBLIC_APP_URL}`,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`,
  locale: "en_US",
};
