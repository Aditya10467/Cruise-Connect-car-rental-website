import { stripe } from '../server.js'

const stripePayment = async (req, res) => {
  let { amount, id } = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'INR',
      description: 'Rent a Car',
      payment_method: id,
      confirm: true,
      return_url:'#',
    })
    console.log('Payment', payment)
    res.json({
      message: 'Payment successful',
      success: true,
    })
  } catch (error) {
    console.log('Error', error)
    res.json({
      message: 'Payment failed',
      success: false,
    })
  }
}

export { stripePayment }
