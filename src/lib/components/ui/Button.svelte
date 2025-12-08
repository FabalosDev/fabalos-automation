<script lang="ts">
  export let variant: 'solid' | 'primary' = 'solid';
  export let href: string | null = null;
  export let disabled: boolean = false;
  export let loading: boolean = false;

  const classes = {
    solid: 'btn-solid',
    primary: 'btn-primary'
  };
</script>

{#if href}
  <a
    href={href}
    class={classes[variant]}
    aria-disabled={disabled}
  >
    <span class="btn-label">
      {#if loading}
        Loading...
      {:else}
        <slot />
      {/if}
    </span>
  </a>
{:else}
  <button
    class={classes[variant]}
    disabled={disabled}
    aria-busy={loading}
  >
    <span class="btn-label">
      {#if loading}
        Loading...
      {:else}
        <slot />
      {/if}
    </span>
  </button>
{/if}

<style>
  /* Ensures label always renders ABOVE hover overlay */
  .btn-label {
    position: relative;
    z-index: 10;
    display: inline-block;
  }
</style>
