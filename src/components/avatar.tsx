import Image from 'next/image';

type Size = 'sm' | 'md' | 'lg';

const sizes: Record<Size, {px: number; cls: string}> = {
  sm: {px: 128, cls: 'h-16 w-16'},
  md: {px: 200, cls: 'h-32 w-32'},
  lg: {px: 320, cls: 'h-52 w-52 sm:h-64 sm:w-64'}
};

export function Avatar({size = 'md', className = ''}: {size?: Size; className?: string}) {
  const {px, cls} = sizes[size];
  return (
    <div className={`relative ${cls} ${className}`}>
      <div
        aria-hidden
        className="absolute -inset-2 rounded-full opacity-60 blur-2xl"
        style={{
          background:
            'conic-gradient(from 0deg, rgb(124 58 237 / 0.6), rgb(236 72 153 / 0.5), rgb(251 146 60 / 0.5), rgb(124 58 237 / 0.6))'
        }}
      />
      <div
        aria-hidden
        className="absolute -inset-[3px] rounded-full"
        style={{background: 'linear-gradient(135deg, #7c3aed, #ec4899 50%, #fb923c)'}}
      />
      <div className="relative h-full w-full overflow-hidden rounded-full bg-muted ring-2 ring-background">
        <Image
          src="/avatar.png"
          alt="Rafiatou Nchetkou"
          width={px}
          height={px}
          priority
          className="h-full w-full object-cover"
          style={{objectPosition: '50% 18%'}}
        />
      </div>
    </div>
  );
}