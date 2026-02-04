<script lang="ts">
	type Props = {
		class?: string;
	};

	let props: Props = $props();
</script>

<div aria-hidden="true" class={['mt-8 flex-1', props.class]}></div>
