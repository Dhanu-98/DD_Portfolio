"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { contact, experience, featured, gmailComposeUrl, mailtoUrl, skills } from "@/lib/data";

const whatsappUrl = `https://wa.me/919510690787?text=${encodeURIComponent("Hey Dhananjay! 👋 Your portfolio caught my attention—especially your work in AI, machine learning, and scalable software. I’d love to connect and learn more about what you’re building! 🚀")}`;
const Reveal = ({children}:{children:React.ReactNode}) => <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>{children}</motion.div>;

export function AboutPreview(){return <section className="section"><Reveal><p className="eyebrow">About</p><h2 className="heading mt-3">Engineering with <span className="gradient-text">intent.</span></h2><p className="muted text-lg max-w-2xl mt-6">I&apos;m a software engineer with an AI &amp; ML foundation, a production-minded approach to reliability, and a passion for useful software.</p><Link href="/about" className="button button-ghost mt-7">My story <ArrowUpRight size={15}/></Link></Reveal></section>}
export function ExperiencePreview(){return <section className="border-y border-white/10 bg-white/[.015]"><div className="section"><p className="eyebrow">Experience</p><h2 className="heading mt-3 mb-10">Building trust at <span className="gradient-text">scale.</span></h2><div className="grid md:grid-cols-2 gap-4">{experience.slice(0,2).map(item=><div className="glass rounded-2xl p-7" key={`${item.company}-${item.role}`}><p className="text-violet-300 text-xs">{item.period}</p><h3 className="text-2xl mt-4">{item.company}</h3><p className="text-sm text-zinc-300 mt-2">{item.role}</p><p className="muted text-sm mt-4">{item.text}</p></div>)}</div></div></section>}
export function ProjectsPreview(){return <section className="section"><p className="eyebrow">Selected work</p><div className="grid md:grid-cols-2 gap-4 mt-7">{featured.map(project=><Link key={project.slug} href={`/projects/${project.slug}`} className="glass rounded-2xl p-7"><h3 className="text-xl">{project.title}</h3><p className="muted mt-3 text-sm">{project.description}</p></Link>)}</div></section>}
export function SkillsPreview(){return <section className="border-y border-white/10"><div className="section"><p className="eyebrow">Capabilities</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-7">{Object.entries(skills).map(([name,items])=><div className="glass rounded-2xl p-5" key={name}><p>{name}</p><p className="text-zinc-500 text-sm mt-3">{items.join(" · ")}</p></div>)}</div></div></section>}

export function Contact({ showEmailActions = false }: { showEmailActions?: boolean }) {
  return (
    <section className="section" id="contact">
      <Reveal>
        <div className="glass rounded-[2rem] p-8 sm:p-14 relative overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full bg-violet-600/20 blur-[80px] right-0 top-0" />
          <div className={`relative grid gap-12 ${showEmailActions ? "lg:grid-cols-2" : ""}`}>
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="heading mt-3">Let&apos;s make <span className="gradient-text">something matter.</span></h2>
              <p className="muted mt-5">Open to conversations about ambitious products, intelligent systems, and meaningful engineering.</p>
              <div className="mt-7 grid gap-4 text-sm text-zinc-300">
                <a href={mailtoUrl("Hello Dhananjay")} className="flex items-center gap-3 hover:text-white"><Mail size={17}/>{contact.email}</a>
                <a href="tel:+919510690787" className="flex items-center gap-3 hover:text-white"><Phone size={17}/>{contact.phone}</a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><MessageCircle size={17}/>Message on WhatsApp</a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><Linkedin size={17}/>Connect on LinkedIn</a>
                <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><Github size={17}/>Explore GitHub</a>
                <span className="flex items-center gap-3"><MapPin size={17}/>Mumbai, India</span>
              </div>
            </div>
            {showEmailActions && (
              <div className="flex flex-col justify-center gap-4">
                <p className="text-sm text-zinc-400">Reach Dhananjay directly by email. Messages go to {contact.email}.</p>
                <a className="button button-primary justify-center" href={gmailComposeUrl("Hello Dhananjay")} target="_blank" rel="noreferrer">Email on Gmail <Send size={15}/></a>
                <a className="button button-ghost justify-center" href={mailtoUrl("Hello Dhananjay")}>Open email app <Mail size={15}/></a>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
