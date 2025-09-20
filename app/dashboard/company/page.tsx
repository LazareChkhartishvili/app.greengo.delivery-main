import { DataTable } from '@/components/dashboard/company/data-table';
import PageHeader from '@/components/shared/page-header';
import { TableSkeleton } from '@/components/shared/table-skeleton';
import { Button } from '@/components/ui/button';
import { routes } from '@/routes';
import Link from 'next/link';
import React, { Suspense } from 'react';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { api } from '@/services';
import { SessionRootI } from '@/types';
const pageHeader = {
  title: 'კომპანია',
  breadcrumb: [
    {
      href: routes.dashboard.main,
      name: 'მთავარი',
    },
    {
      href: routes.company.company,
      name: 'ყველა კომპანია',
    },
    {
      name: 'სია',
    },
  ],
};

async function RolePage() {
  const session = (await getServerSession(authOptions)) as SessionRootI;

  const token = session?.user?.data?.token;
  const data = await api.services.company.getCompany(token);
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3">
          <Link
            href={routes.company.createCompany}
            className="w-full lg:w-auto"
          >
            <Button>კომპანიის დამატება</Button>
          </Link>
        </div>
      </PageHeader>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable data={data.data} token={token} />
      </Suspense>
    </>
  );
}

export default RolePage;
