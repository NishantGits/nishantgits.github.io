import { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import { themes as prismThemes } from "prism-react-renderer";

// FlowChat brand colors - bright cyan/turquoise from website
const brandColor = "#00E5FF";
const brandColorDark = "#00B8D4";

const config: Config = {
	title: "FlowChat",
	tagline: "Professional Multi-LLM Chat Platform",
	favicon: "https://flowchats.org/static/splash.png",

	// Set the production url of your site here
	url: "https://flowchats.org",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "NishantGits", // Usually your GitHub org/user name.
	projectName: "docs", // Usually your repo name.

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
		// FlowChat color scheme - bright cyan/turquoise
		colorMode: {
			defaultMode: "light",
			disableSwitch: false,
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "FlowChat",
			logo: {
				src: "https://flowchats.org/static/splash.png",
				srcDark: "https://flowchats.org/static/splash.png",
				height: 32,
			},
			items: [
				{
					href: "https://flowchats.org",
					label: "Platform",
					position: "left",
				},
			],
		},
		footer: {
			logo: {
				src: "https://flowchats.org/static/splash.png",
				height: 32,
			},
			style: "dark",
			links: [
				{
					title: "Product",
					items: [
						{
							label: "Platform",
							href: "https://flowchats.org",
						},
						{
							label: "Models",
							to: "/features/multi-llm",
						},
						{
							label: "Features",
							to: "/",
						},
					],
				},
				{
					title: "Support",
					items: [
						{
							label: "Contact Support",
							href: "mailto:support@flowchats.org",
						},
						{
							label: "Documentation",
							to: "/",
						},
					],
				},
				{
					title: "Legal",
					items: [
						{
							label: "Privacy Policy",
							href: "https://flowchats.org/privacy",
						},
						{
							label: "Terms of Service",
							href: "https://flowchats.org/terms",
						},
					],
				},
			],
			copyright: `© ${new Date().getFullYear()} FlowChat. All rights reserved.`,
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
