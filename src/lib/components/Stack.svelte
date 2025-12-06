<script>
	import { BarChart2, FileText, Bell, Database, Bot, Repeat } from 'lucide-svelte';
</script>

<section id="stack" class="section bg-background text-main">
	<div class="container">
		<!-- 🔹 What's Possible -->
		<h2 class="font-heading text-primary mb-2 text-center text-3xl">What's Possible</h2>
		<p class="text-soft mb-12 text-center">Discover workflows that radically save time</p>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
			<!-- ✅ Use Case Card -->
			<div
				class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md"
			>
				<BarChart2 class="text-primary mx-auto mb-4" size="32" stroke-width="1.5" />
				<span
					class="bg-primary/10 text-primary mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium"
				>
					Report
				</span>
				<h3 class="font-heading text-primary mb-2 text-xl">Generate weekly reports</h3>
				<p class="text-soft text-sm">Automate the creation of complex reports.</p>
			</div>

			<!-- Use Case 2 -->
			<div
				class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md"
			>
				<FileText class="text-primary mx-auto mb-4" size="32" stroke-width="1.5" />
				<span
					class="bg-accent/10 text-accent mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium"
				>
					Process
				</span>
				<h3 class="font-heading text-primary mb-2 text-xl">Process form submissions</h3>
				<p class="text-soft text-sm">Handle and organize form data efficiently.</p>
			</div>

			<!-- Use Case 3 -->
			<div
				class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md"
			>
				<Bell class="text-primary mx-auto mb-4" size="32" stroke-width="1.5" />
				<span
					class="bg-warning/10 text-warning mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium"
				>
					Notify
				</span>
				<h3 class="font-heading text-primary mb-2 text-xl">Notify your users</h3>
				<p class="text-soft text-sm">Send automated messages to your audience.</p>
			</div>
		</div>
	</div>

	<!-- 🚀 Tools & Tech -->
	<div class="container">
		<h2 class="font-heading text-primary mb-8 mt-20 text-center text-3xl">Tech & Tools I Use</h2>

		<div class="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-3">
			<!-- Make.com -->
			<div
				class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md"
			>
				<Repeat class="text-primary mx-auto mb-4" size="32" stroke-width="1.5" />
				<h3 class="font-heading text-primary mb-2 text-xl">Make.com</h3>
				<p class="text-soft mt-2 text-sm">Visual builder with powerful integrations.</p>
			</div>

			<!-- GPT -->
			<div
				class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md"
			>
				<Bot class="text-primary mx-auto mb-4" size="32" stroke-width="1.5" />
				<h3 class="font-heading text-primary mb-2 text-xl">GPT</h3>
				<p class="text-soft mt-2 text-sm">Context-aware tagging and data generation.</p>
			</div>

			<!-- n8n -->
			<div
				class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md"
			>
				<Database class="text-primary mx-auto mb-4" size="32" stroke-width="1.5" />
				<h3 class="font-heading text-primary mb-2 text-xl">n8n</h3>
				<p class="text-soft mt-2 text-sm">Self-hosted flows for secure automation pipelines.</p>
			</div>
		</div>
	</div>
</section>
