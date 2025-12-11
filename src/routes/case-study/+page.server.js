import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const load = async () => {
	// Resolve correct path inside Vercel
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	// Navigate from server chunk → back to src/content/case-study
	const caseDir = path.join(__dirname, '../../../content/case-study');

	if (!fs.existsSync(caseDir)) {
		return {
			studies: [],
			error: 'Case study directory not found'
		};
	}

	const files = fs.readdirSync(caseDir).filter((f) => f.endsWith('.json'));

	const studies = files.map((file) => {
		const fullPath = path.join(caseDir, file);
		const raw = fs.readFileSync(fullPath, 'utf-8');
		return JSON.parse(raw);
	});

	// Sort newest first if needed
	studies.sort((a, b) => new Date(b.date) - new Date(a.date));

	return { studies };
};
