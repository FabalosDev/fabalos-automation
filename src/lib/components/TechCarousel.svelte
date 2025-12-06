<script>
	export let items = [
		{ src: '/stack/openai.svg', alt: 'GPT' },
		{ src: '/stack/n8n.svg', alt: 'n8n' },
		{ src: '/stack/make.svg', alt: 'Make.com' },
		{ src: '/stack/supabase.svg', alt: 'Supabase' },
		{ src: '/stack/tailwindcss.svg', alt: 'TailwindCSS' },
		{ src: '/stack/svelte.svg', alt: 'SvelteKit' },
		{ src: '/stack/notion.svg', alt: 'Notion' },
		{ src: '/stack/react.svg', alt: 'React' },
		{ src: '/stack/lucide.svg', alt: 'Lucide Icons' },
		{ src: '/stack/vercel.svg', alt: 'Vercel' },
		{ src: '/stack/cloudflare.svg', alt: 'Cloudflare' },
		{ src: '/stack/railway.svg', alt: 'Railway' },
		{ src: '/stack/fly.svg', alt: 'Fly.io' },
		{ src: '/stack/wordpress.svg', alt: 'WordPress' },
		{ src: '/stack/github.svg', alt: 'GitHub' },
		{ src: '/stack/zoho.svg', alt: 'Zoho Mail' },
		{ src: '/stack/webflow.svg', alt: 'Webflow CMS' },
		{ src: '/stack/airtable.svg', alt: 'Airtable' },
		{ src: '/stack/docker.svg', alt: 'Docker' }
	];
</script>

<div class="carousel-wrapper">
	<div class="carousel-track">
		{#each [...items, ...items] as item}
			<img class="icon" src={item.src} alt={item.alt} />
		{/each}
	</div>
</div>

<style>
	.carousel-wrapper {
		overflow: hidden;
		width: 100%;
		padding: 1rem 0;
	}

	.carousel-track {
		display: flex;
		gap: 3rem;
		width: max-content;
		animation: scroll 28s linear infinite;
	}

	/* SEAMLESS INFINITE LOOP — only one keyframes */
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-50% - 1.5rem));
		}
	}

	.icon {
		height: 40px;
		width: auto;
		filter: invert(var(--icon-invert)) brightness(1);
		opacity: 0.9;
		transition:
			filter 0.3s ease,
			opacity 0.3s ease;
	}

	.icon:hover {
		opacity: 1;
	}

	/* Light mode → keep normal logos */
	@media (prefers-color-scheme: light) {
		:root {
			--icon-invert: 0;
		}
	}

	/* Dark mode → invert to white */
	@media (prefers-color-scheme: dark) {
		:root {
			--icon-invert: 1;
		}
	}

	/* Pause on hover */
	.carousel-wrapper:hover .carousel-track {
		animation-play-state: paused;
	}
</style>
