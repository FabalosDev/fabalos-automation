<script lang="ts">
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
	<div class="stack center-text container">
		<!-- 🔹 Section Header -->
		<h2 class="font-heading text-primary text-3xl">Automation Case Studies</h2>
		<p class="text-soft mx-auto max-w-2xl text-lg">
			A behind-the-scenes look at how I build intelligent automation systems that save time, reduce
			errors, and scale with grace.
		</p>

		<!-- 🧠 Render Case Studies -->
		<div class="mt-12 space-y-12">
			{#each caseStudies as study}
				<div class="bg-surface border-border space-y-4 rounded-xl border p-8 text-left shadow-sm">
					<h3 class="font-heading text-primary text-2xl">🧠 {study.title}</h3>

					<p class="text-soft leading-relaxed">{study.summary}</p>

					<ul class="text-soft list-inside list-disc space-y-1">
						{#each study.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>

					<p class="text-soft text-sm italic">{study.feedback}</p>

					<a
						href={study.ctaHref}
						target="_blank"
						rel="noopener"
						class="btn-primary mt-4 inline-block"
					>
						<span>{study.ctaText}</span>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
