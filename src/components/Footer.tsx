import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">phuong.gov.vn</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Tin tức</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hoạt động Đảng bộ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hội đồng nhân dân</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ủy ban nhân dân</a></li>
              <li><a href="https://studio--studio-7574048319-6ecfd.us-central1.hosted.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dịch vụ công</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-red-400" />
                <div>
                  <p className="text-sm">Địa chỉ:</p>
                  <p className="text-sm">01 Đường số 7B, P. An Lạc A, Q. Bình Tân</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-sm">Điện thoại: (028) 36.670.174</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-sm">Email: anlaca.binhtan@tphcm.gov.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thời gian làm việc</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div>
                <p className="font-medium">Thứ 2 đến thứ 6:</p>
                <p>7:30 - 11:30</p>
                <p>13:00 - 17:00</p>
              </div>
              <div className="mt-3">
                <p className="font-medium">Thứ 7:</p>
                <p>7:30 - 11:30</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết website</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Đảng Cộng sản Việt Nam
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Cổng thông tin điện tử Quốc hội
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Cổng thông tin điện tử Chính phủ
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Trang thông tin điện tử TP. Hồ Chí Minh
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Ban Tuyên giáo Quận ủy Bình Tân
              </a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 UBND Phường An Lạc A, cập nhật lần cuối 9 tháng 9 2025
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Báo cáo lỗ hổng bảo mật</a>
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Được xây dựng bởi</span>
              <div className="flex items-center gap-2">
                <a href="https://trituesonhantao.com/" target="_blank" rel="noopener noreferrer" aria-label="AIDIGI Website">
                  <img
                    src="/AIDIGI_LOGO.png"
                    alt="AIDIGI Logo"
                    className="w-8 h-8"
                  />
                </a>
                <span>Chính phủ điện tử Việt Nam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
