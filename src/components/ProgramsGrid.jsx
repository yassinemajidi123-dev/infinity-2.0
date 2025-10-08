export default function ProgramsGrid() {
  const items = [
    {
      title: "IPTV Sport",
      text:
        "Watch live football, rugby matches, and all major French and international sporting events.",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path d="M12 3l3 6 6 1-4.5 4.4L18 21l-6-3.2L6 21l1.5-6.6L3 10l6-1 3-6z"
                fill="currentColor" opacity=".9"/>
        </svg>
      ),
    },
    {
      title: "Movies & Series on Demand",
      text:
        "Access a large catalog of international movies and series on demand.",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path d="M4 6h16v12H4z" fill="currentColor" opacity=".9"/>
          <path d="M7 6v3M11 6v3M15 6v3M19 6v3" stroke="currentColor" strokeWidth="2" opacity=".35"/>
        </svg>
      ),
    },
    {
      title: "All TV Channels",
      text:
        "Find your favorite shows with a comprehensive selection of leading international television channels.",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor" opacity=".9"/>
          <path d="M8 20h8" stroke="currentColor" strokeWidth="2" opacity=".35"/>
        </svg>
      ),
    },
    {
      title: "HD Documentaries",
      text:
        "Explore a vast collection of high-definition documentaries on history, nature, and science.",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path d="M12 3v18M6 9l6-6 6 6" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Kids’ Programs",
      text:
        "A wide selection of cartoons and educational shows for children, available anytime.",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <circle cx="8" cy="10" r="2" fill="currentColor"/>
          <circle cx="16" cy="10" r="2" fill="currentColor"/>
          <path d="M6 15c2.5 2 9.5 2 12 0" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Live News Channels",
      text:
        "Follow the news in real time with our French news channels, broadcast 24/7.",
      Icon: () => (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path d="M3 6h14a4 4 0 0 1 4 4v8H7a4 4 0 0 1-4-4V6z" fill="currentColor" opacity=".9"/>
          <path d="M8 10h8M8 14h10" stroke="#fff" strokeWidth="2" opacity=".6"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="section programs">
      <div className="container">
        <h2 className="programs-title">You’ll find your favorite programs here.</h2>
        <p className="programs-sub">
          Our unmatched advantages make us the top choice for everyone. Curious what sets us apart? Let’s find out together!
        </p>

        <div className="programs-grid">
          {items.map(({ title, text, Icon }, i) => (
            <article className="prog-card" key={i}>
              <div className="prog-icon">
                <span className="prog-icon-badge">
                  <Icon />
                </span>
              </div>
              <div className="prog-body">
                <h3 className="prog-title">{title}</h3>
                <p className="prog-text">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
