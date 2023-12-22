<script setup lang="ts">
import { inject } from "vue";
import type { useTinyTyperComposable } from "@/TinyTyper";

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
          <button @click="callFunction(navGroupItem.functionName, navGroupItem.id)">{{navGroupItem.name}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>