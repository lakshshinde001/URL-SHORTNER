import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react'
import { useSearchParams } from 'react-router-dom'


const Auth = () => {

  const [Searchparam] = useSearchParams();

  return (
    <div className='mt-36 flex flex-col items-center gap-10'>
      <h1 className='text-3xl md:text-5xl font-extrabold'>
          {
            Searchparam.get('createNew') ? 'Hold On... Lets Login First' : 'Login/Sign-up'
          }
          
      </h1>
      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Sign-up">Sign-Up</TabsTrigger>
        </TabsList>
        <TabsContent value="Login"> <Login/> </TabsContent>
        <TabsContent value="Sign-up"> <SignUp/> </TabsContent>
      </Tabs>

    </div>
  )
}

export default Auth