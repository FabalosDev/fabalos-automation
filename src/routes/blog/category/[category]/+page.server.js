export const load = async ({ params }) => {
	const { category } = params;

	const modules = import.meta.glob('/src/content/blog/*.json', { eager: true });

	const posts = Object.values(modules)
		.map((m) => m.default)
		.filter((post) => post.category?.toLowerCase() === category.toLowerCase())
		.sort((a, b) => new Date(b.date) - new Date(a.date));

	return {
		category,
		posts
	};
};
