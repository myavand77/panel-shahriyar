import HomeView from "@/features/providers/home";
import PageLayout from "@/components/layout/pageLayout";

export default function HomePage() {
  return (
    <PageLayout title="وضعیت فروشگاه">
      <HomeView />
    </PageLayout>
  );
}
