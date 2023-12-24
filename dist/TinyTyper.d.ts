import icons from './config/icons.json';
import type { ComputedRef, Ref } from "vue";
export type useTinyTyperInstances = useTinyTyperComposableParams;
export interface TinyTyperBaseProps {
    debugMode?: boolean;
    debugData?: string;
}
export interface ToolbarNavItem {
    id: string;
    order: number;
    name: string;
    icon: string;
    functionName: string;
}
export interface ToolbarGroup {
    order: number;
    toolbarItems: ToolbarNavItem[];
}
export interface useTinyTyperComposable {
    getToolBarItems: ComputedRef<ToolbarGroup[]>;
    getInstances: ComputedRef<useTinyTyperInstances>;
    callFunction: (functionName: string, actionId: string) => void;
    handleEnterKey: (event: KeyboardEvent) => void;
    setEditorRef: () => void;
    getContent: () => string;
    isFormatActive: (format: string) => boolean;
}
export interface useTinyTyperComposableParams {
    content: Ref<string>;
    editorRef: Ref<HTMLDivElement | null>;
}
export interface tinyTyperUtilFunctions {
    undoRedo: (action: ("undo" | "redo")) => void;
    toggleFormat: (format: string) => void;
}
export interface TinyTyperIconProps {
    icon: string;
    size: string;
    color?: string;
}
export type IconKey = keyof typeof icons;
export interface TinyTyperToolbarNavItemProps {
    item: ToolbarNavItem;
    showLabel?: boolean | false;
}
