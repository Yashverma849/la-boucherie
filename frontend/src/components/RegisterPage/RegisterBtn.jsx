export default function RegisterBtn({ submit }) {
  return (
    <>
      <div className="mt-4 flex items-center">
        <button
          onClick={submit} // Ensure submit function is called on click
          className="mx-auto py-2 px-6 bg-primary hover:bg-white text-white hover:text-primary border border-primary hover:border hover:border-primary rounded-full"
        >
          Continue
        </button>
      </div>
      <hr className="my-4" />
      <div className="flex items-center pb-2">
        <button className="border flex p-3 px-6 rounded-lg items-center justify-center border-black cursor-pointer space-x-3 mx-auto w-1/2">
          <img src="/google.png" alt="" width={20} height={20} />
          <span className="text-sm font-medium">Continue with Google</span>
        </button>
      </div>
    </>
  );
}
