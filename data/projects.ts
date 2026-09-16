import type { Project } from "./portfolio";

export const projects: Project[] = [
  {
    name: "Phone Accessories System",
    role: "BUSINESS ANALYST / FULL-STACK DEVELOPER · 01/2026 - 03/2026",
    description:
      "Hệ thống thương mại điện tử web và mobile, cho phép khách hàng tìm kiếm, mua và đánh giá phụ kiện điện thoại; đồng thời hỗ trợ quản trị viên và nhân viên quản lý sản phẩm, đơn hàng, tồn kho, người dùng, chi nhánh và giá. Mình phát triển các luồng duyệt sản phẩm, giỏ hàng, checkout, thanh toán, theo dõi đơn hàng và khu vực quản trị; tích hợp RESTful API, phân quyền theo vai trò, Redux Toolkit, kiểm thử UI và validation form.",
    tech: ["ReactJS", "TypeScript", "React Native", "MongoDB", "Redux Toolkit", "VNPay Sandbox"],
    links: [
      { label: "Frontend", href: "https://github.com/nganne2203/SDN302_PROJECT_FE" },
      { label: "Backend", href: "https://github.com/nganne2203/SDN302_PROJECT_BE" },
    ],
  },
  {
    name: "Hackathon Management System",
    role: "BUSINESS ANALYST / FULL-STACK DEVELOPER · 05/2026 - 07/2026",
    description:
      "Nền tảng quản lý hackathon cho người tham gia, điều phối viên, giám khảo, mentor và quản trị viên. Mình phát triển giao diện web responsive cùng màn hình React Native đa vai trò, hoàn thiện các luồng quản lý sự kiện, lập đội, nộp bài, chấm điểm, công bố kết quả, workshop, check-in, chat và thông báo; đồng thời tích hợp API, phân quyền UI, Socket.IO và xử lý lỗi giao diện.",
    tech: ["React Native", "TypeScript", "NodeJS", "Socket.IO", "Redis", "Docker"],
    links: [
      { label: "Frontend", href: "https://github.com/nganne2203/WDP301_HACKATHON_G04_FE" },
      { label: "Backend", href: "https://github.com/nganne2203/WDP301_HACKATHON_G04_BE" },
      { label: "Mobile", href: "https://github.com/nganne2203/WDP301_HACKATHON_G04_RN" },
    ],
  },
  {
    name: "Maihongo Japanese Learning App",
    role: "BUSINESS ANALYST / FULL-STACK DEVELOPER · 05/2026 - 07/2026",
    description:
      "Ứng dụng học tiếng Nhật đa nền tảng với từ vựng, flashcard, quiz, luyện nghe, nói, viết, bookmark, lịch sử học và theo dõi tiến độ - kể cả khi offline. Mình phát triển các luồng Flutter, tích hợp RESTful API qua Dio và Riverpod, xác thực và refresh token, ghi/phát âm thanh, SQLite cùng đồng bộ dữ liệu; đồng thời xây dựng dịch vụ Node.js cho nội dung học, đánh giá nói/viết bằng Gemini và lưu media trên Cloudflare R2.",
    tech: ["Flutter", "Riverpod", "SQLite", "ExpressJS", "Gemini API", "Cloudflare R2"],
    links: [
      { label: "Mobile", href: "https://github.com/nganne2203/PRM393_MaiHonGo_MB" },
      { label: "Backend", href: "https://github.com/nganne2203/PRM393_MaiHonGo_BE" },
    ],
  },
];
