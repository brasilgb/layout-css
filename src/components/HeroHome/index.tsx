import React from 'react'

type Props = {}

const HeroHome = (props: Props) => {
  return (
    <section className="bg-gray-50 md:py-12 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="mx-auto max-w-7xl px-4 lg:px-8 flex gap-3 flex-col md:flex-row">
          <div className="md:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 md:text-5xl">
              <span className="block xl:inline">Data to enrich your</span>
              <span className="block text-indigo-600 xl:inline">online business</span>
            </h1>
            <p
              className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg md:max-w-xl md:mx-auto lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>

            <div className="mt-5 md:mt-8 md:flex md:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </div>
              <div className="mt-3 md:mt-0 md:ml-3">
                <a href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Live demo
                </a>
              </div>
            </div>

          </div>


          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img className="h-56 w-full object-cover md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroHome