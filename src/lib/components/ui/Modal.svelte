<script>
  import { showContactModal } from '$lib/stores/contact.js';

  let dialog;

  // OPEN / CLOSE driven ONLY by store
  $: if (dialog) {
    if ($showContactModal && !dialog.open) {
      dialog.showModal();
    }
    if (!$showContactModal && dialog.open) {
      dialog.close();
    }
  }

  function closeModal() {
    showContactModal.set(false);
  }
</script>

<dialog
  bind:this={dialog}
  class="z-50 w-[90%] max-w-md rounded-xl border border-neutral-700 bg-neutral-900 p-0"
  on:close={closeModal}
  on:cancel|preventDefault={closeModal}
>
  <div class="p-6">
    <slot />
  </div>
</dialog>

<style>
dialog {
    margin: auto;
}
</style>