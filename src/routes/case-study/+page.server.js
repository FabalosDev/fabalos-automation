import fs from 'fs';
import path from 'path';

export const load = async () => {
	const dataPath = path.resolve('src/routes/case-study/data');
	const files = fs.readdirSync(dataPath);

	const studies = files
		.filter((file) => file.endsWith('.json'))
		.map((file) => {
			const raw = fs.readFileSync(path.join(dataPath, file), 'utf-8');
			return JSON.parse(raw);
		});

	return { studies };
};
