export const load = async ({ params }) => {
	const modules = import.meta.glob('/src/content/case-study/*.json', { eager: true });

	const studies = Object.values(modules).map((m) => m.default);

	const study = studies.find((s) => s.slug === params.slug);

	if (!study) {
		return {
			status: 404,
			error: new Error('Case study not found')
		};
	}

	return { study };
};
