<script lang="ts">
	type Props = {
		class?: string;
	};

	let props: Props = $props();
</script>

<hr class={['my-4 border-t border-zinc-900/5 lg:-mx-4', props.class]} />
