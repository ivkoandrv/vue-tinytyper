<script setup lang="ts">
import { inject } from "vue";
import type { useTinyTyperComposable } from "@/TinyTyper";
import TinyTyperToolbarNavItem from "@/components/TinyTyperToolbarNavItem.vue";

const { getToolBarItems, callFunction } = inject("tinyTyper") as useTinyTyperComposable;

</script>

<template>
  <div class="tiny-typer-toolbar">
    <div class="tiny-typer-toolbar-nav">
      <ul
        class="tiny-typer-toolbar-nav-item"
        v-for="navGroup of getToolBarItems"
        :key="navGroup.order"
      >
        <li v-for="navGroupItem of navGroup.toolbarItems" :key="navGroupItem.order">
            <tiny-typer-toolbar-nav-item :item="navGroupItem" @click="callFunction(navGroupItem.functionName, navGroupItem.id)"></tiny-typer-toolbar-nav-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>