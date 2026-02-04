<script lang="ts">
	type Props = {
		class?: string;
	};

	let props: Props = $props();
</script>

<div aria-hidden="true" class={['h-6 w-px bg-zinc-900/10', props.class]}></div>
