
<svelte:head>
  <title>Fabalos Automation – Clean Logic. Smart Systems. Real Results.</title>
  <meta name="description" content="Automation Systems Architect specializing in n8n, Make.com, Supabase, GPT workflows, and system automation for businesses. Clean logic, stable workflows, real results." />
</svelte:head>

<script>
	import TechCarousel from '$lib/components/TechCarousel.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import GetInTouchForm from '$lib/components/forms/GetInTouchForm.svelte';

	let showContact = false;
	let successMessage = "";
	let steps = []; // <-- live automation feed

async function submitForm(data, done) {

	steps = []; // reset before start

	function addStep(text, delay) {
		setTimeout(() => {
			steps = [...steps, text];
		}, delay);
	}

	addStep("🔄 Sending your message to automation…", 0);

	try {
		const res = await fetch("https://floflux.fabalos.com/webhook/form-intake", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});

		addStep("⚙️ Workflow triggered.", 400);
		addStep("📤 Delivering data to n8n…", 700);
		addStep("🤖 n8n processing the workflow…", 1100);

		const output = await res.json();

		successMessage = output.message || "Message sent successfully! 🚀";

		addStep("✔ Automation complete — " + successMessage, 1500);

		done(successMessage);

		// Close modal after 3 seconds
		setTimeout(() => {
			showContact = false;
			steps = [];
		}, 6000);

		// Toast stays 8 sec
		setTimeout(() => (successMessage = ""), 10000);

	} catch (err) {
		addStep("❌ Automation failed.", 400);
		done("⚠️ Something went wrong. Please try again.");
	}
}

</script>

<Modal open={showContact} onClose={() => (showContact = false)}>

	{#if steps.length > 0}
		<div class="automation-feed">
			{#each steps as step}
				<div class="feed-line">{step}</div>
			{/each}
		</div>
	{/if}

	<GetInTouchForm
		onSubmit={submitForm}
		onClose={() => (showContact = false)}
	/>

</Modal>


<section id="hero" class="bg-background text-main overflow-hidden py-16">
	<div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 md:grid-cols-2">

			<!-- LEFT -->
			<div class="space-y-6">
				<h1 class="font-heading text-4xl font-bold leading-tight md:text-6xl">
					Fabalos Automation
				</h1>

				<h2 class="text-soft text-xl md:text-2xl">Smart Systems. Clean Logic. Real Results.</h2>

				<p class="text-soft break-words text-lg leading-relaxed">
					I design and build automated workflows using <strong>Make.com</strong>,
					<strong>n8n</strong>, and <strong>GPT</strong> — eliminating repetitive tasks,
					standardizing processes, and building scalable systems that grow with your operations.
				</p>

				<ul class="text-soft space-y-2 text-sm md:text-base">
					<li>• Reduce manual work and errors</li>
					<li>• Standardize processes with clean automation logic</li>
					<li>• Integrate tools across your entire workflow</li>
					<li>• Build scalable automation architectures</li>
				</ul>

				<div class="flex flex-wrap gap-4 pt-4">
					<a href="/case-study" class="btn-primary">
						<span>Explore Case Studies</span>
					</a>

					<button class="btn-primary" on:click={() => (showContact = true)}>
						<span>Get in Touch</span>
					</button>
				</div>
			</div>

			<!-- RIGHT -->
			<div class="flex max-w-full flex-col items-center justify-center space-y-4 overflow-x-hidden">
				<img src="/logos/fabalos-logo-2k.png" alt="Fabalos Automation logo — workflow automation systems" />

				<div class="w-full overflow-hidden">
					<TechCarousel />
				</div>
			</div>

		</div>
	</div>
</section>

{#if successMessage}
	<div
		class="fixed bottom-6 right-6 z-50 rounded-lg bg-primary text-white px-4 py-3 shadow-lg animate-fade-in-up"
	>
		{successMessage}
	</div>
{/if}

<style>
	.automation-feed {
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding: 12px 16px;
		margin-bottom: 1rem;
		font-family: 'JetBrains Mono', monospace;
	}

	.feed-line {
		color: #cfcfcf;
		font-size: 0.85rem;
		padding: 2px 0;
		animation: fade-in 0.25s ease;
	}

	@keyframes fade-in {
		from { opacity: 0; transform: translateY(3px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
