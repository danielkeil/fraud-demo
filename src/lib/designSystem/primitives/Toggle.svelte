<script lang="ts">
	import { Switch } from 'bits-ui'

	type Props = {
		checked?: boolean
		label: string
		value?: string
		name?: string
		disabled?: boolean
		variant?: 'default' | 'bordered'
		class?: string
		onCheckedChange?: (checked: boolean) => void
	}

	let {
		checked = $bindable(false),
		label,
		value,
		name,
		disabled = false,
		variant = 'default',
		class: className,
		onCheckedChange,
	}: Props = $props()

	const variantStyles = {
		default: '',
		bordered: 'w-fit rounded-lg border border-zinc-900/10 px-3.5 py-2.5 sm:px-3 sm:py-1.5',
	}
</script>

<div class="flex items-center gap-3 {variantStyles[variant]} {className}">
	<Switch.Root
		bind:checked
		{name}
		{value}
		{disabled}
		{onCheckedChange}
		class="relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-zinc-200 transition-colors outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-yellow-400"
	>
		<Switch.Thumb
			class="pointer-events-none block size-5 translate-x-0.5 rounded-full bg-white shadow ring-0 transition-transform data-[state=checked]:translate-x-[18px]"
		/>
	</Switch.Root>
	<span class="text-sm font-medium {checked ? 'text-yellow-900' : 'text-zinc-900'}">{label}</span>
</div>
