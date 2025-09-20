import PageHeader from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import { routes } from '@/routes';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import EditCreateForm from '@/components/dashboard/settings/role/edit-create-form';
import { SessionRootI } from '@/types';
const pageHeader = {
  title: 'როლები',
  breadcrumb: [
    {
      href: routes.dashboard.main,
      name: 'მთავარი',
    },
    {
      href: routes.role.role,
      name: 'ყველა როლი',
    },
  ],
};

async function CreatePage() {
  const session = (await getServerSession(authOptions)) as SessionRootI;
  const token = session?.user?.data?.token;

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3">
          <Link href={routes.role.createRole} className="w-full lg:w-auto">
            <Button>როლის დამატება</Button>
          </Link>
        </div>
      </PageHeader>
      <Suspense fallback={<p>...Loading</p>}>
        <EditCreateForm token={token} />
      </Suspense>
    </>
  );
}

export default CreatePage;
