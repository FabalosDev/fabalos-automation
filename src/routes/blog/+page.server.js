import fs from 'fs';
import path from 'path';

export const load = async () => {
	const blogDir = path.join(process.cwd(), 'src/content/blog');
	const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.json'));

	const posts = files.map((file) => {
		const fullPath = path.join(blogDir, file);
		const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
		return data;
	});

	// Sort newest first
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Group posts by category
	const categories = {};

	for (const post of posts) {
		if (!categories[post.category]) {
			categories[post.category] = [];
		}
		categories[post.category].push(post);
	}

	return {
		posts,
		categories
	};
};
