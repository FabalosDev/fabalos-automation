<script lang="ts">
	export let title: string;
	export let summary: string;
	export let linkLabel: string;
	export let linkHref: string;
</script>

<!-- 🧱 Reusable Info Card -->
<div
	class="bg-surface border-border rounded-xl border p-6 shadow-sm
         transition duration-300 hover:shadow-md"
>
	<h3 class="font-heading text-primary mb-2 text-xl">
		{title}
	</h3>

	<p class="text-soft mb-4 leading-relaxed">
		{summary}
	</p>

	<a href={linkHref} rel="noopener" class="text-primary font-medium hover:underline">
		{linkLabel}
	</a>
</div>
