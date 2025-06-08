
import bg1 from "@/assets/images/BG3.png";

export default function GuidanceSection() {
  return (
    <section
      className="relative w-full min-h-[600px] flex items-center justify-center px-8 py-12"
      style={{
        backgroundImage: `url(${bg1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-[1200px] w-full flex flex-col lg:flex-row gap-8 items-center justify-between">
        {/* Left: Text & Form */}
        <div className="flex-1 max-w-[600px] text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#FF6B35]">
            Need guidance?
            <br />
            <span className="text-[#FF6B35]">Were here to help.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 text-white">
            From admission to payment plans to course recommendations, we ll
            point you in the right direction.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-white text-lg">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="What is your first name?"
                  className="w-full rounded-md bg-[#333]/80 text-white px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-white text-lg">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="What is your last name?"
                  className="w-full rounded-md bg-[#333]/80 text-white px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-white text-lg">Email</label>
              <input
                type="email"
                placeholder="We will contact you at this email"
                className="w-full rounded-md bg-[#333]/80 text-white px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              />
            </div>
          </form>
        </div>
        {/* Right: Placeholder Rectangle */}
        <div className="flex-1 hidden items-center justify-center w-full min-h-[350px] h-[350px] lg:h-[420px] bg-[#555]/80 rounded-3xl max-w-[600px]  lg:flex">
          {/* Placeholder for future content or illustration */}
        </div>
      </div>
    </section>
  );
}
