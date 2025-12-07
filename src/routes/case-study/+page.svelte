<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	export let data;
	const studies = data.studies;

	const caseStudies = [
		{
			title: 'Case Study 1: Make.com Tagging Automation',
			summary:
				'Built for a media company to automate their product and article tagging workflow using Make.com, GPT, and Google Sheets.',
			features: [
				'✔️ Auto-collects data via Google Sheets',
				'✔️ GPT-based sorting and fallback for edge cases',
				'✔️ Conditional routing for parallel logic',
				'✔️ Reduced tagging time from hours to seconds'
			],
			feedback:
				'“What used to take 2 people half a day now runs in the background — clean and reliable.”',
			ctaText: 'View Screenshot',
			ctaHref: '/images/case-tagging.png'
		},
		{
			title: 'Case Study 2: n8n Prompt Response Flow',
			summary:
				'Simulated a real-time AI response using a Tally form connected to an n8n webhook. The form input is parsed, a GPT-style reply is generated via expression logic, and the result is returned instantly.',
			features: [
				'✔️ Tally form as input frontend',
				'✔️ Webhook triggers n8n automation',
				'✔️ No GPT API needed — fake response is clean and instant',
				'✔️ Runs locally via tunnel or can be deployed to Railway'
			],
			feedback: "“Feels like a real AI — but it's all smart automation logic.”",
			ctaText: 'Try the Demo Form',
			ctaHref: 'https://tally.so/r/your-form-id'
		}
	];
</script>

<svelte:head>
	<title>Case Studies | Fabalos Automation</title>
	<meta
		name="description"
		content="Automation architectures built by Fabalos — real workflows, real impact. Explore systems engineered using Make.com, GPT, and n8n."
	/>
	<meta property="og:title" content="Case Studies | Fabalos" />
	<meta
		property="og:description"
		content="Behind-the-scenes breakdowns of high-impact automation systems and the engineering logic behind them."
	/>
	<meta property="og:image" content="/og-case-study.png" />
</svelte:head>

<section class="section bg-background text-main">
	<div class="stack container">
		<h1 class="font-heading text-primary mb-12 text-center text-4xl">Case Studies</h1>

		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
			{#each studies as study}
				<a
					class="bg-surface border-border block rounded-xl border p-6 transition hover:shadow-lg"
					href={`/case-study/${study.slug}`}
				>
					<img
						src={study.thumbnail}
						alt={study.title}
						class="mb-4 h-40 w-full rounded-lg object-cover"
					/>

					<h2 class="font-heading text-primary mb-2 text-xl">{study.title}</h2>
					<p class="text-soft mb-4 text-sm">{study.summary}</p>

					<div class="mb-4 flex flex-wrap gap-2">
						{#each study.tags as tag}
							<span class="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
								{tag}
							</span>
						{/each}
					</div>

					<span class="text-primary font-semibold hover:underline"> View Case Study → </span>
				</a>
			{/each}
		</div>

		<!-- Back Button -->
		<a href="/" class="btn-primary mt-6 w-fit">
			<span>← Back to Homepage</span>
		</a>
	</div>
	<Footer />
</section>
