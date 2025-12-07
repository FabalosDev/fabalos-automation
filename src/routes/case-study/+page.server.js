export const load = async () => {
	const modules = import.meta.glob('./data/*.json', { eager: true });

	const studies = Object.values(modules).map((mod) => mod.default);

	return { studies };
};
