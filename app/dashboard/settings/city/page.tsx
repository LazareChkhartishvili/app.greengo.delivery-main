import { DataTable } from '@/components/dashboard/settings/city/data-table';
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
  title: 'ქალაქი',
  breadcrumb: [
    {
      href: routes.dashboard.main,
      name: 'მთავარი',
    },
    {
      href: routes.city.city,
      name: 'ყველა ქალაქი',
    },
    {
      name: 'სია',
    },
  ],
};

async function RolePage() {
  const session = (await getServerSession(authOptions)) as SessionRootI;

  const token = session?.user?.data?.token;
  const data = await api.services.city.getCity(token);
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3">
          <Link href={routes.city.createCity} className="w-full lg:w-auto">
            <Button>ქალაქის დამატება</Button>
          </Link>
        </div>
      </PageHeader>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable data={data.data} />
      </Suspense>
    </>
  );
}

export default RolePage;
