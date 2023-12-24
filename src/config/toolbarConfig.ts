import { ToolbarGroup } from "@/TinyTyper";

const toolbarItems : ToolbarGroup[] = [
  {
    order: 0,
    toolbarItems: [
      {
        id: 'undo',
        order: 0,
        name: "Undo",
        icon: "action-undo",
        functionName: "undoRedo"
      },
      {
        id: 'redo',
        order: 1,
        name: "Redo",
        icon: "action-redo",
        functionName: "undoRedo"
      }
    ]
  },
  {
    order: 1,
    toolbarItems: [
      {
        id: 'bold',
        order: 0,
        name: "Bold",
        icon: "format-bold",
        functionName: "toggleFormat"
      },
      {
        id: 'italic',
        order: 1,
        name: "Italic",
        icon: "format-italic",
        functionName: "toggleFormat"
      },
      {
        id: 'strikeThrough',
        order: 2,
        name: "Strike",
        icon: "format-strike",
        functionName: "toggleFormat"
      },
      {
        id: 'underline',
        order: 3,
        name: "Underline",
        icon: "format-underline",
        functionName: "toggleFormat"
      },
    ]
  }
]

export default toolbarItems