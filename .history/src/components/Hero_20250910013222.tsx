import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Xây dựng cộng đồng
              <br />
              Phường An Lạc A
            </h1>
            <p className="text-xl text-red-100">
              Cùng nhau phát triển và hiện thực hóa các chương trình phục vụ nhân dân
            </p>
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Tìm hiểu thêm
            </Button>
          </div>

          {/* Right content - Campaign visual */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Background image covering the whole right side */}
            <img
              src="/heroRight.png"
              alt="Hero Right Image"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            
            {/* Text content overlapping on top */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center space-y-6 p-8">
              <div className="text-6xl font-bold text-white drop-shadow-lg">
                2025
              </div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white drop-shadow-lg leading-tight">
                HỖ TRỢ DOANH NGHIỆP CHUYỂN ĐỔI SỐ, THAM GIA THƯƠNG MẠI ĐIỆN TỬ
              </h2>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
