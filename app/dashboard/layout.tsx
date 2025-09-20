'use client';

import { AppSidebar } from '@/components/dashboard/layout/app-sidebar';
import { SiteHeader } from '@/components/dashboard/layout/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useSession } from 'next-auth/react';
import { api } from '@/services';
import { useEffect, useState } from 'react';
import { SingleUserI } from '@/types';

function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<SingleUserI | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const userSession = session as any;
      if (userSession?.user?.data?.token) {
        try {
          const data = await api.services.users.getSingleUser(
            userSession.user.data.token,
            '1'
          );
          setUserData(data?.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    if (status === 'authenticated') {
      fetchUserData();
    } else if (status === 'unauthenticated') {
      setLoading(false);
    }
  }, [session, status]);

  if (status === 'loading' || loading) {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <SidebarProvider>
      <AppSidebar userData={userData} variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
