import { redirect, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const legacy = params.legacy;
	const path = Array.isArray(legacy)
		? '/' + legacy.join('/').toLowerCase()
		: '/' + legacy.toLowerCase();

	if (path === '/contact') {
		throw redirect(301, '/#contact');
	}

	if (path === '/education') {
		throw redirect(301, '/#about');
	}

	// THIS will now render +error.svelte
	throw error(404, 'Not Found');
};
