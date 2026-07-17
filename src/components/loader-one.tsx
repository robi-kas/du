export const LoaderOne = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-24 h-24 md:w-32 md:h-32 object-contain mb-6"
      />
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:0ms]" />
        <span className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:150ms]" />
        <span className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  )
}
