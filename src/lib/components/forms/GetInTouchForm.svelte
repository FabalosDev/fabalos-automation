<script>
	export let onSubmit = () => {};
	export let onClose = () => {};

	let name = "";
	let email = "";
	let message = "";

	let responseMessage = "";
	let loading = false;

	async function handleSubmit() {
		loading = true;

		await onSubmit({ name, email, message }, (msg) => {
			responseMessage = msg;
			loading = false;
		});
	}
</script>

<!-- FORM CONTAINER -->
<div class="relative">

	<!-- Close Button -->
	<button
		class="absolute right-2 top-2 text-gray-400 hover:text-gray-200"
		on:click={onClose}
	>
		✕
	</button>

	<h2 class="font-heading text-primary text-xl mb-1 mt-8">Get in Touch</h2>

	<p class="text-soft text-sm leading-relaxed mb-2">
		This form is connected to my <strong class="text-primary">n8n automation workflow</strong>.
		It processes your message instantly and sends a response back.
	</p>

	<div class="mt-1 inline-flex items-center gap-2 px-2 py-1 text-xs rounded-lg bg-neutral-800 border border-neutral-700 text-gray-300">
		⚡ Powered by Automation (n8n)
	</div>

	<form class="stack gap-4 mt-4" on:submit|preventDefault={handleSubmit}>
		<input
			bind:value={name}
			required
			placeholder="Your Name"
			class="form-input"
		/>

		<input
			bind:value={email}
			required
			type="email"
			placeholder="Your Email"
			class="form-input"
		/>

		<textarea
			bind:value={message}
			rows="4"
			required
			placeholder="Tell me about your project..."
			class="form-input"
		></textarea>

		<button class="btn-solid" disabled={loading}>
			{#if loading}
				<span class="flex items-center gap-2">
					<div class="loader"></div> Sending...
				</span>
			{:else}
				Send Message
			{/if}
		</button>

		<!-- Webhook Response -->
		{#if responseMessage}
			<div class="automation-response">
				{responseMessage}
			</div>
		{/if}

		<p class="text-soft text-xs text-center mt-2">
			No spam. No sales pressure. Just clean conversations and smart systems.
		</p>
	</form>
</div>

<style>
	.form-input {
		width: 100%;
		border-radius: 12px;
		border: 1px solid #333;
		background: #0f0f0f;
		padding: 12px 16px;
		color: #eee;
	}

	.automation-response {
		margin-top: 8px;
		padding: 12px 14px;
		border-radius: 8px;
		background: #141414;
		border: 1px solid #333;
		color: #ddd;
		font-size: 0.9rem;
	}
</style>
