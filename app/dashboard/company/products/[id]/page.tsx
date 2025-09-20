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
import { DataTable } from '@/components/dashboard/company/products/data-table';

async function ProductsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const session = (await getServerSession(authOptions)) as SessionRootI;

  const token = session?.user?.data?.token;

  const [data, singleCompany] = await Promise.all([
    api.services.company.getCompanyProducts(token, id),
    api.services.company.getSingleCompany(token, id),
  ]);

  const pageHeader = {
    title: `კომპანია: ${singleCompany.data.name_ka}`,
    breadcrumb: [
      {
        href: routes.dashboard.main,
        name: 'მთავარი',
      },
      // {
      //   href: routes.company.company,
      //   name: 'ყველა კომპანია',
      // },
      {
        name: 'პროდუქცია',
      },
    ],
  };

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3">
          <Link
            href={routes.companyCategory.companyCategory(id)}
            className="w-full lg:w-auto"
          >
            <Button>კომპანიის კატოგორიები</Button>
          </Link>
          <Link
            href={routes.products.createProduct(id)}
            className="w-full lg:w-auto"
          >
            <Button>პროდუქტის დამატება</Button>
          </Link>
        </div>
      </PageHeader>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable data={data.data} />
      </Suspense>
    </>
  );
}

export default ProductsPage;
