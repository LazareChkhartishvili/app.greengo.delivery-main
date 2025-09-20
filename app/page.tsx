import { LoginForm } from '@/components/login/login-form';
import { BackgroundPattern } from '@/components/ui/background-pattern';

export default function Home() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <BackgroundPattern />

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm />
            <div className="mt-5 text-center text-sm">
              © 2025 |{' '}
              <a href="https://stafilo.ge" className="underline-offset-4">
                Stafilo • Software Development
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        {/* <img
          src="https://ui.shadcn.com/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
        <video
          // poster="/images/poster_sq.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 z-0 size-full object-cover"
        >
          <source src="./st1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
