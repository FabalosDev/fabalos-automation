import fs from 'fs';
import path from 'path';

export const load = async ({ params }) => {
	const { category } = params;

	const blogDir = path.join(process.cwd(), 'src/content/blog');
	const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.json'));

	const posts = files
		.map((file) => JSON.parse(fs.readFileSync(path.join(blogDir, file), 'utf8')))
		.filter((post) => post.category?.toLowerCase() === category.toLowerCase());

	return {
		category,
		posts
	};
};
