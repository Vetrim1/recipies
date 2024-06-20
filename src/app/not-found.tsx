import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
   <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
      <div className="text-center">
        <div className="w-40 h-40 mx-auto mb-5 bg-salmon-50">
          <Image
            className="w-full h-full object-contain rounded-full"
            src="/next.svg"
            alt='404'
            width={300} height={300}/>
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Page Not Found
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="flex items-center justify-center mt-6">
          <Link
            href="/"
            className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Back to homepage
            </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NotFound;