import { OrdersView } from "@/features/providers/orders";
import PageLayout from "@/components/layout/pageLayout";

export default function OrdersPage() {
  return (
    <PageLayout title="سفارشات">
      <OrdersView />
    </PageLayout>
  );
}
