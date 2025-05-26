import { TabFilterProps } from "../Table/types";

const TabFilter: React.FC<TabFilterProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex items-center gap-2 p-1 bg-neutral-50 rounded-lg w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-200 cursor-pointer
            ${
              activeTab === tab.id
                ? "bg-white text-text-500"
                : "text-muted-50 hover:text-text-500"
            }`}
          style={{
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "1.4285714285714286em",
          }}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span
              className={`text-xs rounded-full ${
                activeTab === tab.id ? "text-text-500" : "text-muted-50"
              }`}
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};
export default TabFilter;
