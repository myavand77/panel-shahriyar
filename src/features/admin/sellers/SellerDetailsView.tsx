"use client";

import { useState } from "react";
import { GeneralInfoSection } from "./components/GeneralInfoSection";
import { OrdersSection } from "./components/OrdersSection";
import { FinancialSection } from "./components/FinancialSection";
import { SortOrder, TableData } from "@/components/Table/types";

const tabs = [
  { id: "general", label: "اطلاعات کلی" },
  { id: "orders", label: "سفارشات" },
  { id: "financial", label: "مالی" },
];

// Mock data
const mockSellerData = {
  basicInfo: {
    name: "احسان",
    lastName: "احمدنیا",
    phone: "09124568541",
    email: "sample.mail@gmail.com",
  },
  businessInfo: {
    brand: "سام‌سرویس",
    category: "کالای دیجیتال",
    website: "www.samplewebsite.com",
    webserviceUrl: "8.8.8.8",
    apiKey: "656161612315619",
    nationalId: "19849640964",
    callbackUrl: "125.52.49",
    storeIp: "125.52.49.1",
    province: "تهران",
    city: "تهران",
    address: "تهران، خیابان گاندی جنوبی، کوچه پالیزوانی، پلاک 27، واحد 15",
    postalCode: "56494943419",
  },
};

const orderColumns = [
  { key: "row", title: "ردیف", width: "60px" },
  { key: "orderNumber", title: "شماره سفارش", width: "120px" },
  { key: "buyer", title: "خریدار", width: "120px" },
  { key: "store", title: "فروشگاه", width: "120px" },
  { key: "purchaseDate", title: "تاریخ خرید", width: "120px" },
  { key: "amount", title: "مبلغ سبد (ریال)", width: "120px" },
  { key: "settlementDate", title: "تاریخ تسویه", width: "120px" },
  { key: "status", title: "وضعیت", width: "120px" },
];

const mockOrders = [
  {
    id: 1,
    row: 1,
    orderNumber: "34850441342",
    buyer: "جواد بالی نکر",
    store: "سامسونگ",
    purchaseDate: "1402/09/15",
    amount: "1,200,000,000",
    settlementDate: "1402/09/15",
    status: "ارسال شده",
  },
];

export default function SellerDetailsView() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isEditBasicInfoOpen, setIsEditBasicInfoOpen] = useState(false);
  const [isEditBusinessInfoOpen, setIsEditBusinessInfoOpen] = useState(false);
  const [editBasicInfo, setEditBasicInfo] = useState(mockSellerData.basicInfo);
  const [editBusinessInfo, setEditBusinessInfo] = useState(mockSellerData.businessInfo);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  const handleEditBasicInfo = () => {
    setEditBasicInfo(mockSellerData.basicInfo);
    setIsEditBasicInfoOpen(true);
  };

  const handleEditBusinessInfo = () => {
    setEditBusinessInfo(mockSellerData.businessInfo);
    setIsEditBusinessInfoOpen(true);
  };

  const handleSaveBasicInfo = () => {
    // TODO: Save to API
    console.log("Saving basic info:", editBasicInfo);
    setIsEditBasicInfoOpen(false);
  };

  const handleSaveBusinessInfo = () => {
    // TODO: Save to API
    console.log("Saving business info:", editBusinessInfo);
    setIsEditBusinessInfoOpen(false);
  };

  const handleOrderRowClick = (row: TableData) => {
    console.log("Order clicked:", row);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">جزئیات فروشنده</h1>
      </div>

      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab.id
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "general" && (
        <GeneralInfoSection
          sellerData={mockSellerData}
          isEditBasicInfoOpen={isEditBasicInfoOpen}
          isEditBusinessInfoOpen={isEditBusinessInfoOpen}
          onEditBasicInfo={handleEditBasicInfo}
          onEditBusinessInfo={handleEditBusinessInfo}
          onCloseBasicInfo={() => setIsEditBasicInfoOpen(false)}
          onCloseBusinessInfo={() => setIsEditBusinessInfoOpen(false)}
          onSaveBasicInfo={handleSaveBasicInfo}
          onSaveBusinessInfo={handleSaveBusinessInfo}
          editBasicInfo={editBasicInfo}
          editBusinessInfo={editBusinessInfo}
          onBasicInfoChange={setEditBasicInfo}
          onBusinessInfoChange={setEditBusinessInfo}
        />
      )}
      {activeTab === "orders" && (
        <OrdersSection
          columns={orderColumns}
          data={mockOrders}
          currentPage={currentPage}
          totalPages={8}
          onPageChange={setCurrentPage}
          onRowClick={handleOrderRowClick}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        />
      )}
      {activeTab === "financial" && <FinancialSection />}
    </div>
  );
}