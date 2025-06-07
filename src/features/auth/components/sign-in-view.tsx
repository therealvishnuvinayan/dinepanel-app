import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignIn as ClerkSignInForm } from '@clerk/nextjs';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { IconStar } from '@tabler/icons-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage({ stars }: { stars: number }) {
  return (
    <div className='flex h-screen w-full'>
      {/* Left Illustration / Branding Section */}
      <div className='relative hidden w-1/2 flex-col justify-between bg-gradient-to-br from-[#2b215d] to-[#1e1a34] p-10 text-white lg:flex'>
        <div className='flex items-center gap-2 text-xl font-semibold'>
          <Image
            src='/assets/main-logo-dark.png'
            alt='Dinepanel'
            width={160}
            height={45}
          />
        </div>
        <div className='mx-auto'>
          <img
            src='/assets/3d-character.png'
            alt='Login Illustration'
            className='max-w-xs'
          />
        </div>
        <div className='px-4 text-center text-sm leading-relaxed'>
          <p className='mb-2 text-lg font-semibold'>
            Streamline your restaurant operations
          </p>
          <p className='opacity-80'>
            Dinepanel empowers restaurants to manage digital menus, track
            orders, and enhance customer experience — all from one smart
            dashboard.
          </p>
        </div>
      </div>

      {/* Right Auth Form Section */}
      <div className='flex w-full flex-col items-center justify-center lg:w-1/2 px-6 bg-gradient-to-br from-[#f5f0ff] via-white to-[#faf7fe]'>
        <div className='w-full max-w-md space-y-6'>
          <div className='space-y-1 text-center'>
            <h1 className='text-2xl font-bold'>Welcome to Dinepanel 👋</h1>
            <p className='text-muted-foreground'>Please sign in to continue</p>
          </div>
          <ClerkSignInForm
            appearance={{
              elements: {
                formButtonPrimary: 'bg-[#9155fd] hover:bg-[#7a3fef] shadow-md'
              }
            }}
            initialValues={{
              emailAddress: 'your_mail+clerk_test@example.com'
            }}
          />
          <p className='text-muted-foreground text-center text-sm'>
            By signing in, you agree to our{' '}
            <Link href='/terms' className='text-primary underline'>
              Terms
            </Link>{' '}
            and{' '}
            <Link href='/privacy' className='text-primary underline'>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
