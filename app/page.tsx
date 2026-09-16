"use client";

import { useState } from "react";
import portfolio from "../data/portfolio.json";
import type { PortfolioData } from "../data/portfolio";
import { projects } from "../data/projects";
import projectStyles from "./projects.module.css";

const peepReport = "https://loclnx.github.io/LAZTAR-PEEP-2026-LeNguyenXuanLoc/";
const vietnameseProjectDescriptions = [
  "Hệ thống thương mại điện tử web và mobile cho phép khách hàng tìm kiếm, mua và đánh giá phụ kiện điện thoại; đồng thời hỗ trợ quản trị viên và nhân viên quản lý sản phẩm, đơn hàng, tồn kho, người dùng, chi nhánh và giá. Mình phát triển các luồng duyệt sản phẩm, giỏ hàng, checkout, thanh toán, theo dõi đơn hàng và khu vực quản trị; tích hợp RESTful API, phân quyền theo vai trò, Redux Toolkit, kiểm thử UI và validation form.",
  "Nền tảng quản lý hackathon cho người tham gia, điều phối viên, giám khảo, mentor và quản trị viên. Mình phát triển giao diện web responsive cùng màn hình React Native đa vai trò, hoàn thiện các luồng quản lý sự kiện, lập đội, nộp bài, chấm điểm, công bố kết quả, workshop, check-in, chat và thông báo; đồng thời tích hợp API, phân quyền UI, Socket.IO và xử lý lỗi giao diện.",
  "Ứng dụng học tiếng Nhật đa nền tảng với từ vựng, flashcard, quiz, luyện nghe, nói, viết, bookmark, lịch sử học và theo dõi tiến độ - kể cả khi offline. Mình phát triển các luồng Flutter, tích hợp RESTful API qua Dio và Riverpod, xác thực và refresh token, ghi/phát âm thanh, SQLite cùng đồng bộ dữ liệu; đồng thời xây dựng dịch vụ Node.js cho nội dung học, đánh giá nói/viết bằng Gemini và lưu media trên Cloudflare R2.",
];

export default function Home() {
  const [locale, setLocale] = useState<"en" | "vi">("en");
  const { profile, skills, experience, socialLinks } = portfolio as PortfolioData;
  const englishProfile = {
    ...profile,
    summary: "Final-year Software Engineering student at FPT University HCM, focused on web, mobile, and intuitive product experiences.",
    about: "I enjoy turning requirements into practical user journeys that are clear for people and maintainable for teams. With a foundation in frontend, mobile, and API integration, I care about both technical detail and the product value it creates.",
  };
  const englishExperience = {
    ...experience,
    description: "Contributed to SOS Tang Nhon Phu, a web-based SOS and request management system, by analyzing requirements, conducting functional testing, debugging issues, validating features, and improving user flows with the development team.",
  };
  const isVietnamese = locale === "vi";
  const activeProfile = isVietnamese ? profile : englishProfile;
  const activeExperience = isVietnamese ? experience : englishExperience;
  const localizedProjects = projects.map((project, index) => ({
    ...project,
    description: isVietnamese ? vietnameseProjectDescriptions[index] : project.description,
  }));
  const text = isVietnamese
    ? { about: "Giới thiệu", skills: "Kỹ năng", projects: "Dự án", experience: "Kinh nghiệm", contact: "Liên hệ", viewProjects: "Xem dự án", getInTouch: "Liên hệ", aboutTitle: "Tạo ra trải nghiệm số rõ ràng và hữu ích.", skillsTitle: "Kỹ năng & công cụ", projectsTitle: "Dự án nổi bật", experienceTitle: "Kinh nghiệm làm việc", contactDescription: "Mình luôn sẵn sàng trao đổi về sản phẩm, cơ hội hợp tác hoặc một ý tưởng mới.", email: "Gửi email", peep: "Xem báo cáo PEEP", backToTop: "Lên đầu trang", languageLabel: "Chuyển sang tiếng Anh" }
    : { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact", viewProjects: "View projects", getInTouch: "Get in touch", aboutTitle: "Building clear and useful digital experiences.", skillsTitle: "Skills and tools", projectsTitle: "Featured projects", experienceTitle: "Work experience", contactDescription: "I'm always open to a conversation about products, collaboration opportunities, or a new idea.", email: "Send an email", peep: "View PEEP report", backToTop: "Back to top", languageLabel: "Switch to Vietnamese" };
  return <main>
    <header className="header"><a className="brand" href="#home">LXL<span>.</span></a><nav><a href="#about">{text.about}</a><a href="#skills">{text.skills}</a><a href="#projects">{text.projects}</a><a href="#experience">{text.experience}</a><a href="#contact">{text.contact}</a><a href={peepReport} target="_blank" rel="noreferrer">PEEP Report ↗</a></nav><a className="button small" href="#projects">{text.viewProjects} ↗</a><details className="mobile-menu"><summary aria-label="Open menu">☰</summary><div><a href="#about">{text.about}</a><a href="#skills">{text.skills}</a><a href="#projects">{text.projects}</a><a href="#experience">{text.experience}</a><a href="#contact">{text.contact}</a><a href={peepReport} target="_blank" rel="noreferrer">PEEP Report ↗</a></div></details><button aria-label={text.languageLabel} onClick={() => setLocale(isVietnamese ? "en" : "vi")} style={{background:"transparent",border:"1px solid var(--line)",color:"var(--text)",cursor:"pointer",padding:"9px 11px",fontSize:"12px"}}>🌐 {isVietnamese ? "EN" : "VI"}</button></header>
    <section className="hero" id="home"><div className="copy"><p className="eyebrow">{activeProfile.role}</p><h1>Hi, I&apos;m <em>Lê Nguyễn<br />Xuân Lộc.</em></h1><p className="lead">{activeProfile.summary}</p><div className="actions"><a className="button" href="#projects">{text.viewProjects} ↓</a><a className="email" href={`mailto:${activeProfile.email}`}>{text.getInTouch} ↗</a></div><div className="socials">{socialLinks.map((link) => <a href={link.href} key={link.label} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.label} ↗</a>)}</div></div><div className="portrait" aria-hidden="true"><div className="orb"></div><div className="portrait-card"><small>BUILDING</small><strong>LXL</strong><small>USEFUL SOFTWARE</small></div><span>SOFTWARE ENGINEERING INTERN</span></div></section>
    <section className="section" id="about"><Heading index="01" label="ABOUT ME" title={text.aboutTitle}/><div className="about"><p>{activeProfile.about}</p><dl>{(isVietnamese ? [["Học vấn",activeProfile.education],["Tốt nghiệp dự kiến",activeProfile.graduation],["Địa điểm",activeProfile.location],["Định hướng",activeProfile.focus]] : [["Education",activeProfile.education],["Expected graduation",activeProfile.graduation],["Location",activeProfile.location],["Focus",activeProfile.focus]]).map(([name,value])=><div key={name}><dt>{name}</dt><dd>{value}</dd></div>)}</dl></div></section>
    <section className="section tinted" id="skills"><Heading index="02" label="TECHNICAL TOOLKIT" title={text.skillsTitle}/><div className="skill-grid">{skills.map((skill,index)=><article className="skill" key={skill.category}><span>0{index+1}</span><h3>{skill.category}</h3><p>{skill.items.join(" · ")}</p></article>)}</div></section>
    <section className="section" id="projects"><Heading index="03" label="SELECTED WORK" title={text.projectsTitle}/><div className={projectStyles.projects}>{localizedProjects.map((project,index)=><article className={projectStyles.project} key={project.name}><div className={`${projectStyles.visual} visual visual-${index}`}><span>0{index+1}</span><i></i></div><div className={`${projectStyles.body} project-body`}><p className="role">{project.role}</p><h3>{project.name}</h3><p>{project.description}</p><ul>{project.tech.map((item)=><li key={item}>{item}</li>)}</ul><div>{project.links.map((link)=><a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div></article>)}</div></section>
    <section className="section experience" id="experience"><Heading index="04" label="EXPERIENCE" title={text.experienceTitle}/><article><p>{activeExperience.period}</p><div><h3>{activeExperience.role}</h3><b>{activeExperience.company}</b><p>{activeExperience.description}</p></div></article></section>
    <section className="contact" id="contact"><p className="eyebrow">05 / LET&apos;S CONNECT</p><h2>{isVietnamese ? <>Cùng tạo nên sản phẩm <em>tiếp theo.</em></> : <>Let&apos;s create the <em>next product.</em></>}</h2><p>{text.contactDescription}</p><div className="actions"><a className="button" href={`mailto:${activeProfile.email}`}>{text.email} ↗</a><a className="outline" href={activeProfile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div><small><a href={peepReport} target="_blank" rel="noreferrer">{text.peep} ↗</a></small></section>
    <footer><a className="brand" href="#home">LXL<span>.</span></a><span>© 2026 Lê Nguyễn Xuân Lộc</span><a href="#home">{text.backToTop} ↑</a></footer>
  </main>;
}

function Heading({index,label,title}:{index:string;label:string;title:string}) { return <div className="heading"><p className="eyebrow">{index} / {label}</p><h2>{title}</h2></div>; }
