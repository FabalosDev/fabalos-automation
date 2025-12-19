<svelte:head>
  <meta name="description" content="Contact Fabalos Automation — work with an automation engineer specializing in n8n, Make.com, GPT workflows, and scalable system design." />
</svelte:head>

<script>
  import { showContactModal } from '$lib/stores/contact.js';

  let name = "";
  let email = "";
  let message = "";

  let loading = false;
  let steps = [];
  let coldStart = false;
  let hasWarmupHappened = false;
  let responseMessage = "";

  let timers = [];

  function later(fn, delay) {
    const t = setTimeout(fn, delay);
    timers.push(t);
    return t;
  }

  function resetForm() {
    timers.forEach(clearTimeout);
    timers = [];

    name = "";
    email = "";
    message = "";

    loading = false;
    steps = [];
    coldStart = false;
    responseMessage = "";
  }

  function closeModal() {
    resetForm();
    showContactModal.set(false);
  }

  async function handleSubmit() {
    if (loading) return;

    loading = true;
    steps = [];
    coldStart = false;
    responseMessage = "";

    let coldTimer;
    if (!hasWarmupHappened) {
      coldTimer = later(() => {
        coldStart = true;
      }, 1200);
    }

    function addStep(text, delay) {
      later(() => {
        steps = [...steps, text];
      }, delay);
    }

    addStep("🔄 Sending your message to automation…", 0);

    try {
      const res = await fetch("https://floflux.fabalos.com/webhook/form-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      addStep("⚙️ Workflow triggered.", 400);
      addStep("📤 Delivering data to n8n…", 800);
      addStep("🤖 Automation processing…", 1200);

      const out = await res.json();
      responseMessage = out.message || "Message sent successfully! 🚀";

      addStep("✔ Automation complete — " + responseMessage, 1600);

      loading = false;
      hasWarmupHappened = true;
      coldStart = false;

      later(() => {
        closeModal();
      }, 5000);

    } catch (err) {
      loading = false;
      coldStart = false;
      hasWarmupHappened = true;

      addStep("❌ Automation failed. Please try again.", 400);
    }
  }
</script>

<div class="relative">
  <!-- Close -->
  <button
    class="absolute right-3 top-3 text-gray-400 hover:text-gray-200"
    on:click={closeModal}
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
      placeholder="Tell me about your project…"
      class="form-input"
    ></textarea>

    <button class="btn-solid send-btn" disabled={loading}>
      {#if loading}
        <span class="flex items-center gap-2">
          <span class="pulse-dot"></span> Sending…
        </span>
      {:else}
        Send Message
      {/if}
    </button>

    {#if coldStart}
      <div class="cold-start">
        ⚡ Warming up automation engine… This may take a few seconds.
      </div>
    {/if}

    {#if steps.length > 0}
      <div class="automation-console">
        {#each steps as step, i}
          <div class="console-line">
            <span class="index">{i + 1}.</span> {step}
          </div>
        {/each}
      </div>
    {/if}

    <p class="text-soft text-xs text-center mt-2">
      No spam. No sales pressure. Just clean conversations.
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

  .btn-solid {
    background: #ff7a1a;
    color: white;
    border-radius: 12px;
    padding: 14px;
    width: 100%;
    font-weight: 600;
  }

  .btn-solid:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .cold-start {
    margin-top: 8px;
    padding: 10px;
    border-radius: 8px;
    background: rgba(255,122,26,0.12);
    border: 1px solid rgba(255,122,26,0.35);
    color: #ffb46a;
    font-size: 0.85rem;
  }

  .automation-console {
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    font-family: 'JetBrains Mono', monospace;
    max-height: 180px;
    overflow-y: auto;
  }

  .console-line {
    font-size: 0.8rem;
    color: #d3d3d3;
    display: flex;
    gap: 6px;
    animation: fadeInUp 0.2s ease;
  }

  .index {
    color: #ff7b47;
    font-weight: 600;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1); }
    100% { opacity: 0.3; transform: scale(0.8); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(3px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
