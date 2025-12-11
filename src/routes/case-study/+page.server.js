export const load = async () => {
	const modules = import.meta.glob('/src/content/case-study/*.json', { eager: true });

	const studies = Object.values(modules).map((m) => m.default);

	return { studies };
};
