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
			type: "doc",
			id: "features/multi-llm",
			label: "🤖 Multi-LLM Support",
		},
		{
			type: "doc",
			id: "features/authentication",
			label: "🔐 Authentication",
		},
		{
			type: "doc",
			id: "features/channels",
			label: "💬 Channels",
		},
		{
			type: "doc",
			id: "features/notes",
			label: "📝 Notes",
		},
		{
			type: "doc",
			id: "features/conversation-tools",
			label: "🛠️ Conversation Tools",
		},
		{
			type: "doc",
			id: "features/ui-ux",
			label: "⚡ UI/UX & Performance",
		},
		{
			type: "doc",
			id: "features/paid-plan",
			label: "💎 Paid Plan",
		},
	],
};

export default sidebars;
