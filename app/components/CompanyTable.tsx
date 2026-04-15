import { companies } from "@/app/lib/data";

export default function CompanyTable({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left whitespace-nowrap">順位</th>
            <th className="p-3 text-left whitespace-nowrap">業者名</th>
            <th className="p-3 text-left whitespace-nowrap">基本料金</th>
            <th className="p-3 text-left whitespace-nowrap">出張費</th>
            <th className="p-3 text-left whitespace-nowrap">対応時間</th>
            <th className="p-3 text-left whitespace-nowrap">到着時間</th>
            {!compact && <th className="p-3 text-left whitespace-nowrap">保証</th>}
            {!compact && <th className="p-3 text-left whitespace-nowrap">対応エリア</th>}
          </tr>
        </thead>
        <tbody>
          {companies.map((c) => (
            <tr key={c.id} className="border-b border-gray-200 hover:bg-blue-50 transition">
              <td className="p-3">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-xs ${
                  c.rank === 1 ? "bg-yellow-500" : c.rank === 2 ? "bg-gray-400" : c.rank === 3 ? "bg-amber-600" : "bg-gray-300"
                }`}>
                  {c.rank}
                </span>
              </td>
              <td className="p-3 font-bold whitespace-nowrap">{c.name}</td>
              <td className="p-3 whitespace-nowrap text-accent font-bold">{c.basePrice}</td>
              <td className="p-3 whitespace-nowrap">{c.dispatchFee}</td>
              <td className="p-3 whitespace-nowrap">{c.availableHours}</td>
              <td className="p-3 whitespace-nowrap">{c.responseTime}</td>
              {!compact && <td className="p-3 whitespace-nowrap">{c.warranty}</td>}
              {!compact && <td className="p-3 whitespace-nowrap">{c.areas}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
