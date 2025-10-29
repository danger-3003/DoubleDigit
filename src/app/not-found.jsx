import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container>
      <div className='h-[calc(100vh-360px)] flex items-center justify-center flex-col w-full'>
        <h1 className="text-[20vw] md:text-[150px] font-bold leading-tight text-primary">OOPS!</h1>
        <h2 className='font-semibold text-xl md:text-3xl mt-5'>Page Not Found</h2>
        <Link href="/">Return <span className='text-primary'>Home</span></Link>
      </div>
    </Container>
  )
}