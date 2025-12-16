import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const modules = import.meta.glob('/src/content/blog/*.json', { eager: true });

	const posts = Object.values(modules).flatMap((m) => m.default); // flatten array exports

	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		throw error(404, 'Blog post not found');
	}

	return { post };
};
