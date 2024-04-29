import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripePay from './StripePay'

const stripePromise = loadStripe(
  'pk_test_51P8gt6SG7jS7VYwsVYH8N5Q4GOIlGAfKZuLrHEzdEuq7pTk59wKcKGP2YGr1yNoMyrZSwr83LtbOvQzOVyqB5G6500NfgQ3kwu'
)

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripePay />
    </Elements>
  )
}

export default StripeContainer
