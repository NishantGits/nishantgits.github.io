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
					id: "projects/flowchat",
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
