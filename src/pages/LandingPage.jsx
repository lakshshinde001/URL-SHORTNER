import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const [longUrl, setLongUrl] = useState('')
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if(longUrl) navigate(`/auth?createNew=${longUrl}`)
  }



  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold'>
        The Only URL Shortner <br/> you&rsquo;ll ever Need! 🫡
      </h2>
      <form 
        onSubmit={handleShorten}
      className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
        <Input
          type="url"
          placeholder="Enter a Loooong URL"
          className='h-full flex-1 px-4 py-4'
          value ={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button className=' h-full' > Shortn!! </Button>
      </form>
      <img
        src="/landing.jpeg" alt='banner' className='w-full my-11 md:px-11'
      />

      <Accordion type="multiple" collapsible className='w-full my-11 md:px-11'>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}

export default LandingPage