export function Banner() {
  return (
    <div className="relative w-full bg-[url('/images/hero.jpg')] bg-cover bg-center py-8 h-">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Welcome to Our Store
            </h2>
            <p className="mt-2 text-blue-100">
              Discover our latest collection of luxury bracelets
            </p>
          </div>
          <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}