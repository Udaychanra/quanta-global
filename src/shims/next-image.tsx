'use client';

import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height' | 'loading'>;

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, priority, style, ...rest }) => {
  const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    src,
    alt,
    className,
    loading: priority ? 'eager' : 'lazy',
    style: { ...(style || {}) },
    ...rest,
  };

  if (typeof width === 'number') {
    imgProps.width = width;
  } else if (typeof width === 'string') {
    imgProps.style = { ...imgProps.style, width };
  }

  if (typeof height === 'number') {
    imgProps.height = height;
  } else if (typeof height === 'string') {
    imgProps.style = { ...imgProps.style, height };
  }

  return <img {...imgProps} />;
};

export default Image;


