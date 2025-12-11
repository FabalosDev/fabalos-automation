import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const load = async () => {
	// Resolve this file location (works after build)
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	// Navigate to your content folder relative to server file
	const blogDir = path.join(__dirname, '../../../content/blog');

	if (!fs.existsSync(blogDir)) {
		console.error('Blog directory missing:', blogDir);
		return {
			status: 500,
			error: new Error('Blog directory not found')
		};
	}

	// Load JSON files
	const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.json'));

	const posts = files.map((file) => {
		const fullPath = path.join(blogDir, file);
		return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
	});

	// Newest first
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Group by category
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
