import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { BeatLoader } from 'react-spinners'
import { Button } from './ui/button'
import Error from './Error'
import * as Yup from 'yup';
import useFetch from '@/hooks/useFetch'
import { login } from '@/db/apiAuth'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { urlState } from '@/context'

const Login = () => {
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    email :'',
    password : ''
  })

   const handleInputChange = (e) => {
    const {name, value} = e.target

    setFormData((prevState) => ({
      ...prevState,
      [name] : value,
    }))

   }

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const longUrl = searchParams.get("createNew");

    const {data, error, loading, fn:fnLogin} = useFetch(login, formData);
    const {fetchUser} = urlState();
    useEffect(() => {
      console.log(data);
      if(error === null && data ){
        fetchUser();
        navigate(`/dashboard?${longUrl?`createNew=${longUrl}`:""}`);
      }
     

    }, [data, error])

   const handleLogin  = async () => {
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is Required'),
        password: Yup.string().min(6, "Minimum 6 characters required").required("password is Required")
      })
      await schema.validate(formData, {abortEarly: false})

      await fnLogin();

    } catch (e) {
      const newErrors = {}
      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }

   }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your account if you already have one</CardDescription>
        {error && <Error message={error.message} />}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className='space-y-1'>
          <Input 
            placeholder="Enter Email" 
            type="email" 
            name="email" 
            onChange={handleInputChange}
          />
          {errors.email && <Error message={errors.email} />}
        </div>
        <div className='space-y-1'>
          <Input 
            placeholder="Enter password" 
            type="password" 
            name="password" 
            onChange={handleInputChange}
          />
          {errors.password && <Error message={errors.password} />}
          
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogin} >
          {loading? <BeatLoader size={10} color='#36d7b7' /> : 'Login'}
        </Button>
      </CardFooter>
    </Card>

  )
}

export default Login