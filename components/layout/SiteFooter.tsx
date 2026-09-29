type SiteFooterProps = { backToTop: string };

export function SiteFooter({ backToTop }: SiteFooterProps) {
  return <footer><a className="brand" href="#home">LXL<span>.</span></a><span>© 2026 Lê Nguyễn Xuân Lộc</span><a href="#home">{backToTop} ↑</a></footer>;
}
