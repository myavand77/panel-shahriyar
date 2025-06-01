export function FinancialSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">اطلاعات مالی</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">موجودی حساب</h3>
          <p className="text-2xl font-bold text-primary">1,500,000,000 ریال</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">درآمد کل</h3>
          <p className="text-2xl font-bold text-success">5,000,000,000 ریال</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">تعداد تراکنش‌ها</h3>
          <p className="text-2xl font-bold text-info">150</p>
        </div>
      </div>
    </div>
  )
}
