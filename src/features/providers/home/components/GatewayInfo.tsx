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
        {/* Header - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 border-b border-muted-100">
          <div className="p-4 text-start text-sm text-muted-50">
            آدرس وب‌سرویس
          </div>
          <div className="p-4 text-start text-sm text-muted-50">API Key</div>
          <div className="p-4 text-start text-sm text-muted-50">
            مستندات فنی
          </div>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Web Service Address */}
          <div className="p-4 border-b md:border-b-0 border-muted-100">
            <div className="md:hidden text-sm text-muted-50 mb-2">آدرس وب‌سرویس</div>
            <a
              href={swaggerAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-900 hover:text-primary-500 transition-colors"
            >
              {swaggerAddress}
            </a>
          </div>
          {/* API Key */}
          <div className="p-4 border-b md:border-b-0 border-muted-100">
            <div className="md:hidden text-sm text-muted-50 mb-2">API Key</div>
            <div className="text-text-900">{apiKey}</div>
          </div>
          {/* Technical Documentation */}
          <div className="p-4">
            <div className="md:hidden text-sm text-muted-50 mb-2">مستندات فنی</div>
            <div className="flex justify-start items-center">
              <DocumentIcon width={20} height={20} className="text-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
