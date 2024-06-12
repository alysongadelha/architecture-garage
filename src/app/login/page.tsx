'use client'
import { Container } from '@/components/container/Container'
import React, { useEffect, useState } from 'react'

type loginResponse = {
  authorized: boolean
  message: string
  data?: perfilResponse
}

type perfilResponse = {
  autorizado: boolean
  usuario: string
}

const LoginPage = () => {
  useEffect(() => {
    const isLoginEnabled = window.localStorage.getItem('loginEnable')
    if (!isLoginEnabled) {
      window.location.href = '/'
      return
    }
    setLoginEnabled(isLoginEnabled)
  }, [])

  const [loginEnabled, setLoginEnabled] = useState<string | null>('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  async function handleClick() {
    const response = await fetch('http://localhost:3236/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })
    const data = (await response.json()) as loginResponse
    if (!data.authorized || !data.data?.autorizado) {
      setUser('Logged off and without token')
      return
    }

    if (data.data?.autorizado) {
      setUser(data.data?.usuario)
      return
    }
  }

  if (!loginEnabled) {
    return null
  }

  return (
    <Container>
      <h1>LoginPage with user {user || 'not logged'}</h1>
      <div className='m-6 flex w-4/12 flex-col gap-2'>
        <label htmlFor='username'>UserName</label>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name='username'
          id='username'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          id='password'
        />
        <button
          onClick={handleClick}
          className='rounded-md bg-slate-300 hover:bg-slate-500'
        >
          Submit
        </button>
      </div>
    </Container>
  )
}

export default LoginPage
