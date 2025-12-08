<svelte:head>
  <meta name="description" content="A deeper look into the automation projects inside the FoxOps ecosystem." />
</svelte:head>

<section id="case-study" class="section bg-background text-main">
	<div class="stack container">
		<!-- 🔹 Section Header -->
		<h2 class="font-heading text-primary text-center text-3xl md:text-4xl">
			Automation Case Studies
		</h2>
		<p class="text-soft mx-auto max-w-2xl text-center text-lg">
			A look inside the automation architectures I've engineered — designed to remove bottlenecks,
			reduce manual load, and scale operations with precision.
		</p>

		<!-- 🔸 Grid of Case Studies -->
		<div class="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
			<!-- 🧠 Case Study 1 -->
			<div class="bg-surface border-border rounded-xl border p-6 shadow transition hover:shadow-lg">
				<h3 class="font-heading text-primary mb-3 text-2xl">
					Product Tagging Automation (Make.com + GPT)
				</h3>

				<p class="text-soft mb-4 leading-relaxed">
					A fully automated tagging pipeline that replaces manual classification with a hybrid GPT +
					rules-based model. Built for a fast-scaling media team handling thousands of SKUs.
				</p>

				<ul class="text-soft mb-4 space-y-1 text-sm">
					<li>✔️ GPT-assisted tagging with fallback logic</li>
					<li>✔️ Parallel routing for multi-category processing</li>
					<li>✔️ Google Sheets integration as dynamic control panel</li>
					<li>✔️ Reduced tagging workload by 90%</li>
				</ul>

				<a
					href="/images/case-tagging.png"
					target="_blank"
					rel="noopener"
					class="btn-primary inline-flex"
				>
					<span>View Workflow</span>
				</a>
			</div>

			<!-- 🧠 Case Study 2 -->
			<div class="bg-surface border-border rounded-xl border p-6 shadow transition hover:shadow-lg">
				<h3 class="font-heading text-primary mb-3 text-2xl">
					Instant AI Response System (Tally → n8n)
				</h3>

				<p class="text-soft mb-4 leading-relaxed">
					A real-time response generator triggered through a Tally form. Parsed, processed, and
					returned in seconds — no GPT API required.
				</p>

				<ul class="text-soft mb-4 space-y-1 text-sm">
					<li>✔️ Tally form as the input frontend</li>
					<li>✔️ Webhook → logic engine → response formatter</li>
					<li>✔️ Dynamic routing for personalized outputs</li>
					<li>✔️ Deployable on Railway or local tunnel</li>
				</ul>

				<a
					href="https://tally.so/r/your-form-id"
					target="_blank"
					rel="noopener"
					class="btn-primary inline-flex"
				>
					<span>Try Demo</span>
				</a>
			</div>
		</div>
	</div>
</section>
