import clsx from 'clsx';
import React from 'react';

export function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li
      {...props}
      className={clsx('aspect-square', props.className)}
    >
      {props.children}
    </li>
  );
}

export default function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul
      {...props}
      className={clsx('grid grid-flow-row gap-4', props.className)}
    >
      {props.children}
    </ul>
  );
}

Grid.Item = GridItem;
