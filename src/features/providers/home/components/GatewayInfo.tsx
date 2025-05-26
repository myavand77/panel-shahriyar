import { DocumentIcon } from "@/components/Icons";
import { FC } from "react";
import { GatewayInfoProps } from "../types";

export const GatewayInfo: FC<GatewayInfoProps> = ({
  apiKey = "rtre-234234kv-sdfsf",
  swaggerAddress = "www.test.com",
}) => {
  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 border-b border-muted-100">
          <div className="p-4 text-start text-sm text-muted-50">
            آدرس وب‌سرویس
          </div>
          <div className="p-4 text-start text-sm text-muted-50">API Key</div>
          <div className="p-4 text-start text-sm text-muted-50">
            مستندات فنی
          </div>
        </div>
        <div className="grid grid-cols-3">
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
          <div className="p-4 text-start text-text-900 text-md">{apiKey}</div>
          <div className="p-4 flex justify-start items-center text-md">
            <DocumentIcon width={20} height={20} className="text-primary-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
