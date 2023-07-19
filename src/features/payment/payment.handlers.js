require('dotenv').config();
const express = require('express');
const { catchAsync } = require('../../utils');
const stripe = require('stripe');

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

module.exports = {
  handleSetUpPaymentIntent: catchAsync(async (req, res, next) => {
    const { amount } = req.body;
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: +amount,
      currency: 'vnd',
      payment_method_types: ['card'],
    });
    return res.send(paymentIntent);
  }),
};
