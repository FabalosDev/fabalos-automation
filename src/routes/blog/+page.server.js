export const load = async () => {
	const modules = import.meta.glob('/src/content/blog/*.json', { eager: true });

	// 🔥 FLATTEN + NORMALIZE
	const posts = Object.values(modules)
		.map((m) => m.default)
		.map((post) => ({
			...post,
			date: post.date ? new Date(post.date).toLocaleDateString() : '',
			tags: post.tags ?? []
		}));

	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	// group by category
	const categories = {};

	for (const post of posts) {
		const cat = post.category || 'Uncategorized';
		if (!categories[cat]) categories[cat] = [];
		categories[cat].push(post);
	}

	return { posts, categories };
};
