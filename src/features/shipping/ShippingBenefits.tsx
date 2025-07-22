import React from 'react';
import { Truck, Headphones, Package, RotateCcw } from 'lucide-react';

const ShippingBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Miễn phí vận chuyển",
      description: "Với hóa đơn từ 1 triệu"
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ CSKH tận tâm sẵn sàng lắng nghe và phục vụ tận tâm"
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Giao hàng nhanh 2h",
      description: "Trong vòng bán kính 10km nội thành TP HCM"
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-primary" />,
      title: "30 ngày đổi trả",
      description: "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển"
    }
  ];

  return (
    <div className=" bg-gray-50 w-full py-8 mt-10">
      <div className=" max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full">
                  {benefit.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingBenefits;