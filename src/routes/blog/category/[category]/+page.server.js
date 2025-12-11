export const load = async ({ params }) => {
	const { category } = params;

	// Load ALL blog JSON files at build time
	const modules = import.meta.glob('/src/content/blog/*.json', { eager: true });

	const posts = Object.values(modules)
		.map((mod) => mod.default)
		.filter((post) => post.category?.toLowerCase() === category.toLowerCase());

	return {
		category,
		posts
	};
};
