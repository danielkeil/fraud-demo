<script lang="ts">
	import { Monitor } from 'lucide-svelte';
</script>

<div
	class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white p-6 md:hidden"
>
	<Monitor class="size-16 text-zinc-400" />
	<h1 class="mt-6 text-xl font-semibold text-zinc-900">Desktop erforderlich</h1>
	<p class="mt-2 text-center text-zinc-600">
		Diese Demo ist für Desktop-Browser optimiert und unterstützt keine mobilen Geräte.
	</p>
	<a
		href="/screenshot.png"
		target="_blank"
		class="mt-8 overflow-hidden rounded-lg border"
	>
		<img src="/screenshot.png" alt="Desktop App Screenshot" class="w-full max-w-sm" />
	</a>
	<p class="mt-4 text-sm text-zinc-500">Tippen Sie auf das Bild für eine größere Ansicht</p>
</div>
