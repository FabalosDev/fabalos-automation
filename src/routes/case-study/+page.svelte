<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
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

		<h1 class="font-heading text-primary mb-12 text-center text-4xl">
			Case Studies
		</h1>

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

<Footer />

<style>
.case-card {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.case-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 18px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255,140,40,0.25),
    rgba(0,220,255,0.2)
  );
  -webkit-mask:
     linear-gradient(#fff 0 0) content-box,
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: 0.35s ease;
}

.case-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary);
}

.case-card:hover::after {
  opacity: 1;
}

.case-thumb {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
}

.case-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);
}

.case-summary {
  opacity: 0.85;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0.25rem;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.case-tag {
  padding: 4px 10px;
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  font-size: 0.75rem;
  color: var(--primary);
}

.case-more {
  margin-top: auto;
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  transition: 0.2s ease;
}

.case-more:hover {
  text-decoration: underline;
}
</style>
