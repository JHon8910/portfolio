import React, { useState, useEffect } from "react";

const FONTS_LINK =
	"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap";

const palette = {
	bg: "#12233D",
	bgSoft: "#0E1C33",
	card: "#1B3252",
	cardBorder: "#33507A",
	grid: "#22395C",
	text: "#EDEFF2",
	textSoft: "#9FB1C7",
	textFaint: "#6E82A0",
	amber: "#E8963D",
	cyan: "#5FD4C7",
};

const skills = {
	Languages: [
		"C",
		"C++",
		"Java",
		"JavaScript",
		"TypeScript",
		"Python",
		"Assembly",
	],
	"Frameworks & tools": ["React", "Node.js", "Git", "Docker"],
	Systems: ["Linux", "REST APIs", "PostgreSQL", "Raspberry Pi"],
};

const projects = [
	{
		tag: "// full-stack",
		title: "CSE physical space management app",
		period: "2025",
		role: "Backend developer",
		summary:
			"An internal application for booking and managing physical spaces, handling room availability and access permissions.",
		detail:
			"Designed the PostgreSQL schemas and backend APIs behind booking, permissions and room availability. Worked directly with stakeholders across iterative development cycles to refine requirements and ship backend features that matched how the space actually needed to be managed.",
		stack: ["React", "Python", "Flask", "PostgreSQL"],
		status: "shipped",
		link: "",
	},
	{
		tag: "// frontend",
		title: "Presto",
		period: "2024",
		role: "Full frontend build, no backend",
		summary:
			"A Google Slides-style deck editor built entirely in React, with no server behind it — slides, shapes, images and any number of saved documents, all client-side.",
		detail:
			"Built the entire app in React, including a client-side data layer for creating, editing and switching between slide documents with zero backend and no cap on how many documents could be stored. Implemented slide creation, image and shape insertion, and the state management needed to keep a canvas-style editor responsive without a server to lean on. Built with one other developer.",
		stack: ["React", "JavaScript", "State management"],
		status: "shipped",
		link: "",
	},
	{
		tag: "// backend",
		title: "Dungeon explorer game",
		period: "2024",
		role: "Backend developer",
		summary:
			"A real-time dungeon crawler with the entities, mechanics and interactions built out on the backend, integrated with a provided front end.",
		detail:
			"Built the backend using object-oriented design to model game mechanics, entities and their interactions. Worked in an Agile team, testing and integrating backend functionality against a provided front-end application on a shared sprint cadence.",
		stack: ["Java", "OOP design", "Agile"],
		status: "shipped",
		link: "",
	},
	{
		tag: "// hardware",
		title: "Maze-navigating robot",
		period: "2025",
		role: "Hardware build & calibration",
		summary:
			"An autonomous robot that maps and navigates a maze using LIDAR and IMU sensing, with a fully 3D-printed chassis designed from scratch — and completed the maze successfully.",
		detail:
			"Designed the robot's components in SolidWorks and 3D-printed the base and body, then assembled and soldered the electronics onto the board. Worked on an Arduino platform with LIDAR and IMU for maze sensing, and helped calibrate the robot's movement — it went on to successfully complete the maze.",
		stack: ["Arduino", "LIDAR", "IMU", "SolidWorks", "3D printing"],
		status: "shipped",
		link: "",
	},
];

function Corner({ pos }) {
	const size = 14;
	const style = {
		position: "absolute",
		width: size,
		height: size,
		...(pos.includes("top") ? { top: -1 } : { bottom: -1 }),
		...(pos.includes("left") ? { left: -1 } : { right: -1 }),
		borderTop: pos.includes("top") ? `2px solid ${palette.amber}` : "none",
		borderBottom: pos.includes("bottom")
			? `2px solid ${palette.amber}`
			: "none",
		borderLeft: pos.includes("left") ? `2px solid ${palette.amber}` : "none",
		borderRight: pos.includes("right") ? `2px solid ${palette.amber}` : "none",
	};
	return <div style={style} />;
}

function SpecCard({ project }) {
	const [open, setOpen] = useState(false);
	return (
		<div
			style={{
				position: "relative",
				background: palette.card,
				border: `1px solid ${palette.cardBorder}`,
				padding: "28px 28px 24px",
				marginBottom: 20,
			}}
		>
			<Corner pos="top-left" />
			<Corner pos="top-right" />
			<Corner pos="bottom-left" />
			<Corner pos="bottom-right" />

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "baseline",
					flexWrap: "wrap",
					gap: 8,
					marginBottom: 10,
				}}
			>
				<span
					style={{
						fontFamily: "'IBM Plex Mono', monospace",
						fontSize: 12,
						color: palette.cyan,
						letterSpacing: 0.5,
					}}
				>
					{project.tag}
				</span>
				<span
					style={{
						fontFamily: "'IBM Plex Mono', monospace",
						fontSize: 11,
						color: palette.textFaint,
					}}
				>
					{project.period}
				</span>
			</div>

			<h3
				style={{
					fontFamily: "'Space Grotesk', sans-serif",
					fontWeight: 600,
					fontSize: 22,
					color: palette.text,
					margin: "0 0 4px",
				}}
			>
				{project.title}
			</h3>
			<p
				style={{
					fontFamily: "'IBM Plex Mono', monospace",
					fontSize: 12,
					color: palette.textFaint,
					margin: "0 0 14px",
				}}
			>
				{project.role}
			</p>

			<p
				style={{
					fontFamily: "'IBM Plex Sans', sans-serif",
					fontSize: 15,
					lineHeight: 1.6,
					color: palette.textSoft,
					margin: "0 0 14px",
				}}
			>
				{project.summary}
			</p>

			{open && (
				<p
					style={{
						fontFamily: "'IBM Plex Sans', sans-serif",
						fontSize: 14,
						lineHeight: 1.65,
						color: palette.textSoft,
						borderTop: `1px solid ${palette.cardBorder}`,
						paddingTop: 14,
						margin: "0 0 14px",
					}}
				>
					{project.detail}
				</p>
			)}

			<div
				style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}
			>
				{project.stack.map((s) => (
					<span
						key={s}
						style={{
							fontFamily: "'IBM Plex Mono', monospace",
							fontSize: 11,
							color: palette.amber,
							border: `1px solid ${palette.amber}55`,
							padding: "3px 9px",
						}}
					>
						{s}
					</span>
				))}
			</div>

			<button
				onClick={() => setOpen(!open)}
				style={{
					background: "none",
					border: "none",
					padding: 0,
					fontFamily: "'IBM Plex Mono', monospace",
					fontSize: 12,
					color: palette.cyan,
					cursor: "pointer",
					textDecoration: "underline",
					textUnderlineOffset: 3,
				}}
			>
				{open ? "hide detail" : "read detail →"}
			</button>
		</div>
	);
}

export default function Portfolio() {
	const [eggOpen, setEggOpen] = useState(false);
	const [clicks, setClicks] = useState(0);
	const [sixSevenOpen, setSixSevenOpen] = useState(false);

	const handleSecretClick = () => {
		const next = clicks + 1;
		setClicks(next);
		if (next >= 3) {
			setEggOpen(true);
			setClicks(0);
		}
	};

	useEffect(() => {
		let buffer = "";
		let timeoutId;
		const onKeyDown = (e) => {
			if (!/^[0-9]$/.test(e.key)) return;
			buffer = (buffer + e.key).slice(-2);
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				buffer = "";
			}, 1200);
			if (buffer === "67") {
				setSixSevenOpen(true);
				buffer = "";
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			clearTimeout(timeoutId);
		};
	}, []);
	return (
		<div
			style={{
				background: palette.bg,
				minHeight: "100vh",
				backgroundImage: `
          linear-gradient(${palette.grid} 1px, transparent 1px),
          linear-gradient(90deg, ${palette.grid} 1px, transparent 1px)
        `,
				backgroundSize: "36px 36px",
			}}
		>
			<link rel="stylesheet" href={FONTS_LINK} />
			<div
				style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px 100px" }}
			>
				{/* HERO */}
				<div style={{ marginBottom: 64 }}>
					<p
						style={{
							fontFamily: "'IBM Plex Mono', monospace",
							fontSize: 13,
							color: palette.cyan,
							letterSpacing: 1,
							margin: "0 0 18px",
						}}
					>
						// portfolio.spec
					</p>
					<h1
						style={{
							fontFamily: "'Space Grotesk', sans-serif",
							fontWeight: 700,
							fontSize: "clamp(40px, 8vw, 64px)",
							lineHeight: 1.05,
							color: palette.text,
							margin: "0 0 16px",
						}}
					>
						Jason
						<br />
						<span style={{ color: palette.amber }}>Hon</span>
					</h1>
					<p
						style={{
							fontFamily: "'IBM Plex Sans', sans-serif",
							fontSize: 19,
							color: palette.textSoft,
							lineHeight: 1.5,
							maxWidth: 520,
							margin: "0 0 28px",
						}}
					>
						Computer Science and Mechatronics Engineering student at UNSW,
						building full-stack software with a systems mindset.
					</p>

					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "10px 28px",
							fontFamily: "'IBM Plex Mono', monospace",
							fontSize: 13,
							color: palette.textFaint,
							borderTop: `1px solid ${palette.cardBorder}`,
							borderBottom: `1px solid ${palette.cardBorder}`,
							padding: "14px 0",
						}}
					>
						<span>loc: sydney, au</span>
						<span>stack: full-stack</span>
					</div>

					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: 14,
							marginTop: 24,
						}}
					>
						{[
							{ label: "email", href: "mailto:jasonhon8910@gmail.com" },
							{ label: "github", href: "https://github.com/JHon8910" },
							{
								label: "linkedin",
								href: "https://www.linkedin.com/in/jason-hon-63173a311/",
							},
							{ label: "resume", href: "#" },
						].map(({ label, href }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								style={{
									fontFamily: "'IBM Plex Mono', monospace",
									fontSize: 13,
									color: palette.bg,
									background: palette.amber,
									padding: "9px 16px",
									textDecoration: "none",
								}}
							>
								{label}
							</a>
						))}
					</div>
				</div>

				{/* PROJECTS */}
				<div style={{ marginBottom: 56 }}>
					<p
						style={{
							fontFamily: "'IBM Plex Mono', monospace",
							fontSize: 13,
							color: palette.cyan,
							letterSpacing: 1,
							margin: "0 0 20px",
						}}
					>
						// selected work
					</p>
					{projects.map((p) => (
						<SpecCard project={p} key={p.title} />
					))}
				</div>

				{/* BEYOND CODE */}
				<div style={{ marginBottom: 56 }}>
					<p
						style={{
							fontFamily: "'IBM Plex Mono', monospace",
							fontSize: 13,
							color: palette.cyan,
							letterSpacing: 1,
							margin: "0 0 20px",
						}}
					>
						// beyond code
					</p>
					<div
						style={{
							background: palette.card,
							border: `1px solid ${palette.cardBorder}`,
							padding: "24px 28px",
						}}
					>
						{[
							{
								title: "University tutor — programming fundamentals",
								period: "2022 – present",
								detail:
									"Taught C and C++ fundamentals to 200+ university students, holding 95%+ student satisfaction while adapting teaching approaches based on feedback. Built marking templates and assessment resources to keep grading consistent and efficient across a large cohort.",
							},
							{
								title: "Externals director, CompClub",
								period: "2022 – 2024",
								detail:
									"Led programming workshops for 500+ high school students, designing exercises in C, C++, Python, HTML/CSS and JavaScript for a wide range of experience levels. Mentored presenters and volunteers, and expanded outreach to regional NSW, reaching 200+ additional students.",
							},
						].map((item, i, arr) => (
							<div
								key={item.title}
								style={{
									marginBottom: i === arr.length - 1 ? 0 : 18,
									paddingBottom: i === arr.length - 1 ? 0 : 18,
									borderBottom:
										i === arr.length - 1
											? "none"
											: `1px solid ${palette.cardBorder}`,
								}}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "baseline",
										flexWrap: "wrap",
										gap: 8,
										marginBottom: 6,
									}}
								>
									<h4
										style={{
											fontFamily: "'Space Grotesk', sans-serif",
											fontWeight: 600,
											fontSize: 16,
											color: palette.text,
											margin: 0,
										}}
									>
										{item.title}
									</h4>
									<span
										style={{
											fontFamily: "'IBM Plex Mono', monospace",
											fontSize: 11,
											color: palette.textFaint,
										}}
									>
										{item.period}
									</span>
								</div>
								<p
									style={{
										fontFamily: "'IBM Plex Sans', sans-serif",
										fontSize: 14,
										lineHeight: 1.6,
										color: palette.textSoft,
										margin: 0,
									}}
								>
									{item.detail}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* SKILLS */}
				<div style={{ marginBottom: 56 }}>
					<p
						style={{
							fontFamily: "'IBM Plex Mono', monospace",
							fontSize: 13,
							color: palette.cyan,
							letterSpacing: 1,
							margin: "0 0 20px",
						}}
					>
						// toolkit
					</p>
					<div
						style={{
							background: palette.card,
							border: `1px solid ${palette.cardBorder}`,
							padding: "24px 28px",
						}}
					>
						{Object.entries(skills).map(([group, items], i) => (
							<div
								key={group}
								style={{
									display: "flex",
									flexWrap: "wrap",
									alignItems: "baseline",
									gap: 10,
									marginBottom: i === Object.keys(skills).length - 1 ? 0 : 14,
								}}
							>
								<span
									style={{
										fontFamily: "'IBM Plex Mono', monospace",
										fontSize: 12,
										color: palette.textFaint,
										width: 140,
										flexShrink: 0,
									}}
								>
									{group}
								</span>
								<div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
									{items.map((s) => (
										<span
											key={s}
											style={{
												fontFamily: "'IBM Plex Sans', sans-serif",
												fontSize: 13,
												color: palette.text,
											}}
										>
											{s}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* FOOTER */}
				<div
					style={{
						borderTop: `1px solid ${palette.cardBorder}`,
						paddingTop: 20,
						fontFamily: "'IBM Plex Mono', monospace",
						fontSize: 12,
						color: palette.textFaint,
					}}
				>
					built by jason — updated 2026
					<span
						onClick={handleSecretClick}
						style={{
							cursor: "default",
							padding: "0 2px",
							userSelect: "none",
						}}
					>
						.
					</span>
				</div>

				{eggOpen && (
					<div
						onClick={() => setEggOpen(false)}
						style={{
							position: "fixed",
							inset: 0,
							background: "rgba(6, 13, 24, 0.75)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							zIndex: 999,
							cursor: "pointer",
						}}
					>
						<style>{`
              @keyframes spin360 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
              @keyframes popIn { 0% { transform: scale(0.7); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
            `}</style>
						<div
							onClick={(e) => e.stopPropagation()}
							style={{
								background: palette.card,
								border: `1px solid ${palette.amber}`,
								padding: "32px 36px",
								maxWidth: 320,
								textAlign: "center",
								animation: "popIn 0.35s ease-out",
							}}
						>
							<div
								style={{
									fontSize: 40,
									marginBottom: 14,
									display: "inline-block",
									animation: "spin360 1.6s linear infinite",
								}}
							>
								⚙
							</div>
							<p
								style={{
									fontFamily: "'Space Grotesk', sans-serif",
									fontWeight: 600,
									fontSize: 17,
									color: palette.text,
									margin: "0 0 8px",
								}}
							>
								Systems check: passed
							</p>
							<p
								style={{
									fontFamily: "'IBM Plex Sans', sans-serif",
									fontSize: 13,
									color: palette.textSoft,
									lineHeight: 1.6,
									margin: "0 0 18px",
								}}
							>
								You found the hidden bolt in the blueprint. Most recruiters
								don't scroll this far, let alone click three times — nice
								debugging.
							</p>
							<button
								onClick={() => setEggOpen(false)}
								style={{
									fontFamily: "'IBM Plex Mono', monospace",
									fontSize: 12,
									color: palette.bg,
									background: palette.amber,
									border: "none",
									padding: "8px 18px",
									cursor: "pointer",
								}}
							>
								close
							</button>
						</div>
					</div>
				)}
				{sixSevenOpen && (
					<div
						onClick={() => setSixSevenOpen(false)}
						style={{
							position: "fixed",
							inset: 0,
							background: "rgba(6, 13, 24, 0.75)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							zIndex: 999,
							cursor: "pointer",
						}}
					>
						<style>{`
              @keyframes wobble {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(-8deg); }
                75% { transform: rotate(8deg); }
              }
              @keyframes popIn2 { 0% { transform: scale(0.7); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
            `}</style>
						<div
							onClick={(e) => e.stopPropagation()}
							style={{
								background: palette.card,
								border: `1px solid ${palette.cyan}`,
								padding: "32px 36px",
								maxWidth: 320,
								textAlign: "center",
								animation: "popIn2 0.35s ease-out",
							}}
						>
							<div
								style={{
									fontFamily: "'Space Grotesk', sans-serif",
									fontWeight: 700,
									fontSize: 44,
									color: palette.cyan,
									marginBottom: 10,
									display: "inline-block",
									animation: "wobble 0.6s ease-in-out 2",
								}}
							>
								67
							</div>
							<p
								style={{
									fontFamily: "'Space Grotesk', sans-serif",
									fontWeight: 600,
									fontSize: 17,
									color: palette.text,
									margin: "0 0 8px",
								}}
							>
								You typed it. Why.
							</p>
							<p
								style={{
									fontFamily: "'IBM Plex Sans', sans-serif",
									fontSize: 13,
									color: palette.textSoft,
									lineHeight: 1.6,
									margin: "0 0 18px",
								}}
							>
								No further comment. This has been logged and will not be
								mentioned in any interview.
							</p>
							<button
								onClick={() => setSixSevenOpen(false)}
								style={{
									fontFamily: "'IBM Plex Mono', monospace",
									fontSize: 12,
									color: palette.bg,
									background: palette.cyan,
									border: "none",
									padding: "8px 18px",
									cursor: "pointer",
								}}
							>
								close
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
