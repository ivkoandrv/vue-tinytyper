import { ToolbarGroup } from "@/TinyTyper";

export const toolbarItems: ToolbarGroup[] = [
  {
    order: 0,
    toolbarItems: [
      {
        id: "undo",
        order: 0,
        name: "Undo",
        icon: "action-undo",
        functionName: "callAction",
      },
      {
        id: "redo",
        order: 1,
        name: "Redo",
        icon: "action-redo",
        functionName: "callAction",
      },
    ],
  },
  {
    order: 1,
    toolbarItems: [
      {
        id: "bold",
        order: 0,
        name: "Bold",
        icon: "format-bold",
        functionName: "callAction",
      },
      {
        id: "italic",
        order: 1,
        name: "Italic",
        icon: "format-italic",
        functionName: "callAction",
      },
      {
        id: "strikeThrough",
        order: 2,
        name: "Strike",
        icon: "format-strike",
        functionName: "callAction",
      },
      {
        id: "underline",
        order: 3,
        name: "Underline",
        icon: "format-underline",
        functionName: "callAction",
      },
    ],
  },
];

export const floatingFormatters: ToolbarGroup = toolbarItems[1];
