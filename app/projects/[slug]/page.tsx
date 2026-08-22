import { notFound } from "next/navigation";
import { Back, PageHero } from "@/components/page";
import { featured } from "@/lib/data";

export function generateStaticParams() {
  return featured.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = featured.find((item) => item.slug === slug);
  if (!project) notFound();
  const sections = [
    ["Problem", "Turning complex user or business signals into an accessible, decisive experience."],
    ["Solution", "A focused product workflow designed for clarity, speed, and maintainable implementation."],
    ["Architecture", `Built around ${project.stack.join(", ")} with a modular and pragmatic approach.`],
    ["Features", "Responsive interface, data-led workflows, robust validation, and clear visual feedback."],
    ["Challenges", "Balancing technical depth with a frictionless experience and dependable outcomes."],
    ["Future improvements", "Richer analytics, expanded integrations, and iterative usability testing."],
  ];
  return <><PageHero eyebrow={`Case study / ${project.tag}`} title={project.title}>{project.description}</PageHero><section className="section pt-5 grid md:grid-cols-2 gap-5">{sections.map(([heading, copy]) => <article className="glass rounded-2xl p-6" key={heading}><h2 className="text-lg">{heading}</h2><p className="muted mt-3 text-sm">{copy}</p></article>)}<div className="md:col-span-2"><Back /></div></section></>;
}
