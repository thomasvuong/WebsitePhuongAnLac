import { Button } from '@/components/ui/button'

export default function Explainers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              Thông báo quan trọng
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Đại hội Đảng bộ Thành phố Hồ Chí Minh lần thứ I
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Thành ủy TPHCM vừa ban hành quyết định phân bổ đại biểu các Đảng bộ 
              phường, xã, đặc khu và Đảng bộ cấp trên trực tiếp cơ sở dự Đại hội 
              đại biểu Đảng bộ TP HCM lần thứ I, nhiệm kỳ 2025 - 2030.
            </p>

            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8"
            >
              Đọc thông báo đầy đủ
            </Button>
          </div>

          {/* Right content - Image/Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/ExplainerPhoto.png"
                alt="Đại hội Đảng bộ"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-red-600 inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Tin nổi bật
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Kết quả Đại hội và triển khai nghị quyết
                </h3>
                <p className="text-white/90 text-sm">
                  Thông tin chi tiết về các quyết định và định hướng phát triển mới
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Additional announcements */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-sm text-red-600 font-medium mb-2">Hoạt động cộng đồng</div>
            <h3 className="text-lg font-semibold mb-3">Đoàn phường với hoạt động "Nhà vui ngày Tết"</h3>
            <p className="text-gray-600 text-sm">
              Chương trình tổ chức các hoạt động vui xuân, đón Tết cho các gia đình khó khăn và trẻ em.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-sm text-blue-600 font-medium mb-2">Dịch vụ công</div>
            <h3 className="text-lg font-semibold mb-3">Hướng dẫn tiếp cận dịch vụ công trực tuyến</h3>
            <p className="text-gray-600 text-sm">
              Cách thức đăng ký và sử dụng các dịch vụ hành chính công trên nền tảng số.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
