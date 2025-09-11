'use client'

import { ArrowRight, Users, Building, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Features() {
  const [currentText, setCurrentText] = useState(0)
  
  const alternatingTexts = [
    {
      title: "Hoạt động Đảng bộ",
      subtitle: "Lãnh đạo và chỉ đạo phát triển",
      content: ""
    },
    {
      title: "Đảng bộ phường An Lạc định hướng phát triển khu Tây TP.HCM", 
      subtitle: "Tập trung hoàn thiện hạ tầng và hình thành \"phố thương mại – logistics\" tại cửa ngõ miền Tây.",
      content: ""
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % alternatingTexts.length)
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])
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
            <div className="h-48 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/card1.png" 
                alt="Hoạt động Đảng bộ" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{alternatingTexts[currentText].title}</h3>
            <div className="transition-all duration-500 ease-in-out">
              <p className="text-gray-600 mb-2 font-semibold">{alternatingTexts[currentText].subtitle}</p>
              {alternatingTexts[currentText].content && (
                <p className="text-gray-600 mb-4">{alternatingTexts[currentText].content}</p>
              )}
            </div>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="h-48 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/card2.png" 
                alt="Hội đồng nhân dân" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-normal mb-2">Hội đồng nhân dân</h3>
            <p className="text-gray-600 mb-2 font-semibold">Hội đồng nhân dân chú trọng giáo dục và an sinh xã hội</p>
            <p className="text-gray-600 mb-4">Bổ sung thêm trường học ngoài công lập nhằm đáp ứng nhu cầu học tập cho cư dân.</p>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="h-48 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/card3.png" 
                alt="Ủy ban nhân dân" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Ủy ban nhân dân</h3>
            <p className="text-gray-600 mb-2 font-semibold">UBND phường An Lạc đẩy mạnh chính quyền số</p>
            <p className="text-gray-600 mb-4">Hoàn thành ≥90% dịch vụ công trực tuyến hướng tới mô hình "phường thông minh".</p>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
