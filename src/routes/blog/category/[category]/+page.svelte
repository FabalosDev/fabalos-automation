<script>
  export let data;
  const { category, posts } = data;
</script>

<svelte:head>
  <title>{category} · Blog · Fabalos Automation</title>

  <meta
    name="description"
    content={`Articles filed under "${category}" — automation insights, systems thinking, and engineering notes from Fabalos Automation.`}
  />

  <meta property="og:title" content={`${category} · Fabalos Blog`} />
  <meta
    property="og:description"
    content={`Explore ${posts.length} article(s) under the "${category}" category.`}
  />
  <meta property="og:image" content="/og-blog-category.png" />
</svelte:head>

<section class="container section">
  	<div class="stack container max-w-7xl space-y-6">

  <!-- 🔹 Header -->
  <header class="mb-10 max-w-3xl">
    <p class="text-soft text-sm mb-1">Blog Category</p>

    <h1 class="font-heading text-primary text-4xl mb-2">
      {category}
    </h1>

    <p class="text-soft text-base">
      {posts.length} article{posts.length === 1 ? '' : 's'} exploring
      <strong class="text-main"> {category.toLowerCase()}</strong>,
      system design, and automation insights.
    </p>
  </header>

  <!-- 🔸 Empty State -->
  {#if posts.length === 0}
    <div class="bg-surface border-border rounded-xl border p-8 text-center text-soft">
      <p class="mb-2">No posts found in this category.</p>
      <p class="text-sm opacity-70">More articles will be added over time.</p>
    </div>
  {:else}

<!-- 🔹 Grid -->
<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

  {#each posts as post}
    <a
      class="case-card blog hover-lift"
      href={`/blog/${post.slug}`}
      aria-label={`Read ${post.title}`}
    >

      {#if post.heroImage}
        <img
          src={post.heroImage}
          alt={post.title}
          class="case-thumb"
          loading="lazy"
          decoding="async"
        />
      {/if}

      <h2 class="case-title">{post.title}</h2>

      {#if post.date}
        <p class="text-sm opacity-70">{post.date}</p>
      {/if}

      {#if post.tags?.length}
        <div class="case-tags">
          {#each post.tags as tag}
            <span class="case-tag">{tag}</span>
          {/each}
        </div>
      {/if}

      <span class="case-more">Read Article →</span>

    </a>
  {/each}

</div>


  {/if}

  <!-- 🔙 Back -->
  <div class="mt-10">
    <a href="/blog" class="btn-primary w-fit">
      <span>← Back to Blog</span>
    </a>
  </div>
</div>
</section>

<style>
.container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 3rem 1.2rem;
}

/* =========================
   CATEGORY BLOCK
========================= */
.category-block {
  margin-bottom: 2.5rem;
}

.section-label {
  font-size: 0.85rem;
  opacity: 0.6;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.category-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

</style>
