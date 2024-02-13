import React from 'react'

function Contact() {
    return (
        <div>

            <form class="mb-6">
                <div class="mb-6 max-sm:">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Your email</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4 dark:text-white dark:focus:ring-blue-50 dark:focus:border-blue-50" placeholder="Your message..."></textarea>
                </div>
                <div class="mb-6">
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Subject</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4 dark:text-white dark:focus:ring-blue-50 dark:focus:border-blue-50" placeholder="Your message..."></textarea>

                </div>
                <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
            </form>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <a href="#" class="hover:underline">info@company.com</a>
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <a href="#" class="hover:underline">212-456-7890</a>
            </p>


        </div>
    )
}

export default Contact
