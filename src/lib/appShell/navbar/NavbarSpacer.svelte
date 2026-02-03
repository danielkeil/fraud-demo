<script lang="ts">
	type Props = {
		class?: string
	}

	let props: Props = $props()
</script>

<div aria-hidden="true" class={['-ml-4 flex-1', props.class]}></div>
