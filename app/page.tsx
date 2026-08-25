"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { certifications } from "@/data/certifications";
import { ArrowUpRight, Award, BarChart3, BriefcaseBusiness, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Menu, Search, Sparkles, X, Zap } from "lucide-react";

const driveUrl = "https://drive.google.com/drive/folders/14kc5Rkn2UbXstWtN2yl160mUUynBJCev";
const githubUrl = "https://github.com/lastchance786";
const linkedinUrl = "https://www.linkedin.com/in/tejas-wakchoure-572628300";

const skills = ["Power BI", "Tableau", "Datorama / MCI", "SQL", "Snowflake", "Python", "Alteryx", "Excel & VBA", "Google Apps Script", "Power Automate", "ETL", "Data Modeling"];

const projects = [
  { title: "Multi-File Reporting Consolidation", type: "Automation", icon: Zap, text: "A Google Apps Script workflow designed to scan folders and subfolders, validate required columns, skip irrelevant tabs, and consolidate reporting data into a master sheet.", tools: ["Google Apps Script", "Google Sheets", "Data Validation"] },
  { title: "Marketing Intelligence Reporting", type: "Dashboarding", icon: BarChart3, text: "A stakeholder-facing reporting concept that brings campaign signals together and supports clearer performance analysis.", tools: ["Datorama / MCI", "Data Modeling", "Visualization"] },
  { title: "BI Operations Tracker", type: "Operations", icon: BriefcaseBusiness, text: "A structured operating tracker covering task ownership, support ownership, backup responsibility, effort, SOP status, and platform access.", tools: ["Excel", "Process Design", "Stakeholder Management"] },
];

const experience = [
  { company: "dentsu", role: "Assistant Manager · Business Intelligence", period: "Current", bullets: ["Business intelligence, analytics, reporting automation, data quality, and stakeholder-ready insights.", "Coordinates reporting workstreams, process visibility, platform access, and team delivery."] },
  { company: "IPG Mediabrands", role: "Senior Data Analyst", period: "Previous", bullets: ["Worked on reporting, dashboarding, automation, and media analytics workflows.", "Used Tableau, Python, Tableau Prep, Excel automation, and Alteryx in analytics delivery."] },
  { company: "Markgenic Software", role: "Senior Software Engineer", period: "Previous", bullets: ["Developed BI solutions using Power BI, SQL Server, Power Query, data modeling, and DAX."] },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [certQuery, setCertQuery] = useState("");
  const filteredCerts = useMemo(() => certifications.filter(c => `${c.title} ${c.issuer} ${c.category}`.toLowerCase().includes(certQuery.toLowerCase())), [certQuery]);
  const nav = ["About", "Skills", "Projects", "Certifications", "Experience", "Contact"];

  return <main>
    <header className="nav"><a className="brand" href="#about"><span>TW</span>Tejas Wakchoure</a><nav>{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav><button className="menu" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button>{menu && <div className="mobile-nav">{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setMenu(false)}>{n}</a>)}</div>}</header>

    <section id="about" className="hero shell">
      <div className="hero-copy"><div className="pill"><Sparkles size={16}/>Turning data into confident decisions</div><p className="eyebrow">Hello, I’m</p><h1>Tejas<br/><span>Wakchoure.</span></h1><h2>Assistant Manager · Business Intelligence</h2><p className="lead">I turn complex marketing and business data into clear decisions, scalable reporting systems, and reliable analytics workflows.</p><div className="actions"><a className="primary" href="#projects">Explore my work <ArrowUpRight size={18}/></a><a className="secondary" href="/resume.pdf" download><Download size={18}/>Download résumé</a></div><p className="location"><MapPin size={16}/>Pune, Maharashtra, India</p></div>
      <div className="portrait-wrap"><div className="portrait-card"><Image src="/tejas-wakchoure.jpg" alt="Professional portrait" width={900} height={1200} priority className="portrait"/><div className="portrait-caption"><strong>Insight. Automation. Impact.</strong><span>Business intelligence with practical outcomes.</span></div></div></div>
    </section>

    <section className="stats"><div className="shell stats-grid"><div><strong>5+</strong><span>Years of experience</span></div><div><strong>17+</strong><span>Professional certificates</span></div><div><strong>12</strong><span>Core technologies</span></div><div><strong>1</strong><span>Clear goal: better decisions</span></div></div></section>

    <section id="skills" className="section shell"><Title eyebrow="Capabilities" title="Business context first. Technology with purpose." text="A practical toolkit spanning business intelligence, cloud data, automation, data quality, and stakeholder delivery."/><div className="skills">{skills.map(s => <span key={s}>{s}</span>)}</div></section>

    <section id="projects" className="section alt"><div className="shell"><Title eyebrow="Selected work" title="Useful, usable, and maintainable analytics solutions." text="These project summaries avoid confidential client details. Add verified metrics and public screenshots before publishing."/><div className="grid">{projects.map(p => <article className="card" key={p.title}><div className="icon"><p.icon/></div><p className="tag">{p.type}</p><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tools.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></div></section>

    <section id="certifications" className="section shell"><Title eyebrow="Continuous learning" title="Professional certifications, presented without clutter." text="Featured credentials appear here, while the complete public library remains available for verification."/><div className="cert-head"><div><strong className="cert-count">17+</strong><span>certificates available</span></div><label><Search size={18}/><input value={certQuery} onChange={e=>setCertQuery(e.target.value)} placeholder="Search certificates"/></label></div><div className="grid cert-grid">{filteredCerts.map(c=><article className="card cert" key={c.title}><div className="icon"><Award/></div><p className="tag">{c.category}</p><h3>{c.title}</h3><p>{c.issuer}{c.issued ? ` · ${c.issued}` : ""}</p><a href={c.url} target="_blank" rel="noreferrer">View credential <ExternalLink size={16}/></a></article>)}</div><a className="primary library" href={driveUrl} target="_blank" rel="noreferrer">View complete certification library <ExternalLink size={18}/></a></section>

    <section id="experience" className="section alt"><div className="shell"><Title eyebrow="Experience" title="A career built around analytics delivery and ownership."/><div className="timeline">{experience.map(e=><article key={e.company}><div className="period">{e.period}</div><div><h3>{e.role}</h3><h4>{e.company}</h4><ul>{e.bullets.map(b=><li key={b}>{b}</li>)}</ul></div></article>)}</div></div></section>

    <section id="contact" className="section shell"><div className="contact"><div><p className="eyebrow">Let’s connect</p><h2>Have a BI challenge worth solving?</h2><p>I’m interested in analytics, reporting automation, data quality, and business intelligence opportunities.</p></div><a className="dark-button" href="mailto:tejaswakchoure79@gmail.com"><Mail size={18}/>Start a conversation</a></div><footer><span>© {new Date().getFullYear()} Tejas Wakchoure</span><div><a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href="mailto:tejaswakchoure79@gmail.com" aria-label="Email"><Mail/></a></div></footer></section>
  </main>;
}

function Title({ eyebrow, title, text }: {eyebrow:string; title:string; text?:string}) { return <div className="title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div> }
