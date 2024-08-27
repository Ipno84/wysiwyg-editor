interface BaseGridContainerProps {
    $columns?: number;
    $gap?: number;
}

interface GridContainerProps extends BaseGridContainerProps {
    $gap?: number;
    $breakpoints?: Record<number, BaseGridContainerProps>;
}

export type { GridContainerProps, BaseGridContainerProps };
