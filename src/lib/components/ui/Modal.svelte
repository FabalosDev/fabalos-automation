<script>
	export let open = false;
	export let onClose = () => {};
</script>

{#if open}
	<!-- Backdrop -->
	<div class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" on:click={onClose}></div>

	<!-- Modal -->
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<div
			class="w-[90%] max-w-md rounded-xl border border-neutral-700 bg-neutral-900 p-6 shadow-xl"
			on:click|stopPropagation
		>
			<slot />
		</div>
	</div>
{/if}
