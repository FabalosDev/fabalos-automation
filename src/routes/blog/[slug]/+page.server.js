import fs from 'fs';
import path from 'path';

export const load = async ({ params }) => {
	const dir = path.join(process.cwd(), 'src/content/blog');

	// find matching json file
	const files = fs.readdirSync(dir).filter((file) => file.endsWith('.json'));

	let found = null;

	for (const file of files) {
		const full = path.join(dir, file);
		const data = JSON.parse(fs.readFileSync(full, 'utf-8'));

		if (data.slug === params.slug) {
			found = data;
			break;
		}
	}

	if (!found) {
		return {
			status: 404,
			error: new Error('Blog post not found')
		};
	}

	return {
		post: found
	};
};
