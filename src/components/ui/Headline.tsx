import styles from '@/components/Headline.module.css';

interface HeadlineProps {
  children: React.ReactNode;
  className?: string;
}

export function Headline({ children, className = '' }: HeadlineProps) {
  return (
    <h1 className={`${styles.headline} ${className}`}>
      {children}
    </h1>
  );
}

export default Headline;
