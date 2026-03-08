import { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import { themes as prismThemes } from "prism-react-renderer";

// NishantGits personal brand colors - modern purple/blue gradient
const brandColor = "#6366F1";
const brandColorDark = "#4F46E5";

const config: Config = {
	title: "NishantGits",
	tagline: "Young Developer & AI Enthusiast",
	favicon: "https://github.com/NishantGits.png",

	// Set the production url of your site here
	url: "https://nishantgits.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "NishantGits", // Usually your GitHub org/user name.
	projectName: "nishantgits", // Usually your repo name.

	onBrokenLinks: "throw",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	// Enable Mermaid for diagrams
	markdown: {
		mermaid: true,
	},
	themes: ["@docusaurus/theme-mermaid"],

	presets: [
		[
			"classic",
			{
				gtag: {
					trackingID: "G-522JSJVWTB",
					anonymizeIP: false,
				},
				docs: {
					sidebarPath: "./sidebars.ts",
					routeBasePath: "/",
					// Remove edit links for private documentation
					editUrl: undefined,
					exclude: ["**/tab-**/**"],
				},
				// blog: false,
				blog: {
					showReadingTime: true,
					onUntruncatedBlogPosts: "ignore",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: "light",
			disableSwitch: false,
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "NishantGits",
			logo: {
				src: "https://github.com/NishantGits.png",
				height: 128,
				style: {
					borderRadius: "12px",
					boxShadow: "0 4px 20px rgba(99, 102, 241, 0.15)",
					border: "2px solid rgba(99, 102, 241, 0.2)",
					transition: "all 0.3s ease"
				}
			},
			items: [
				{
					to: "/",
					label: "Home",
					position: "left",
				},
				{
					href: "https://github.com/NishantGits",
					label: "GitHub",
					position: "right",
					className: "header-github-link",
				},
			],
		},
		footer: {
			logo: {
				src: "https://github.com/NishantGits.png",
				height: 128,
				style: {
					borderRadius: "12px",
					boxShadow: "0 4px 20px rgba(99, 102, 241, 0.15)",
					border: "2px solid rgba(99, 102, 241, 0.2)",
					transition: "all 0.3s ease"
				}
			},
			style: "dark",
			links: [
				{
					title: "Projects",
					items: [
						{
							label: "FlowChat",
							href: "https://flowchats.org",
						},
						{
							label: "HTMLPLAY",
							href: "https://html-play.base44.app",
						},
						{
							label: "Fluid AI",
							href: "https://github.com/NishantGits/fluid-ai",
						},
					],
				},
				{
					title: "Resources",
					items: [
						{
							label: "GitHub Profile",
							href: "https://github.com/NishantGits",
						},
						{
							label: "About Repository",
							href: "https://github.com/NishantGits/nishantgits",
						},
					],
				},
				{
					title: "Connect",
					items: [
						{
							label: "Email",
							href: "mailto:nlrayyanyo@gmail.com",
						},
						{
							label: "GitHub",
							href: "https://github.com/NishantGits",
						},
					],
				},
			],
			copyright: `<span style="display: flex; align-items: center; justify-content: center; gap: 8px;">© ${new Date().getFullYear()} NishantGits. Built with <span style="color: #ff6b6b;">❤️</span> and powered by <a href="https://sider.ai" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; font-weight: 700; border-bottom: 1px solid rgba(99, 102, 241, 0.4);">Sider.ai</a></span>`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["hcl", "docker"],
		},
	} satisfies Preset.ThemeConfig,
	plugins: [],
};

export default config;
