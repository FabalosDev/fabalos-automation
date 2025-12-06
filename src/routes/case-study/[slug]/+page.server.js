import fs from 'fs';
import path from 'path';

export const load = async ({ params }) => {
	const filePath = path.resolve(`src/routes/case-study/data/${params.slug}.json`);

	if (!fs.existsSync(filePath)) {
		return { status: 404 };
	}

	const raw = fs.readFileSync(filePath, 'utf-8');
	const study = JSON.parse(raw);

	return { study };
};
