<script>
	import Footer from '$lib/components/Footer.svelte';
	export let data;
	const studies = data.studies;
</script>

<svelte:head>
	<title>Case Studies | Fabalos Automation</title>
	<meta
		name="description"
		content="Explore automation, AI workflows, and RAG systems built by Fabalos."
	/>
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
