interface BaseFlexContainerProps {
    $gap?: number;
}

interface FlexContainerProps extends BaseFlexContainerProps {
    $breakpoints?: Record<number, BaseFlexContainerProps>;
}

export type { FlexContainerProps, BaseFlexContainerProps };
