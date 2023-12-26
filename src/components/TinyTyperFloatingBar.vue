<template>
  <!--  v-if="props.selectedText"-->
  <div
    v-if="props.config.isSelected"
    class="tiny-typer-floating-bar"
    :style="{ top: props.config.top + 'px', left: props.config.left + 'px' }"
  >
    <ul class="tiny-typer-toolbar-nav-item">
      <li
        v-for="navGroupItem of getFloatingToolbarItems.toolbarItems"
        :key="navGroupItem.order"
      >
        <tiny-typer-toolbar-nav-item
          :item="navGroupItem"
          @click="callFunction(navGroupItem.functionName, navGroupItem.id)"
        ></tiny-typer-toolbar-nav-item>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, inject } from "vue";
import {
  TinyTyperFloatingParameters,
  useTinyTyperComposable,
} from "@/TinyTyper";
import TinyTyperToolbarNavItem from "@/components/TinyTyperToolbarNavItem.vue";

const { getFloatingToolbarItems, callFunction } = inject(
  "tinyTyper",
) as useTinyTyperComposable;

const props = defineProps<{ config: TinyTyperFloatingParameters }>();
</script>

<style scoped></style>
