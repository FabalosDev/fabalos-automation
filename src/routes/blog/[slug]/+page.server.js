export const load = async ({ params }) => {
	const modules = import.meta.glob('/src/content/blog/*.json', { eager: true });

	const posts = Object.values(modules).map((m) => m.default);

	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		return {
			status: 404,
			error: new Error('Blog post not found')
		};
	}

	return { post };
};
