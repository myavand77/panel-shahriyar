import { MoneyIcon } from "@/components/Icons";

export function FinancialSection() {
  const financialStats = [
    {
      title: "مجموع فروش کل",
      amount: "12,755,250,000",
    },
    {
      title: "مجموع مبلغ فروش اعتباری",
      amount: "12,755,250,000",
    },
    {
      title: "مجموع مبلغ فروش نقدی",
      amount: "12,755,250,000",
    },
    {
      title: "مجموع مبلغ اقساط",
      amount: "12,755,250,000",
    },
    {
      title: "مجموع مبلغ وصول شده",
      amount: "12,755,250,000",
    },
    {
      title: "مجموع مبلغ وصول نشده",
      amount: "12,755,250,000",
    },
    {
      title: "مجموع مبلغ سررسید نشده",
      amount: "12,755,250,000",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {financialStats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 flex justify-between items-center shadow-sm"
        >
          <div className="bg-blue-50 w-[60px] h-[60px] rounded-lg flex items-center justify-center">
            <MoneyIcon width={24} height={24} className="text-success-50" />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-gray-600 text-sm mb-2">{stat.title}</h3>
            <div className="flex items-center gap-1 text-info-500">
              <span className="font-medium">{stat.amount}</span>
              <span>ریال</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
