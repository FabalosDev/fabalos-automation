<script>
  import Footer from '$lib/components/Footer.svelte';
  export let data;
  const { category, posts } = data;
</script>

<svelte:head>
  <title>{category} · Blog Category · Fabalos Automation</title>

  <meta
    name="description"
    content={`Articles under the "${category}" category — insights, systems, and automation stories from Fabalos Automation.`}
  />

  <meta property="og:title" content={`${category} · Blog Category`} />

  <meta
    property="og:description"
    content={`Explore posts grouped under "${category}". Automation insights, engineering updates, and workflow breakdowns.`}
  />

  <meta
    property="og:image"
    content="/og-blog-category.png"
  />
</svelte:head>

<section class="container py-16">

  <h1 class="category-title">
    Blog Category
  </h1>

  <h2 class="category-title">{category}</h2>

  {#if posts.length === 0}
    <p class="no-posts">No posts found in this category.</p>
  {:else}

    <div class="grid-list">
      {#each posts as post}
        <a class="blog-card" href={`/blog/${post.slug}`}>

  {#if post.heroImage}
    <img
      src={post.heroImage}
      alt={post.title}
      class="card-img"
      loading="lazy"
      decoding="async"
      width="600"
      height="350"
    />
  {/if}


          <h2 class="card-title">{post.title}</h2>
          <p class="card-meta">{post.date}</p>

          <p class="card-tags">{post.tags.join(" • ")}</p>
        </a>
      {/each}
    </div>

  {/if}

  <a href="/blog" class="btn-primary mt-8 w-fit">
    ← Back to Blog
  </a>

</section>

<Footer />
<style>
.container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 3rem 1.2rem;
}

.category-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.sub-label {
  opacity: 0.7;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.no-posts {
  opacity: 0.6;
  padding: 1rem 0;
}

.grid-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-bottom: 3rem;
}

/* Reuse blog-card styling from Blog Home for consistency */
.blog-card {
  background: var(--surface);
  border-radius: 16px;
  padding: 1.3rem;
  border: 1px solid rgba(255,255,255,0.12);
  transition: 0.25s ease;
}

.blog-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow: 0 0 18px rgba(255,140,0,0.12);
}

.card-img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
}

.card-title {
  font-size: 1.15rem;
  font-weight: 600;
}

.card-meta {
  opacity: 0.7;
  margin-bottom: 0.4rem;
}

.card-tags {
  opacity: 0.7;
  font-size: 0.8rem;
}

.blog-card {
  background: var(--surface);
  padding: 1.25rem;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

/* soft neon border highlight */
.blog-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255,140,40,0.2),
    rgba(0,140,255,0.15)
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

/* hover effect */
.blog-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary);
}
.blog-card:hover::after {
  opacity: 1;
}

.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.card-meta {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-bottom: 0.5rem;
}

.card-tags {
  font-size: 0.75rem;
  opacity: 0.75;
}

.category-title + .grid-list {
  margin-top: 2rem;
}

</style>
