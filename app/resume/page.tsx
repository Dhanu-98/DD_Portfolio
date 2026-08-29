import { Mail } from "lucide-react";
import { contact, gmailComposeUrl, mailtoUrl, resumeRequestBody, resumeRequestSubject } from "@/lib/data";

export default function Resume() {
  return (
    <main className="min-h-screen grid place-items-center px-5">
      <div className="glass rounded-[2rem] p-10 sm:p-16 max-w-xl text-center">
        <p className="eyebrow">Résumé</p>
        <h1 className="heading mt-3">A concise view of my <span className="gradient-text">work.</span></h1>
        <p className="muted mt-6">Dhananjay Datir · Software Engineer · AI & Machine Learning Engineer</p>
        <p className="muted mt-4 text-sm">Click below to email {contact.email} with a résumé request already written for you.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a className="button button-primary justify-center" href={gmailComposeUrl(resumeRequestSubject, resumeRequestBody)} target="_blank" rel="noreferrer">
            Request résumé on Gmail <Mail size={16} />
          </a>
          <a className="button button-ghost justify-center" href={mailtoUrl(resumeRequestSubject, resumeRequestBody)}>
            Open email app
          </a>
        </div>
      </div>
    </main>
  );
}
