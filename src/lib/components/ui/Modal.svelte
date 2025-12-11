<script>
    export let open = false;
    export let onClose = () => {};

    let dialogRef;

    // Sync "open" prop with <dialog>
    $: if (dialogRef) {
        if (open && !dialogRef.open) {
            dialogRef.showModal();
        } else if (!open && dialogRef.open) {
            dialogRef.close();
        }
    }

    // Close modal when ESC is pressed
    function handleKeydown(e) {
        if (e.key === "Escape") {
            onClose();
        }
    }
</script>

{#if open}
    <!-- BACKDROP (accessible) -->
    <button
        type="button"
        class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm cursor-pointer"
        on:click={onClose}
        aria-label="Close modal"
    ></button>
{/if}

<dialog
    bind:this={dialogRef}
    class="z-50 w-[90%] max-w-md rounded-xl border border-neutral-700 bg-neutral-900 shadow-xl p-0 modal-shell"
    on:click={(e) => e.stopPropagation()}
    on:keydown={handleKeydown}
    role="dialog"
    aria-modal="true"
>
    <div class="modal-content p-6">
        <slot />
    </div>
</dialog>


<style>
    dialog {
        margin: auto;
        outline: none;
        padding: 0;
        border: none;
    }

    dialog.modal-shell {
        margin-top: 5vh;   /* Push downward */
        margin-bottom: 5vh;
    }

    /* If you want even more breathing space: */
    @media (min-width: 768px) {
        dialog.modal-shell {
            margin-top: 8vh;
            margin-bottom: 8vh;
        }
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.6) backdrop-blur(4px);
    }
</style>

