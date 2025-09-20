import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import cn from '@/utils/class-names';
import React from 'react';

export type PageHeaderTypes = {
  title: string;
  breadcrumb: { name: string; href?: string }[];
  className?: string;
};

export default function PageHeader({
  title,
  breadcrumb,
  children,
  className,
}: React.PropsWithChildren<PageHeaderTypes>) {
  return (
    <header
      className={cn(
        'mx-auto mb-6 mt-2 w-full px-4 sm:mt-10 lg:px-6',
        className
      )}
    >
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <div>
          <h3 className="font 4xl:text-[26px] mb-2 text-center text-[22px] sm:text-start lg:text-2xl">
            {title}
          </h3>

          <Breadcrumb separator="" className="flex-wrap">
            <BreadcrumbList>
              {breadcrumb.map((item) => (
                <React.Fragment key={item.name}>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="font" href={item.href}>
                      {item.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {children}
      </div>
    </header>
  );
}
