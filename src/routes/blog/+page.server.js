export const load = async () => {
	const modules = import.meta.glob('/src/content/blog/*.json', { eager: true });

	const posts = Object.values(modules)
		.map((m) => m.default)
		.map((post) => {
			const isoDate = post.date ?? null;

			return {
				...post,

				// ✅ NORMALIZE IMAGES
				thumbnail: post.thumbnail || post.heroImage || null,

				// canonical date (for sorting)
				_date: isoDate ? new Date(isoDate) : null,

				// display date (for UI)
				date: isoDate
					? new Date(isoDate).toLocaleDateString(undefined, {
							year: 'numeric',
							month: 'short',
							day: 'numeric'
						})
					: '',

				tags: post.tags ?? []
			};
		});

	// sort safely
	posts.sort((a, b) => {
		if (!a._date) return 1;
		if (!b._date) return -1;
		return b._date - a._date;
	});

	// group by category
	const categories = {};

	for (const post of posts) {
		const cat = post.category || 'Uncategorized';
		if (!categories[cat]) categories[cat] = [];
		categories[cat].push(post);
	}

	return { posts, categories };
};
