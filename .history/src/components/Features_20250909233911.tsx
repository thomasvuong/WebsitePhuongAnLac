import { ArrowRight, Users, Building, Calendar } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hoạt động chính</h2>
          <p className="text-lg text-gray-600">
            Cập nhật thông tin về các hoạt động, chính sách và sáng kiến quan trọng của chính quyền địa phương.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="h-48 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
              <Users className="w-16 h-16 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hoạt động Đảng bộ</h3>
            <p className="text-gray-600 mb-2 font-semibold">Đảng bộ phường An Lạc định hướng phát triển khu Tây TP.HCM</p>
            <p className="text-gray-600 mb-4">Tập trung hoàn thiện hạ tầng và hình thành "phố thương mại – logistics" tại cửa ngõ miền Tây.</p>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="h-48 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <Building className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hội đồng nhân dân</h3>
            <p className="text-gray-600 mb-4">Quyền lực nhà nước của nhân dân</p>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="h-48 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
              <Calendar className="w-16 h-16 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ủy ban nhân dân</h3>
            <p className="text-gray-600 mb-4">Cơ quan hành chính nhà nước</p>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
