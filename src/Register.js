import React, { useState } from 'react'

export default function Register() {
    //1.states
    const [username, setUsername] = useState('A')
    const [email, setEmail] = useState('B@gmail.com')
    const [password, setPassword] = useState('C')
    //localhost:1337/auth/local/register
  return (
      <form>
          <input type ="text" name="username" value= {username}/><br/>
          <input type ="email" name="email" value={email} /><br/>
          <input type ="password" name="password" value={password} /><br/>
          <input type ="submit" name="submit" /><br/>
      </form>
  )
}
