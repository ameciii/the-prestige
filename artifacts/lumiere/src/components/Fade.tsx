import { useInView } from '@/hooks/useInView';
import type { CSSProperties, ReactNode, ElementType } from 'react';

interface FadeProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'in';
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
  id?: string;
}

export function Fade({ children, delay = 0, direction = 'up', as: Tag = 'div', style, ...rest }: FadeProps) {
  const { ref, visible } = useInView();
  return (
    <Tag
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible || direction === 'in' ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
        willChange: 'opacity, transform',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
