<template>
  <svg viewBox="0 0 24 24" class="tiny-typer-icon" role="img">
    <path :d="getPath"></path>
  </svg>
</template>

<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed } from "vue";
import icons from "@/config/icons.json";
import type { TinyTyperIconProps, IconKey } from "@/TinyTyper";

const props = defineProps<TinyTyperIconProps>();

const getPath: ComputedRef<string> = computed(
  () => icons[`tt-${props.icon}` as IconKey],
);
</script>

<style scoped></style>
