declare const _sfc_main: import("vue").DefineComponent<{}, {
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
        isFormatActive: (format: string) => boolean;
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
export default _sfc_main;
