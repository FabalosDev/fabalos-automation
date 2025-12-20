<script lang="ts">
	export let data;

	const studies = data.studies;
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
	<div class="stack container max-w-7xl space-y-6">

		<h1 class="font-heading text-primary text-center text-4xl">
			Case Studies
		</h1>

<div class="mx-auto max-w-2xl text-center space-y-4">
  <p class="text-soft text-lg leading-relaxed">
    These case studies document real automation problems I’ve worked through —
    from repetitive operational bottlenecks to scalable system design.
  </p>

  <p class="text-soft text-sm opacity-80">
    Each case focuses on the <strong class="text-main">problem</strong>,
    the <strong class="text-main">approach</strong>,
    and the <strong class="text-main">result</strong> — not just the tools used.
  </p>
</div>


		<!-- CARD GRID -->
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
			{#each studies as study}
				<a class="case-card" href={`/case-study/${study.slug}`}>

      <img
        src={study.thumbnail}
        alt={study.title}
        class="case-thumb"
        loading="lazy"
        decoding="async"
        width="800"
        height="450"
      />


					<h2 class="case-title">{study.title}</h2>
					<p class="case-summary">{study.summary}</p>

					<div class="case-tags">
						{#each study.tags as tag}
							<span class="case-tag">{tag}</span>
						{/each}
					</div>

					<span class="case-more">View Case Study →</span>
				</a>
			{/each}
		</div>

		<!-- Back Button -->
		<a href="/" class="btn-primary mt-6 w-fit">
			<span>← Back to Homepage</span>
		</a>
	</div>

</section>

<style>

</style>
