// Danh sách phương án giảm phát thải có thể thực hiện
// Dữ liệu mô phỏng cho Action Simulator

export interface ActionOption {
  id: string;
  name: string;
  description: string;
  category: "energy" | "transport" | "process" | "waste";
  scope: "Scope 1" | "Scope 2" | "Scope 3";
  capex: number; // triệu VND
  annualOpexSavings: number; // triệu VND/năm
  co2ReductionTpa: number; // tCO2e/năm
  paybackYears: number;
  difficulty: "easy" | "medium" | "hard";
  tag?: string;
}

export const actionOptions: ActionOption[] = [
  {
    id: "solar-rooftop",
    name: "Lắp điện mặt trời áp mái",
    description:
      "Hệ thống solar rooftop 100kWp, đủ cung cấp ~30% nhu cầu điện sản xuất, giảm phụ thuộc điện lưới.",
    category: "energy",
    scope: "Scope 2",
    capex: 1200,
    annualOpexSavings: 280,
    co2ReductionTpa: 78,
    paybackYears: 4.3,
    difficulty: "medium",
    tag: "Phổ biến nhất",
  },
  {
    id: "inverter-compressor",
    name: "Nâng cấp máy nén khí Inverter",
    description:
      "Thay 3 máy nén khí thông thường bằng loại Inverter biến tần, tiết kiệm 35-40% điện năng tiêu thụ hệ thống khí nén.",
    category: "energy",
    scope: "Scope 2",
    capex: 380,
    annualOpexSavings: 120,
    co2ReductionTpa: 42,
    paybackYears: 3.2,
    difficulty: "easy",
    tag: "ROI tốt nhất",
  },
  {
    id: "led-lighting",
    name: "Thay đèn LED toàn bộ nhà xưởng",
    description:
      "Thay 200 bóng huỳnh quang T8 bằng LED tương đương, tiết kiệm 60% điện chiếu sáng.",
    category: "energy",
    scope: "Scope 2",
    capex: 85,
    annualOpexSavings: 42,
    co2ReductionTpa: 14,
    paybackYears: 2.0,
    difficulty: "easy",
  },
  {
    id: "ev-delivery",
    name: "Chuyển đổi xe giao hàng sang xe điện",
    description:
      "Thay 2 xe tải nhỏ diesel bằng xe điện, giảm phát thải Scope 1 và vận chuyển Scope 3.",
    category: "transport",
    scope: "Scope 1",
    capex: 1600,
    annualOpexSavings: 190,
    co2ReductionTpa: 52,
    paybackYears: 8.4,
    difficulty: "hard",
  },
  {
    id: "heat-recovery",
    name: "Hệ thống thu hồi nhiệt lò ép",
    description:
      "Tái sử dụng nhiệt thải từ lò ép nhựa để sấy nguyên liệu, giảm 40% lượng gas cho lò sấy.",
    category: "process",
    scope: "Scope 1",
    capex: 560,
    annualOpexSavings: 145,
    co2ReductionTpa: 28,
    paybackYears: 3.9,
    difficulty: "medium",
  },
  {
    id: "waste-sorting",
    name: "Phân loại & tái chế phế liệu nhựa tại nguồn",
    description:
      "Hệ thống phân loại phế liệu nhựa tại xưởng, giảm 70% lượng nhựa đưa ra bãi rác.",
    category: "waste",
    scope: "Scope 3",
    capex: 120,
    annualOpexSavings: 65,
    co2ReductionTpa: 11,
    paybackYears: 1.8,
    difficulty: "easy",
    tag: "Hoàn vốn nhanh",
  },
  {
    id: "bms",
    name: "Hệ thống BMS quản lý năng lượng",
    description:
      "Hệ thống Building/Factory Management System giám sát và tối ưu tự động mức tiêu thụ điện toàn nhà máy.",
    category: "energy",
    scope: "Scope 2",
    capex: 450,
    annualOpexSavings: 160,
    co2ReductionTpa: 55,
    paybackYears: 2.8,
    difficulty: "medium",
  },
  {
    id: "natural-gas-lpg",
    name: "Chuyển sang gas thiên nhiên thay LPG",
    description:
      "Thay LPG bằng khí thiên nhiên (CNG) cho lò ép, giảm hệ số phát thải Scope 1 khoảng 25%.",
    category: "process",
    scope: "Scope 1",
    capex: 280,
    annualOpexSavings: 88,
    co2ReductionTpa: 17,
    paybackYears: 3.2,
    difficulty: "medium",
  },
];

// Tính toán payback và NPV
export function calculatePayback(capex: number, annualSavings: number): number {
  return capex / annualSavings;
}

export function calculateNPV(
  capex: number,
  annualSavings: number,
  years: number = 5,
  discountRate: number = 0.08
): number {
  let npv = -capex;
  for (let t = 1; t <= years; t++) {
    npv += annualSavings / Math.pow(1 + discountRate, t);
  }
  return npv;
}

export function filterByBudget(
  options: ActionOption[],
  budget: number
): ActionOption[] {
  return options.filter((o) => o.capex <= budget);
}

export function rankByROI(options: ActionOption[]): ActionOption[] {
  return [...options].sort(
    (a, b) =>
      b.annualOpexSavings / b.capex - a.annualOpexSavings / a.capex
  );
}

export function rankByCO2(options: ActionOption[]): ActionOption[] {
  return [...options].sort((a, b) => b.co2ReductionTpa - a.co2ReductionTpa);
}

export function rankByPayback(options: ActionOption[]): ActionOption[] {
  return [...options].sort((a, b) => a.paybackYears - b.paybackYears);
}
