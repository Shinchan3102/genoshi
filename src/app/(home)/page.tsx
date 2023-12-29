import Image from 'next/image'
import PrincingSection from './PrincingSection'

export default function Home() {
  return (
    <div className='flex-1 flex-col container'>

      {/* heading section  */}
      <section className='flex flex-col gap-6 items-center justify-center h-[400px]'>
        <h1 className='font-bold text-5xl tracking-wide'>
          Fueling Your Growth Journey
        </h1>
        <h4 className='text-xl text-muted-foreground'>
          Explore Tailored Plans to Propel Your Success - Choose, Thrive, Succeed
        </h4>
      </section>

      {/* pricing section  */}
      <PrincingSection />
    </div>
  )
}
