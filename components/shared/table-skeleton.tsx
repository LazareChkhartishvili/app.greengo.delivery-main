import { Skeleton } from '@/components/ui/skeleton';

export function TableSkeleton() {
  return (
    <div className="flex flex-col space-y-3 px-2 sm:px-4">
      <div className="space-y-2">
        <Skeleton className="h-10 w-[250px]" />
      </div>
      <Skeleton className="h-[225px] w-full rounded-xl" />
    </div>
  );
}
