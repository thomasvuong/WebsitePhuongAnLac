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
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-white/90">
                  2025
                </div>
                <h2 className="text-2xl font-semibold">
                  HỖ TRỢ DOANH NGHIỆP CHUYỂN ĐỔI SỐ, THAM GIA THƯƠNG MẠI ĐIỆN TỬ
                </h2>
                <div className="pt-4">
                  <img
                    src="/heroRight.png"
                    alt="Hero Right Image"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
