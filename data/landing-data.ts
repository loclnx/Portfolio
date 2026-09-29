import portfolio from "./portfolio.json";
import type { PortfolioData, Profile } from "./portfolio";
import { projects } from "./projects";

export type Locale = "en" | "vi";

export type LandingCopy = {
  navigation: readonly string[];
  sectionLabels: readonly string[];
  details: readonly string[];
  aboutTitle: string;
  skillsTitle: string;
  projectsTitle: string;
  experienceTitle: string;
  viewProjects: string;
  getInTouch: string;
  email: string;
  peep: string;
  backToTop: string;
  contactDescription: string;
  contactTitle: readonly [string, string];
  heroGreeting: string;
  languageLabel: string;
};

export const peepReportUrl = "https://loclnx.github.io/LAZTAR-PEEP-2026-LeNguyenXuanLoc/";
export const { profile: vietnameseProfile, skills, experience: vietnameseExperience, socialLinks } = portfolio as PortfolioData;

export const englishProfile: Profile = {
  ...vietnameseProfile,
  summary: "Final-year Software Engineering student at FPT University HCM, focused on web, mobile, and intuitive product experiences.",
  about: "I enjoy turning requirements into practical user journeys that are clear for people and maintainable for teams. With a foundation in frontend, mobile, and API integration, I care about both technical detail and the product value it creates.",
  location: "Thu Duc City, Ho Chi Minh City",
};

export const englishExperience = {
  ...vietnameseExperience,
  description: "Contributed to SOS Tang Nhon Phu, a web-based SOS and request management system, by analyzing requirements, conducting functional testing, debugging issues, validating features, and improving user flows with the development team.",
};

const vietnameseProjectDescriptions = [
  "Hệ thống thương mại điện tử web và mobile cho phép khách hàng tìm kiếm, mua và đánh giá phụ kiện điện thoại; đồng thời hỗ trợ quản trị viên và nhân viên quản lý sản phẩm, đơn hàng, tồn kho, người dùng, chi nhánh và giá. Mình phát triển các luồng duyệt sản phẩm, giỏ hàng, checkout, thanh toán, theo dõi đơn hàng và khu vực quản trị; tích hợp RESTful API, phân quyền theo vai trò, Redux Toolkit, kiểm thử UI và validation form.",
  "Nền tảng quản lý hackathon cho người tham gia, điều phối viên, giám khảo, mentor và quản trị viên. Mình phát triển giao diện web responsive cùng màn hình React Native đa vai trò, hoàn thiện các luồng quản lý sự kiện, lập đội, nộp bài, chấm điểm, công bố kết quả, workshop, check-in, chat và thông báo; đồng thời tích hợp API, phân quyền UI, Socket.IO và xử lý lỗi giao diện.",
  "Ứng dụng học tiếng Nhật đa nền tảng với từ vựng, flashcard, quiz, luyện nghe, nói, viết, bookmark, lịch sử học và theo dõi tiến độ - kể cả khi offline. Mình phát triển các luồng Flutter, tích hợp RESTful API qua Dio và Riverpod, xác thực và refresh token, ghi/phát âm thanh, SQLite cùng đồng bộ dữ liệu; đồng thời xây dựng dịch vụ Node.js cho nội dung học, đánh giá nói/viết bằng Gemini và lưu media trên Cloudflare R2.",
];

export const localizedProjects = (locale: Locale) => projects.map((project, index) => ({
  ...project,
  description: locale === "vi" ? vietnameseProjectDescriptions[index] ?? project.description : project.description,
}));

export const landingContent: Record<Locale, LandingCopy> = {
  en: { navigation: ["About", "Skills", "Projects", "Experience", "Contact"], sectionLabels: ["ABOUT ME", "TECHNICAL TOOLKIT", "SELECTED WORK", "EXPERIENCE"], details: ["Education", "Expected graduation", "Location", "Focus"], aboutTitle: "Building clear and useful digital experiences.", skillsTitle: "Skills and tools", projectsTitle: "Featured projects", experienceTitle: "Work experience", viewProjects: "View projects", getInTouch: "Get in touch", email: "Send an email", peep: "View PEEP report", backToTop: "Back to top", contactDescription: "I'm always open to a conversation about products, collaboration opportunities, or a new idea.", contactTitle: ["Let's create the", "next product."], heroGreeting: "Hi, I'm", languageLabel: "Switch to Vietnamese" },
  vi: { navigation: ["Giới thiệu", "Kỹ năng", "Dự án", "Kinh nghiệm", "Liên hệ"], sectionLabels: ["GIỚI THIỆU", "BỘ CÔNG CỤ KỸ THUẬT", "DỰ ÁN TIÊU BIỂU", "KINH NGHIỆM"], details: ["Học vấn", "Tốt nghiệp dự kiến", "Địa điểm", "Định hướng"], aboutTitle: "Tạo ra trải nghiệm số rõ ràng và hữu ích.", skillsTitle: "Kỹ năng & công cụ", projectsTitle: "Dự án nổi bật", experienceTitle: "Kinh nghiệm làm việc", viewProjects: "Xem dự án", getInTouch: "Liên hệ", email: "Gửi email", peep: "Xem báo cáo PEEP", backToTop: "Lên đầu trang", contactDescription: "Mình luôn sẵn sàng trao đổi về sản phẩm, cơ hội hợp tác hoặc một ý tưởng mới.", contactTitle: ["Cùng tạo nên sản phẩm", "tiếp theo."], heroGreeting: "Xin chào, mình là", languageLabel: "Chuyển sang tiếng Anh" },
};
