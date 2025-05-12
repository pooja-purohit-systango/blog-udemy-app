import ContactForm from '@/components/contact/ContactForm'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Get in Touch
        </h1>
        <h2 className="text-xl text-center text-gray-600 mb-6">
          Feel free to message
        </h2>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
