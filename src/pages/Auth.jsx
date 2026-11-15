
import './Auth.css'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Auth() {
  const location = useLocation()
  const navigate = useNavigate()

  const isSignup = location.pathname === '/signup'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)
    setMessage('')
    setError('')

    try {
      if (isSignup) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin
          }
        })

        if (error) throw error

        if (data.session) {
          navigate('/')
        } else {
          setMessage('Account created! Please check your email to verify your account.')
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        })

        if (error) throw error

        navigate('/')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>{isSignup ? 'Create Account' : 'Welcome Back'}</h1>

        <p>
          {isSignup
            ? 'Join EasyService and start your journey.'
            : 'Login to your EasyService account.'}
        </p>

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            minLength={6}
            required
          />

          <button type="submit" disabled={loading}>
            {loading
              ? 'Please wait...'
              : isSignup
                ? 'Create Account'
                : 'Login'}
          </button>

        </form>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <p>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          {' '}
          <Link to={isSignup ? '/login' : '/signup'}>
            {isSignup ? 'Login' : 'Sign Up'}
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Auth
