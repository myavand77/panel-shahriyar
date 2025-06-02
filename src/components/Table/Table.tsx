import { TableProps } from "./types";
import { Pagination } from "./Pagination";
import { TableControls } from "./TableControls";
import Loading from "../ui/Loading";

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  loading,
  onRowClick,
  currentPage,
  totalPages,
  onPageChange,
  controls,
}) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col h-full">
      {controls && <TableControls {...controls} />}
      <div className="overflow-hidden flex flex-col h-full">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 z-10 bg-white">
              <tr className="bg-gray-50">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-4 py-3 text-right text-sm font-medium text-gray-600 border-b border-muted-100"
                    style={{
                      maxWidth: "130px",
                      width: column.width || "130px",
                    }}
                  >
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick?.(row)}
                  className={`border-b border-muted-100 bg-white hover:bg-gray-100 transition-colors ${
                    onRowClick ? "cursor-pointer" : ""
                  }`}
                >
                  {columns.map((column) => (
                    <td
                      key={`${row.id}-${column.key}`}
                      className="px-4 py-3 text-sm text-gray-800"
                      style={{
                        // maxWidth: "130px",
                        width: column.width || "130px",
                      }}
                    >
                      <div
                        className="truncate text-right"
                        title={
                          typeof row[column.key] === "string"
                            ? row[column.key]
                            : undefined
                        }
                      >
                        {row[column.key]}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="sticky bottom-0 bg-white border-t border-muted-100">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};
