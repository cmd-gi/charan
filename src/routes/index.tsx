import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Portfolio } from "@/components/Portfolio";
import { SmoothScroll } from "@/components/SmoothScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charan — Software & App Developer" },
      { name: "description", content: "Portfolio of Charan (cmd-gi): software & app development, AI experiences, systems thinking, and creative experiments." },
      { property: "og:title", content: "Charan — Software & App Developer" },
      { property: "og:description", content: "Portfolio of Charan (cmd-gi): software & app development, AI experiences, systems thinking, and creative experiments." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <Portfolio />
    </>
  );
}
