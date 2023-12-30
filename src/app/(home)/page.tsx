import Image from 'next/image'
import PrincingSection from './PrincingSection'

export default function Home() {
  return (
    <div className='flex-1 flex-col container'>

      {/* heading section  */}
      <section className='flex flex-col gap-6 items-center justify-center h-[400px]'>
        <h1 className='font-bold sm:text-5xl text-3xl tracking-wide text-gradient w-full text-center'>
          Fueling Your Growth Journey
        </h1>
        <h4 className='md:text-xl text-lg text-muted-foreground'>
          Explore Tailored Plans to Propel Your Success - Choose, Thrive, Succeed
        </h4>
      </section>

      {/* pricing section  */}
      <PrincingSection />
    </div>
  )
}
