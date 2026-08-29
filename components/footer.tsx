import Link from "next/link";
import { Linkedin } from "lucide-react";
import { contact } from "@/lib/data";

export function Footer() {
  return <footer className="border-t border-white/10"><div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-sm text-zinc-500"><span>Designed &amp; Built by Dhananjay Datir</span><span>© {new Date().getFullYear()} · Mumbai, India</span><a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition" aria-label="Connect with Dhananjay on LinkedIn"><Linkedin size={16}/> Let&apos;s connect</a></div></footer>;
}
