import React from 'react'

const ContactUs = () => {
    return (
        <div id="contact-us" className="flex flex-col items-center justify-center text-center space-y-2 mt-10 pb-0">
            <h1 className="md:text-4xl text-primary text-2xl font-semibold">Contact Us</h1>
            <p className="md:text-lg text-gray-500/70 pb-8">
                Have a question or want to get in touch? Fill out the form below.
            </p>
            <form className="flex flex-col items-center justify-center max-w-2xl w-full space-y-4">
                <input
                    className="border border-gray-300 rounded-md h-12 outline-none w-full px-3 text-gray-500"
                    type="text"
                    placeholder="Your Name"
                    required
                />
                <input
                    className="border border-gray-300 rounded-md h-12 outline-none w-full px-3 text-gray-500"
                    type="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    className="border border-gray-300 rounded-md h-32 outline-none w-full px-3 py-2 text-gray-500 resize-none"
                    placeholder="Your Message"
                    required
                ></textarea>
                <button type="submit" className="md:px-12 px-8 h-12 text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactUs