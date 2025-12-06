<script>
	export let data;
	const study = data.study;
</script>

<svelte:head>
	<title>{study.title} | Fabalos Automation</title>
	<meta name="description" content={study.summary} />
</svelte:head>

<section class="section bg-background text-main">
	<div class="stack container mx-auto max-w-3xl">
		<h1 class="font-heading text-primary mb-4 text-4xl">{study.title}</h1>
		<p class="text-soft mb-8 text-lg">{study.summary}</p>

		<img
			src={study.thumbnail}
			alt={study.title}
			class="border-border mb-12 h-64 w-full rounded-lg border object-cover"
		/>

		<!-- PROBLEM -->
		<div class="mb-10">
			<h2 class="font-heading text-primary mb-2 text-2xl">Problem</h2>
			<p class="text-soft leading-relaxed">{study.problem}</p>
		</div>

		<!-- SOLUTION -->
		<div class="mb-10">
			<h2 class="font-heading text-primary mb-2 text-2xl">Solution</h2>
			<p class="text-soft leading-relaxed">{study.solution}</p>
		</div>

		<!-- RESULT -->
		<div class="mb-10">
			<h2 class="font-heading text-primary mb-2 text-2xl">Result</h2>
			<p class="text-soft leading-relaxed">{study.result}</p>
		</div>

		<!-- Tools Used -->
		<div class="mb-10">
			<h2 class="font-heading text-primary mb-3 text-2xl">Tools Used</h2>
			<div class="flex flex-wrap gap-2">
				{#each study.tools as tool}
					<span class="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
						{tool}
					</span>
				{/each}
			</div>
		</div>

		<!-- Back Button -->
		<a href="/case-study" class="btn-primary mt-6 w-fit">
			<span>← Back to Case Studies</span>
		</a>
	</div>
</section>
