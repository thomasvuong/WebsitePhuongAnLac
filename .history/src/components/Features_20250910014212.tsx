'use client'

import { ArrowRight, Users, Building, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Features() {
  const [currentText1, setCurrentText1] = useState(0)
  const [currentText2, setCurrentText2] = useState(0)
  
  const alternatingTexts1 = [
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

  const alternatingTexts2 = [
    {
      title: "Hội đồng nhân dân",
      subtitle: "Quyền lực nhà nước của nhân dân",
      content: ""
    },
    {
      title: "Hội đồng nhân dân chú trọng giáo dục và an sinh xã hội", 
      subtitle: "Bổ sung thêm trường học ngoài công lập nhằm đáp ứng nhu cầu học tập cho cư dân.",
      content: ""
    }
  ]

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentText1((prev) => (prev + 1) % alternatingTexts1.length)
    }, 3000) // Change text every 3 seconds

    const interval2 = setInterval(() => {
      setCurrentText2((prev) => (prev + 1) % alternatingTexts2.length)
    }, 3000) // Change text every 3 seconds

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
    }
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
            <div className="transition-all duration-500 ease-in-out">
              <h3 className="text-xl font-bold mb-2">{alternatingTexts1[currentText1].title}</h3>
              <p className="text-gray-600 mb-2 font-semibold">{alternatingTexts1[currentText1].subtitle}</p>
              {alternatingTexts1[currentText1].content && (
                <p className="text-gray-600 mb-4">{alternatingTexts1[currentText1].content}</p>
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
            <div className="transition-all duration-500 ease-in-out">
              <h3 className="text-xl font-bold mb-2">{alternatingTexts2[currentText2].title}</h3>
              <p className="text-gray-600 mb-2 font-semibold">{alternatingTexts2[currentText2].subtitle}</p>
              {alternatingTexts2[currentText2].content && (
                <p className="text-gray-600 mb-4">{alternatingTexts2[currentText2].content}</p>
              )}
            </div>
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
