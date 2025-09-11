import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Header() {
  return (
    <>
      {/* Top banner */}
      <div className="bg-blue-50 border-b border-blue-100 px-4 py-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-blue-700">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <span className="font-medium">Một trang web của Chính phủ Việt Nam</span>
            </div>
            <button className="text-blue-600 hover:text-blue-800 underline text-xs">
              Cách nhận biết
            </button>
          </div>
        </div>
      </div>

      {/* Security notice */}
      <div className="bg-gray-50 border-b px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-3">
            <button className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">
                Cán bộ chính phủ sẽ không bao giờ yêu cầu bạn chuyển tiền hoặc tiết lộ thông tin đăng nhập ngân hàng qua điện thoại.
              </h3>
              <p className="text-gray-600 text-sm">
                Gọi đường dây nóng 24/7 tại 1799 nếu bạn không chắc chắn về điều gì đó có phải là lừa đảo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b shadow-sm px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo and title */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://ext.same-assets.com/4131792006/439561661.png"
                  alt="Coat of Arms of Vietnam"
                  className="w-12 h-12"
                />
                <div>
                  <img
                    src="https://datafiles.chinhphu.vn/cpp/1/Logo/quoc-huy.png"
                    alt="phuong.gov.vn logo"
                    className="h-8 w-auto"
                  />
                  <p className="text-sm text-gray-600">UBND Phường An Lạc A</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Tin tức</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Hoạt động Đảng bộ</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Hội đồng nhân dân</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Dịch vụ công</a>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Tìm kiếm..."
                  className="w-64 pr-10"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
