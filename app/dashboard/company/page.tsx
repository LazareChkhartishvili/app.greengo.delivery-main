'use client';

import { DataTable } from '@/components/dashboard/company/data-table';
import PageHeader from '@/components/shared/page-header';
import { TableSkeleton } from '@/components/shared/table-skeleton';
import { Button } from '@/components/ui/button';
import { routes } from '@/routes';
import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { api } from '@/services';
import { CompanyIRoot } from '@/types';
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

function RolePage() {
  const { data: session, status } = useSession();
  const [companyData, setCompanyData] = useState<CompanyIRoot | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyData = async () => {
      const userSession = session as any;
      const token = userSession?.user?.data?.token;

      if (token) {
        try {
          const data = await api.services.company.getCompany(token);
          console.log('Company data from API:', data);
          console.log('First company status:', data?.data?.[0]?.status);
          setCompanyData(data);
        } catch (error) {
          console.error('Error fetching company data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    if (status === 'authenticated') {
      fetchCompanyData();
    } else if (status === 'unauthenticated') {
      setLoading(false);
    }
  }, [session, status]);

  if (status === 'loading' || loading) {
    return <TableSkeleton />;
  }

  if (status === 'unauthenticated') {
    return null;
  }

  const userSession = session as any;
  const token = userSession?.user?.data?.token;

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
        <DataTable data={companyData?.data || []} token={token} />
      </Suspense>
    </>
  );
}

export default RolePage;
