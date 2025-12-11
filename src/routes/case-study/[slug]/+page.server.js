import fs from 'fs';
import path from 'path';

export const load = async ({ params }) => {
	const { slug } = params;

	const filePath = path.join(process.cwd(), 'src/content/case-study', `${slug}.json`);

	if (!fs.existsSync(filePath)) {
		return { status: 404 };
	}

	const raw = fs.readFileSync(filePath, 'utf-8');
	const study = JSON.parse(raw);

	return { study };
};
