import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>

        <div className='wrapper flex items-center justify-between'>

        <Link href={'/'} className='w-36'>
            <h1 className='h3-bold text-primary'>SLGTech</h1>
               
            </Link>

            <SignedIn>
                <nav className='md:flex-between hidden max-w-xs'>
                    <NavItems/>
                </nav>
            </SignedIn>

            <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>


        </div>

    </header>
  )
}

export default Header