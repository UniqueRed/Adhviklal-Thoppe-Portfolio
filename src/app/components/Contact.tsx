"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, message })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Contact
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto glassmorphism p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
              Message
            </label>
            <motion.textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              rows={4}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 flex items-center justify-center glow-on-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact