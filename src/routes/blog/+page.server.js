export const load = async () => {
	const modules = import.meta.glob('/src/content/blog/*.json', { eager: true });

	const posts = Object.values(modules).map((m) => m.default);

	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	const categories = {};

	for (const post of posts) {
		if (!categories[post.category]) categories[post.category] = [];
		categories[post.category].push(post);
	}

	return { posts, categories };
};
