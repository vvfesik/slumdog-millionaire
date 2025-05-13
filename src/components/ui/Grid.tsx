type GapSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
type AlignItems = 'start' | 'center' | 'end' | 'stretch';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  smCols?: number;
  mdCols?: number;
  lgCols?: number;
  hasRowGap?: boolean;
  isNestedGrid?: boolean;
  alignItems?: AlignItems;
  gap?: GapSize;
  rowGap?: GapSize;
  className?: string;
}

export function Grid({
  children,
  cols = 1,
  smCols,
  mdCols,
  lgCols,
  hasRowGap = true,
  isNestedGrid = false,
  alignItems,
  gap,
  rowGap,
  className = '',
}: GridProps) {
  const gridClasses = [
    'grid',
    isNestedGrid ? 'nested-grid' : '',
    !hasRowGap ? 'no-row-gap' : '',
    cols ? `cols-${cols}` : '',
    smCols ? `sm-cols-${smCols}` : '',
    mdCols ? `md-cols-${mdCols}` : '',
    lgCols ? `lg-cols-${lgCols}` : '',
    gap ? `gap-${gap}` : '',
    rowGap ? `row-gap-${rowGap}` : '',
    alignItems ? `align-${alignItems}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
}

interface GridColumnProps {
  children: React.ReactNode;
  span?: number;
  className?: string;
}

/**
 ** Grid Column (Only for use inside of Grid)
 */
export function GridColumn({
  children,
  span,
  className = '',
}: GridColumnProps) {
  const gridColumnClasses = [
    'grid-column',
    span && span > 1 && span <= 12 ? `span-${span}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={gridColumnClasses}>
      {children}
    </div>
  );
}
