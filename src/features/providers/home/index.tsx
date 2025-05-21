import { FC } from "react";
import { CheckIcon, DangerIcon, EyeIcon, InfoIcon } from "@/components/Icons";
import Button from "@/components/ui/Button";

type StatusType = "warning" | "success" | "failed";

interface StatusBoxProps {
  status: StatusType;
  message: string;
}

const StatusBox: FC<StatusBoxProps> = ({ status, message }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "warning":
        return {
          bg: "bg-warning-100",
          border: "border-warning-200",
          text: "text-warning-500",
          Icon: (
            <InfoIcon width={18} height={18} className="text-warning-500" />
          ),
        };
      case "success":
        return {
          bg: "bg-success-100",
          border: "border-success-200",
          text: "text-success-500",
          Icon: (
            <CheckIcon width={18} height={18} className="text-success-500" />
          ),
        };
      case "failed":
        return {
          bg: "bg-error-100",
          border: "border-error-200",
          text: "text-error-500",
          Icon: (
            <DangerIcon width={18} height={18} className="text-error-500" />
          ),
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div
      className={`w-full flex justify-between items-center gap-2 p-4 border rounded-lg shadow-lg ${styles?.bg} ${styles?.border}`}
    >
      <div className="flex items-center gap-2">
        {styles?.Icon}
        <span className={`font-medium ${styles?.text} text-sm`}>{message}</span>
      </div>

      {status === "failed" && (
        <div className="flex items-center gap-2">
          <Button variant="filled" size="sm">
            تکمیل اطلاعات
          </Button>
        </div>
      )}
    </div>
  );
};

interface StatsBoxProps {
  todaySales: number;
  yesterdaySales: number;
  todayRevenue: number;
  yesterdayRevenue: number;
}

const StatsBox: FC<StatsBoxProps> = ({
  todaySales,
  yesterdaySales,
  todayRevenue,
  yesterdayRevenue,
}) => {
  return (
    <div className="w-full p-6 bg-white border border-muted-100 rounded-2xl">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-text-500">تعداد فروش امروز</span>
          <span className="font-bold text-text-400">{todaySales}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-500">تعداد فروش دیروز</span>
          <span className="font-bold text-text-400">{yesterdaySales}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-500">مجموع درآمد امروز</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-text-400">ریال</span>
            <span className="font-bold text-text-400">
              {todayRevenue.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-500">مجموع درآمد دیروز</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-text-400">ریال</span>
            <span className="font-bold text-text-400">
              {yesterdayRevenue.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GatewayInfoProps {
  apiKey?: string;
  swaggerAddress?: string;
}

const GatewayInfo: FC<GatewayInfoProps> = ({
  apiKey = "rtre-234234kv-sdfsf",
  swaggerAddress = "www.test.com",
}) => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold mb-5 text-right ">
        اطلاعات درگاه اعتباری
      </h3>
      <div className="w-full bg-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 border-b border-muted-200">
          <div className="p-4 text-start text-sm text-muted-50">API Key</div>
          <div className="p-4 text-start text-sm text-muted-50">
            Swagger Address
          </div>
          <div className="p-4 text-start text-sm text-muted-50">Document</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="p-4 text-start text-text-900 text-md">{apiKey}</div>
          <div className="p-4 text-start text-md">
            <a
              href={swaggerAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-900 hover:text-primary-500 transition-colors"
            >
              {swaggerAddress}
            </a>
          </div>

          <div className="p-4 flex justify-start items-center text-md">
            <EyeIcon width={20} height={20} className="text-primary-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface HomeViewProps {
  status?: StatusType;
  stats?: StatsBoxProps;
  gatewayInfo?: GatewayInfoProps;
}

const HomeView: FC<HomeViewProps> = ({
  status = "failed",
  stats,
  gatewayInfo,
}) => {
  const defaultStats = {
    todaySales: 0,
    yesterdaySales: 0,
    todayRevenue: 0,
    yesterdayRevenue: 0,
  };

  const statusMessages = {
    warning: "درخواست شما در حال بررسی می‌باشد",
    success: "فروشگاه شما با موفقیت ثبت شد",
    failed: "ثبت فروشگاه به علت ناقص بودن اطلاعات رد شده است",
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <StatusBox status={status} message={statusMessages[status]} />
      <StatsBox {...(stats || defaultStats)} />
      {status === "success" && gatewayInfo && <GatewayInfo {...gatewayInfo} />}
      <GatewayInfo {...gatewayInfo} />
    </div>
  );
};

export default HomeView;
