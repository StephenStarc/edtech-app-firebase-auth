export default function SignedIn({email}){

    return (
    <>
    <div className="bg-white">
        <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-26">

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Congrats You Logged In
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            email : {email}
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go Back
              </a>
            </div>
          </div>
        </div>
        </div>
    </>
    )

}