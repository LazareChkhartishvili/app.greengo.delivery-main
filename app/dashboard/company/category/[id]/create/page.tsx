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
import EditCreateForm from '@/components/dashboard/company/category/create-edit/edit-create-form';

async function CreateProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const session = (await getServerSession(authOptions)) as SessionRootI;

  const token = session?.user?.data?.token;

  const [singleCompany, productCategory] = await Promise.all([
    api.services.company.getSingleCompany(token, id),
    api.services.company.getCategoryProducts(token, id),
  ]);

  const pageHeader = {
    title: singleCompany.data.name_ka + ' - ' + 'კატოგორიის დამატება',
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

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        {/* <div className="mt-4 flex items-center gap-3">
          <Link
            href={routes.products.createProduct(id)}
            className="w-full lg:w-auto"
          >
            <Button>პროდუქტის დამატება</Button>
          </Link>
        </div> */}
      </PageHeader>
      <Suspense fallback={<TableSkeleton />}>
        <EditCreateForm
          productCategory={productCategory?.data}
          token={token}
          id={id}
        />
      </Suspense>
    </>
  );
}

export default CreateProductPage;
