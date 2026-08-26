"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { certifications } from "@/data/certifications";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Search,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const driveUrl =
  "https://drive.google.com/drive/folders/14kc5Rkn2UbXstWtN2yl160mUUynBJCev";
const githubUrl = "https://github.com/lastchance786";
const linkedinUrl =
  "https://www.linkedin.com/in/tejas-wakchoure-572628300";

const skills = [
  "Power BI",
  "Tableau",
  "Datorama / MCI",
  "SQL",
  "Snowflake",
  "Python",
  "Alteryx",
  "Excel & VBA",
  "Google Apps Script",
  "Power Automate",
  "ETL",
  "Data Modeling",
];

const projects = [
  {
    title: "Multi-File Reporting Consolidation",
    type: "Automation",
    icon: Zap,
    text: "A Google Apps Script workflow designed to scan folders and subfolders, validate required columns, skip irrelevant tabs, and consolidate reporting data into a master sheet.",
    tools: ["Google Apps Script", "Google Sheets", "Data Validation"],
  },
  {
    title: "Marketing Intelligence Reporting",
    type: "Dashboarding",
    icon: BarChart3,
    text: "A stakeholder-facing reporting concept that brings campaign signals together and supports clearer performance analysis.",
    tools: ["Datorama / MCI", "Data Modeling", "Visualization"],
  },
  {
    title: "BI Operations Tracker",
    type: "Operations",
    icon: BriefcaseBusiness,
    text: "A structured operating tracker covering task ownership, support ownership, backup responsibility, effort, SOP status, and platform access.",
    tools: ["Excel", "Process Design", "Stakeholder Management"],
  },
];

const experience = [
  {
    company: "dentsu",
    role: "Assistant Manager · Business Intelligence",
    period: "Current",
    bullets: [
      "Business intelligence, analytics, reporting automation, data quality, and stakeholder-ready insights.",
      "Coordinates reporting workstreams, process visibility, platform access, and team delivery.",
    ],
  },
  {
    company: "IPG Mediabrands",
    role: "Senior Data Analyst",
    period: "Previous",
    bullets: [
      "Worked on reporting, dashboarding, automation, and media analytics workflows.",
      "Used Tableau, Python, Tableau Prep, Excel automation, and Alteryx in analytics delivery.",
    ],
  },
  {
    company: "Markgenic Software",
    role: "Senior Software Engineer",
    period: "Previous",
    bullets: [
      "Developed BI solutions using Power BI, SQL Server, Power Query, data modeling, and DAX.",
    ],
  },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [certQuery, setCertQuery] = useState("");

  const filteredCerts = useMemo(
    () =>
      certifications.filter((certificate) =>
        `${certificate.title} ${certificate.issuer} ${certificate.category}`
          .toLowerCase()
          .includes(certQuery.toLowerCase()),
      ),
    [certQuery],
  );

  const nav = [
    "About",
    "Skills",
    "Projects",
    "Certifications",
    "Experience",
    "Contact",
  ];

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#about">
          <span>TW</span>
          Tejas Wakchoure
        </a>

        <nav>
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label="Menu"
          aria-expanded={menu}
        >
          {menu ? <X /> : <Menu />}
        </button>

        {menu && (
          <div className="mobile-nav">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenu(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="about" className="hero shell">
        <div className="hero-copy">
          <div className="pill">
            <Sparkles size={16} />
            Turning data into confident decisions
          </div>

          <p className="eyebrow">Hello, I’m</p>
          <h1>
            Tejas
            <br />
            <span>Wakchoure.</span>
          </h1>
          <h2>Assistant Manager · Business Intelligence</h2>
          <p className="lead">
            I turn complex marketing and business data into clear decisions,
            scalable reporting systems, and reliable analytics workflows.
          </p>

          <div className="actions">
            <a className="primary" href="#projects">
              Explore my work <ArrowUpRight size={18} />
            </a>

            <a
              className="secondary"
              href="/CV_Tejas_Wakchoure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              View résumé
            </a>
          </div>

          <p className="location">
            <MapPin size={16} />
            Pune, Maharashtra, India
          </p>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-card">
            <Image
              src="/tejas-wakchoure.jpg"
              alt="Professional portrait"
              width={900}
              height={1200}
              priority
              className="portrait"
            />
            <div className="portrait-caption">
              <strong>Insight. Automation. Impact.</strong>
              <span>Business intelligence with practical outcomes.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="shell stats-grid">
          <div>
            <strong>5+</strong>
            <span>Years of experience</span>
          </div>
          <div>
            <strong>17+</strong>
            <span>Professional certificates</span>
          </div>
          <div>
            <strong>12</strong>
            <span>Core technologies</span>
          </div>
          <div>
            <strong>1</strong>
            <span>Clear goal: better decisions</span>
          </div>
        </div>
      </section>

      <section id="skills" className="section shell">
        <Title
          eyebrow="Capabilities"
          title="Business context first. Technology with purpose."
          text="A practical toolkit spanning business intelligence, cloud data, automation, data quality, and stakeholder delivery."
        />
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section alt">
        <div className="shell">
          <Title
            eyebrow="Selected work"
            title="Useful, usable, and maintainable analytics solutions."
            text="These project summaries avoid confidential client details. Add verified metrics and public screenshots before publishing."
          />
          <div className="grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <article className="card" key={project.title}>
                  <div className="icon">
                    <ProjectIcon />
                  </div>
                  <p className="tag">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tags">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certifications" className="section shell">
        <Title
          eyebrow="Continuous learning"
          title="Professional certifications, presented without clutter."
          text="Featured credentials appear here, while the complete public library remains available for verification."
        />

        <div className="cert-head">
          <div>
            <strong className="cert-count">17+</strong>
            <span>certificates available</span>
          </div>

          <label>
            <Search size={18} />
            <input
              value={certQuery}
              onChange={(event) => setCertQuery(event.target.value)}
              placeholder="Search certificates"
              aria-label="Search certificates"
            />
          </label>
        </div>

        <div className="grid cert-grid">
          {filteredCerts.map((certificate) => (
            <article className="card cert" key={certificate.title}>
              <div className="icon">
                <Award />
              </div>
              <p className="tag">{certificate.category}</p>
              <h3>{certificate.title}</h3>
              <p>
                {certificate.issuer}
                {certificate.issued ? ` · ${certificate.issued}` : ""}
              </p>
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View credential <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <p className="empty-state">No certificates match your search.</p>
        )}

        <a
          className="primary library"
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View complete certification library <ExternalLink size={18} />
        </a>
      </section>

      <section id="experience" className="section alt">
        <div className="shell">
          <Title
            eyebrow="Experience"
            title="A career built around analytics delivery and ownership."
          />
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.company}>
                <div className="period">{item.period}</div>
                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section shell">
        <div className="contact">
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>Have a BI challenge worth solving?</h2>
            <p>
              I’m interested in analytics, reporting automation, data quality,
              and business intelligence opportunities.
            </p>
          </div>
          <a
            className="dark-button"
            href="mailto:tejaswakchoure79@gmail.com"
          >
            <Mail size={18} />
            Start a conversation
          </a>
        </div>

        <footer>
          <span>© {new Date().getFullYear()} Tejas Wakchoure</span>
          <div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="mailto:tejaswakchoure79@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}

type TitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

function Title({ eyebrow, title, text }: TitleProps) {
  return (
    <div className="title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
