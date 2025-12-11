import fs from 'fs';
import path from 'path';

export const load = async () => {
	const dir = path.join(process.cwd(), 'src/content/case-study');

	const files = fs.readdirSync(dir).filter((file) => file.endsWith('.json'));

	const studies = files.map((file) => {
		const fullPath = path.join(dir, file);
		const raw = fs.readFileSync(fullPath, 'utf-8');
		return JSON.parse(raw);
	});

	return { studies };
};
