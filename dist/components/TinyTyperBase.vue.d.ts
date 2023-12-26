declare const _sfc_main: import("vue").DefineComponent<{}, {
    content: import("vue").Ref<string>;
    editorRef: import("vue").Ref<HTMLDivElement | null>;
    emit: (event: "onInput" | "onFocusOut", ...args: any[]) => void;
    tinyTyper: import('../TinyTyper').useTinyTyperComposable;
    inputData: import("vue").Ref<string>;
    floatingBarOptions: import("vue").Ref<import('../TinyTyper').TinyTyperFloatingParameters>;
    handleInput: () => void;
    TinyTyperToolbar: import("vue").DefineComponent<{}, {
        getToolBarItems: import("vue").ComputedRef<import('../TinyTyper').ToolbarGroup[]>;
        callFunction: (functionName: string, actionId: string) => void;
        TinyTyperToolbarNavItem: import("vue").DefineComponent<{
            item: {
                type: ObjectConstructor;
                required: true;
            };
            showLabel: {
                type: BooleanConstructor;
                required: false;
            };
        }, {
            props: any;
            isActive: import("vue").Ref<boolean>;
            emit: (event: "click", ...args: any[]) => void;
            onClick: (data: Event) => void;
            TinyTyperIcon: import("vue").DefineComponent<{
                icon: {
                    type: StringConstructor;
                    required: true;
                };
                size: {
                    type: StringConstructor;
                    required: true;
                };
                color: {
                    type: StringConstructor;
                    required: false;
                };
            }, {
                props: any;
                getPath: import("vue").ComputedRef<string>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                icon: {
                    type: StringConstructor;
                    required: true;
                };
                size: {
                    type: StringConstructor;
                    required: true;
                };
                color: {
                    type: StringConstructor;
                    required: false;
                };
            }>>, {}, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            item: {
                type: ObjectConstructor;
                required: true;
            };
            showLabel: {
                type: BooleanConstructor;
                required: false;
            };
        }>> & {
            onClick?: ((...args: any[]) => any) | undefined;
        }, {
            showLabel: boolean;
        }, {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    TinyTyperFloatingBar: import("vue").DefineComponent<{
        config: {
            type: ObjectConstructor;
            required: true;
        };
    }, {
        getFloatingToolbarItems: import("vue").ComputedRef<import('../TinyTyper').ToolbarGroup>;
        callFunction: (functionName: string, actionId: string) => void;
        props: any;
        TinyTyperToolbarNavItem: import("vue").DefineComponent<{
            item: {
                type: ObjectConstructor;
                required: true;
            };
            showLabel: {
                type: BooleanConstructor;
                required: false;
            };
        }, {
            props: any;
            isActive: import("vue").Ref<boolean>;
            emit: (event: "click", ...args: any[]) => void;
            onClick: (data: Event) => void;
            TinyTyperIcon: import("vue").DefineComponent<{
                icon: {
                    type: StringConstructor;
                    required: true;
                };
                size: {
                    type: StringConstructor;
                    required: true;
                };
                color: {
                    type: StringConstructor;
                    required: false;
                };
            }, {
                props: any;
                getPath: import("vue").ComputedRef<string>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                icon: {
                    type: StringConstructor;
                    required: true;
                };
                size: {
                    type: StringConstructor;
                    required: true;
                };
                color: {
                    type: StringConstructor;
                    required: false;
                };
            }>>, {}, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            item: {
                type: ObjectConstructor;
                required: true;
            };
            showLabel: {
                type: BooleanConstructor;
                required: false;
            };
        }>> & {
            onClick?: ((...args: any[]) => any) | undefined;
        }, {
            showLabel: boolean;
        }, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        config: {
            type: ObjectConstructor;
            required: true;
        };
    }>>, {}, {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onInput" | "onFocusOut")[], "onInput" | "onFocusOut", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onOnInput?: ((...args: any[]) => any) | undefined;
    onOnFocusOut?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
