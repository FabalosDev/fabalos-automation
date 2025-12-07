export const load = async ({ params }) => {
	const modules = import.meta.glob('../data/*.json', { eager: true });

	const entries = Object.entries(modules).map(([path, mod]) => {
		const slug = path.split('/').pop().replace('.json', '');
		return { slug, ...mod.default };
	});

	const study = entries.find((entry) => entry.slug === params.slug);

	if (!study) {
		return {
			status: 404,
			error: new Error(`Case study not found: ${params.slug}`)
		};
	}

	return { study };
};
