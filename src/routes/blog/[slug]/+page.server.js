import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const load = async ({ params }) => {
	// resolve physical directory of this file
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	// ABSOLUTE PATH to blog content
	const dir = path.join(__dirname, '../../../content/blog');

	if (!fs.existsSync(dir)) {
		console.error('Blog directory does not exist:', dir);
		return {
			status: 500,
			error: new Error('Blog directory missing on server')
		};
	}

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

	return { post: found };
};
