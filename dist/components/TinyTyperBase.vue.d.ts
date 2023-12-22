declare const _sfc_main: import("vue").DefineComponent<{}, {
    content: import("vue").Ref<string>;
    editorRef: import("vue").Ref<HTMLDivElement | null>;
    emit: (event: "onInput" | "onFocusOut", ...args: any[]) => void;
    tinyTyper: import("../TinyTyper").useTinyTyperComposable;
    handleInput: () => void;
    TinyTyperToolbar: import("vue").DefineComponent<{}, {
        getToolBarItems: import("vue").ComputedRef<import("../TinyTyper").ToolbarGroup[]>;
        callFunction: (functionName: string, actionId: string) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onInput" | "onFocusOut")[], "onInput" | "onFocusOut", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onOnInput?: ((...args: any[]) => any) | undefined;
    onOnFocusOut?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
