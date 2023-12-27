import clsx from 'clsx';

function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo"
      viewBox="0 0 32 28"
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
    >
      <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
      <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
    </svg>
  );
}

export default function Logo({size}: {size?: 'sm' | undefined}) {
  return (
    <div
      className={clsx('flex flex-none items-center justify-center border-primary bg-white dark:bg-black', {
        'h-[40px] w-[40px] rounded-xl': !size,
        'h-[30px] w-[30px] rounded-lg': size === 'sm',
      })}
    >
      <LogoIcon
        className={clsx({
          'h-[16px] w-[16px]': !size,
          'h-[10px] w-[10px]': size === 'sm',
        })}
      />
    </div>
  );
}
