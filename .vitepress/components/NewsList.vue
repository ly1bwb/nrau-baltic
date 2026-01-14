<script setup lang="ts">
import { data as posts } from "@/news.data";
</script>

<template>
	<div class="divide-y divide-gray-200 dark:divide-gray-700">
		<article
			v-for="post of posts"
			:key="post.url"
			class="py-6 first:pt-0"
		>
			<div class="space-y-2">
				<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
					<time :datetime="String(post.date.time)">{{ post.date.string }}</time>
				</div>
				<h2 class="text-xl font-bold leading-8 tracking-tight">
					<a
						:href="post.url"
						class="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
					>
						{{ post.title }}
					</a>
				</h2>
				<div
					v-if="post.excerpt"
					class="prose dark:prose-invert max-w-none text-gray-500 dark:text-gray-400"
					v-html="post.excerpt"
				/>
				<a
					:href="post.url"
					class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
				>
					Read more &rarr;
				</a>
			</div>
		</article>
		<p v-if="posts.length === 0" class="py-6 text-gray-500 dark:text-gray-400">
			No news posts yet.
		</p>
	</div>
</template>
