import styled from '@emotion/styled';

import type { CSSObject } from '@emotion/styled';
import type { AuthorableProps } from 'react';
import type { ViewProps } from '@/components/ui/view/typings';

import { withEditable } from '@/core/hoc/with-editable';

const ViewComponent = styled.div<ViewProps>(
    ({
        $absolute,
        $relative,
        $marginTop,
        $marginRight,
        $marginBottom,
        $marginLeft,
        $paddingTop,
        $paddingLeft,
        $paddingBottom,
        $paddingRight,
        $top,
        $right,
        $bottom,
        $left,
        $transform,
        $zIndex,
        $backgroundColor,
        $fitHeight,
        $fitScreen,
        $isFlex,
        $centerVertically,
        $scrollableX,
        $scrollableY,
        $breakpoints,
    }) => {
        let style: CSSObject = {};

        if ($marginTop !== undefined) style.marginTop = `${$marginTop}px`;
        if ($marginRight !== undefined) style.marginRight = `${$marginRight}px`;
        if ($marginBottom !== undefined) style.marginBottom = `${$marginBottom}px`;
        if ($marginLeft !== undefined) style.marginLeft = `${$marginLeft}px`;
        if ($paddingTop !== undefined) style.paddingTop = `${$paddingTop}px`;
        if ($paddingRight !== undefined) style.paddingRight = `${$paddingRight}px`;
        if ($paddingBottom !== undefined) style.paddingBottom = `${$paddingBottom}px`;
        if ($paddingLeft !== undefined) style.paddingLeft = `${$paddingLeft}px`;
        if ($top !== undefined) style.top = `${$top}px`;
        if ($right !== undefined) style.right = `${$right}px`;
        if ($bottom !== undefined) style.bottom = `${$bottom}px`;
        if ($left !== undefined) style.left = `${$left}px`;
        if ($transform !== undefined) style.transform = `${$transform}`;
        if ($zIndex !== undefined) style.zIndex = `${$zIndex}`;
        if ($backgroundColor !== undefined) style.backgroundColor = `${$backgroundColor}`;

        if ($absolute) style.position = 'absolute';
        if ($relative) style.position = 'relative';
        if ($fitHeight) style.height = '100%';
        if ($fitScreen) style.height = '100dvh';
        if ($isFlex) style.display = 'flex';
        if ($centerVertically) style.alignItems = 'center';
        if ($scrollableX) style.overflowX = 'auto';
        if ($scrollableY) style.overflowY = 'auto';
        if ($scrollableX || $scrollableY) style.WebkitOverflowScrolling = 'touch';

        if ($breakpoints !== undefined) {
            Object.entries($breakpoints).forEach(([breakpoint, props]) => {
                const breakpointKey = `@media (min-width: ${breakpoint}px)`;

                if (!style[breakpointKey]) style[breakpointKey] = {};

                let position: 'absolute' | 'relative' | undefined;
                let marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft,
                    paddingTop,
                    paddingLeft,
                    paddingBottom,
                    paddingRight,
                    top,
                    right,
                    bottom,
                    left,
                    zIndex,
                    backgroundColor,
                    transform,
                    height,
                    display,
                    alignItems;

                if (props.$marginTop !== undefined) marginTop = `${props.$marginTop}px`;
                if (props.$marginRight !== undefined) marginRight = `${props.$marginRight}px`;
                if (props.$marginBottom !== undefined) marginBottom = `${props.$marginBottom}px`;
                if (props.$marginLeft !== undefined) marginLeft = `${props.$marginLeft}px`;
                if (props.$paddingTop !== undefined) paddingTop = `${props.$paddingTop}px`;
                if (props.$paddingRight !== undefined) paddingRight = `${props.$paddingRight}px`;
                if (props.$paddingBottom !== undefined) paddingBottom = `${props.$paddingBottom}px`;
                if (props.$paddingLeft !== undefined) paddingLeft = `${props.$paddingLeft}px`;
                if (props.$top !== undefined) top = `${props.$top}px`;
                if (props.$right !== undefined) right = `${props.$right}px`;
                if (props.$bottom !== undefined) bottom = `${props.$bottom}px`;
                if (props.$left !== undefined) left = `${props.$left}px`;
                if (props.$transform !== undefined) transform = `${props.$transform}`;
                if (props.$zIndex !== undefined) zIndex = `${props.$zIndex}`;
                if (props.$backgroundColor !== undefined) backgroundColor = `${props.$backgroundColor}`;
                const overflowX = props.$scrollableX ? 'auto' : 'inherit';
                const overflowY = props.$scrollableY ? 'auto' : 'inherit';
                const WebkitOverflowScrolling = props.$scrollableX || props.$scrollableY ? 'touch' : 'inherit';

                if (props.$absolute) position = 'absolute';
                if (props.$relative) position = 'relative';
                if (props.$fitHeight) height = '100%';
                if (props.$fitScreen) height = '100dvh';
                if (props.$isFlex) display = 'flex';
                if (props.$centerVertically) alignItems = 'center';

                style = {
                    ...style,
                    [breakpointKey]: {
                        ...(style[breakpointKey] as object),
                        marginTop,
                        marginRight,
                        marginBottom,
                        marginLeft,
                        paddingTop,
                        paddingRight,
                        paddingBottom,
                        paddingLeft,
                        position,
                        top,
                        right,
                        bottom,
                        left,
                        transform,
                        backgroundColor,
                        zIndex,
                        height,
                        display,
                        alignItems,
                        overflowX,
                        overflowY,
                        WebkitOverflowScrolling,
                    },
                };
            });
        }

        return style;
    },
);

const ViewComponentBaseAuthorableProps: AuthorableProps = {
    $absolute: {
        type: 'checkbox',
        default: undefined,
        required: false,
        label: 'Absolute Position',
        description: 'Position the element absolutely',
        group: {
            label: 'Positioning',
            value: 'positioning',
        },
    },
    $relative: {
        type: 'checkbox',
        default: undefined,
        required: false,
        label: 'Relative Position',
        description: 'Position the element relatively',
        group: {
            label: 'Positioning',
            value: 'positioning',
        },
    },
    $marginTop: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Margin Top',
        description: 'Set the top margin',
        group: {
            label: 'Margins',
            value: 'margins',
        },
    },
    $marginRight: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Margin Right',
        description: 'Set the right margin',
        group: {
            label: 'Margins',
            value: 'margins',
        },
    },
    $marginBottom: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Margin Bottom',
        description: 'Set the bottom margin',
        group: {
            label: 'Margins',
            value: 'margins',
        },
    },
    $marginLeft: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Margin Left',
        description: 'Set the left margin',
        group: {
            label: 'Margins',
            value: 'margins',
        },
    },
    $paddingTop: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Padding Top',
        description: 'Set the top padding',
        group: {
            label: 'Paddings',
            value: 'paddings',
        },
    },
    $paddingRight: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Padding Right',
        description: 'Set the right padding',
        group: {
            label: 'Paddings',
            value: 'paddings',
        },
    },
    $paddingBottom: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Padding Bottom',
        description: 'Set the bottom padding',
        group: {
            label: 'Paddings',
            value: 'paddings',
        },
    },
    $paddingLeft: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Padding Left',
        description: 'Set the left padding',
        group: {
            label: 'Paddings',
            value: 'paddings',
        },
    },
    $top: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Top',
        description: 'Set the top position',
        group: {
            label: 'Positioning',
            value: 'positioning',
        },
    },
    $right: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Right',
        description: 'Set the right position',
        group: {
            label: 'Positioning',
            value: 'positioning',
        },
    },
    $bottom: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Bottom',
        description: 'Set the bottom position',
        group: {
            label: 'Positioning',
            value: 'positioning',
        },
    },
    $left: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Left',
        description: 'Set the left position',
        group: {
            label: 'Positioning',
            value: 'positioning',
        },
    },
    $transform: {
        type: 'text',
        default: undefined,
        required: false,
        label: 'Transform',
        description: 'Set the transform property',
        group: {
            label: 'Positioning',
            value: 'positioning',
        },
    },
    $zIndex: {
        type: 'number',
        default: undefined,
        required: false,
        label: 'Z-Index',
        description: 'Set the z-index property',
        group: {
            label: 'Positioning',
            value: 'positioning',
        },
    },
    $fitHeight: {
        type: 'checkbox',
        default: undefined,
        required: false,
        label: 'Fit Height',
        description: 'Set the height to 100%',
        group: {
            label: 'Sizes',
            value: 'sizes',
        },
    },
    $backgroundColor: {
        type: 'color',
        default: undefined,
        required: false,
        label: 'Background Color',
        description: 'Set the background color',
        group: {
            label: 'Colors',
            value: 'colors',
        },
    },
};

ViewComponent.authorableProps = {
    ...ViewComponentBaseAuthorableProps,
    $breakpoints: {
        type: 'structured',
        default: undefined,
        required: false,
        structure: {
            key: 'number',
            values: ViewComponentBaseAuthorableProps,
        },
    },
};

ViewComponent.displayName = 'View';

const View = withEditable(ViewComponent);

export { View, ViewComponent };
