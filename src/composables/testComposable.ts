// import type {
//   ToolbarGroup,
//   useTinyTyperComposable,
//   useTinyTyperComposableParams,
//   useTinyTyperInstances,
// } from "@/TinyTyper";
// import { computed, ComputedRef, ref } from "vue";
// import toolbarItems from "@/config/toolbarConfig";
// import { utilFunctions } from "./utils";
//
// export function useTinyTyper({
//                                content,
//                                editorRef,
//                              }: useTinyTyperComposableParams): useTinyTyperComposable {
//   const savedSelection: Range | null = null;
//
//   const getToolBarItems: ComputedRef<ToolbarGroup[]> = computed(() => toolbarItems);
//
//   const callFunction = (functionName: string, actionId: string): void => {
//     utilFunctions[functionName](actionId);
//   };
//
//
//   const getInstances: ComputedRef<useTinyTyperInstances> = computed(() => ({
//     content,
//     editorRef,
//   }));
//
//   const getContent = (): string => {
//     const editor = editorRef.value;
//
//     if (editor) {
//       const range = document.createRange();
//       const selection = window.getSelection();
//       range.selectNodeContents(editor);
//       range.collapse(false);
//       selection?.removeAllRanges();
//       selection?.addRange(range);
//
//       return editor?.innerHTML || '';
//     }
//
//     return "";
//   };
//
//   const setEditorRef = (): void => {
//     editorRef.value = document.querySelector(".tiny-typer-content");
//   };
//
//   const handleEnterKey = (event: KeyboardEvent): void => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       document.execCommand("insertHTML", false, "<br><br>");
//     }
//   };
//
//   const isFormatActive = (format: string): ComputedRef<boolean> => {
//     const isActive: ComputedRef<boolean> = computed(() => document.queryCommandState(format));
//     console.log('isFormatActive: ', format, isActive.value);
//     return isActive;
//   };
//
//   return {
//     getToolBarItems,
//     getInstances,
//     handleEnterKey,
//     setEditorRef,
//     callFunction,
//     getContent,
//     isFormatActive,
//   };
// }
