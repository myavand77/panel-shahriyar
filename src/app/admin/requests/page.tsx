import PageLayout from "@/components/layout/pageLayout";
import { RequestsView } from "@/features/admin/requests/RequestsView";

export default function RequestsPage() {
  return (
    <PageLayout title="درخواست ها">
      <RequestsView />
    </PageLayout>
  );
}
