/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
	tutorialSidebar: [
		{
			type: "doc",
			id: "intro",
			label: "🏡 Home",
		},
		{
			type: "category",
			label: "🚀 Projects",
			items: [
				{
					type: "doc",
					id: "projects/flow-ecosystem/flowchat",
					label: "💬 FlowChat",
				},
				{
					type: "doc",
					id: "projects/html-play",
					label: "🎨 HTMLPLAY",
				},
				{
					type: "doc",
					id: "projects/fluid-ai",
					label: "🤖 Fluid AI",
				},
				{
					type: "doc",
					id: "projects/tech-forecast",
					label: "🔮 Tech Forecast",
				},
				{
					type: "doc",
					id: "projects/ai-music",
					label: "🎵 AI Music",
				},
				{
					type: "doc",
					id: "projects/liquid",
					label: "💎 LiqUId",
				},
				{
					type: "doc",
					id: "projects/terrai",
					label: "🌱 Terrai",
				},
			],
		},
		{
			type: "category",
			label: "Flow Ecosystem",
			customProps: { logo: "/img/logos/flow/flow.svg" },
			items: [
				{
					type: "doc",
					id: "projects/flow-ecosystem/flowchat",
					label: "FlowChat",
					customProps: { logo: "/img/logos/flow/flowchat.svg" },
				},
				{
					type: "doc",
					id: "projects/flow-ecosystem/notes",
					label: "Notes",
					customProps: { logo: "/img/logos/flow/notes.svg" },
				},
				{
					type: "doc",
					id: "projects/flow-ecosystem/channels",
					label: "Channels",
					customProps: { logo: "/img/logos/flow/channels.svg" },
				},
				{
					type: "doc",
					id: "projects/flow-ecosystem/calendar",
					label: "Calendar",
					customProps: { logo: "/img/logos/flow/calendar.svg" },
				},
				{
					type: "doc",
					id: "projects/flow-ecosystem/games",
					label: "Games",
					customProps: { logo: "/img/logos/flow/games.svg" },
				},
				{
					type: "doc",
					id: "projects/flow-ecosystem/flowcall",
					label: "FlowCall",
					customProps: { logo: "/img/logos/flow/flowcall.svg" },
				},
				{
					type: "doc",
					id: "projects/flow-ecosystem/flowsearch",
					label: "FlowSearch",
					customProps: { logo: "/img/logos/flow/flowsearch.svg" },
				},
				{
					type: "doc",
					id: "projects/flow-ecosystem/flowmovies",
					label: "FlowMovies",
					customProps: { logo: "/img/logos/flow/flowmovies.svg" },
				},
				{
					type: "doc",
					id: "projects/flow-ecosystem/weather",
					label: "Flow Weather",
					customProps: { logo: "/img/logos/flow/weather.svg" },
				},
			],
		},
		{
			type: "category",
			label: "👤 About",
			items: [
				{
					type: "doc",
					id: "about/skills",
					label: "🛠️ Skills & Technologies",
				},
				{
					type: "doc",
					id: "about/contact",
					label: "📧 Contact & Social",
				},
			],
		},
	],
};

export default sidebars;
