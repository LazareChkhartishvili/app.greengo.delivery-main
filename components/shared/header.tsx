import { ModeToggle } from '@/components/shared/theme-switcher';

import Link from 'next/link';
function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center justify-between  gap-2 px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <h4 className="font scroll-m-20 text-2xl tracking-tight">
            მთავარი გვერდი
          </h4>
        </Link>

        <div className="bg-red-300">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
