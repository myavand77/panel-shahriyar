import PageLayout from "@/components/layout/pageLayout";
import { OrdersView } from "@/features/admin/orders/OrdersView";

export default function OrdersPage() {
  return (
    <PageLayout title="سفارشات">
      <OrdersView />
    </PageLayout>
  );
}
