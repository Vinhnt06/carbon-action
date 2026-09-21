// Mock emissions data cho "Công ty TNHH Nhựa Bình Dương"
// Ngành nhựa/bao bì — dữ liệu mô phỏng cho demo

export const companyInfo = {
  name: "Công ty TNHH Nhựa Bình Dương",
  industry: "Sản xuất nhựa & bao bì",
  period: "Năm 2025",
  reportDate: "Tháng 9/2025",
  baseline: 650, // tCO2e/năm (năm 2023)
};

// Monthly emissions (tCO2e)
export const monthlyEmissions = [
  { month: "T1", total: 52, electricity: 28, diesel: 14, gas: 6, transport: 3, waste: 1 },
  { month: "T2", total: 47, electricity: 25, diesel: 12, gas: 6, transport: 3, waste: 1 },
  { month: "T3", total: 55, electricity: 30, diesel: 14, gas: 7, transport: 3, waste: 1 },
  { month: "T4", total: 58, electricity: 32, diesel: 15, gas: 7, transport: 3, waste: 1 },
  { month: "T5", total: 61, electricity: 34, diesel: 16, gas: 7, transport: 3, waste: 1 },
  { month: "T6", total: 54, electricity: 29, diesel: 14, gas: 7, transport: 3, waste: 1 },
  { month: "T7", total: 49, electricity: 26, diesel: 13, gas: 6, transport: 3, waste: 1 },
  { month: "T8", total: 53, electricity: 28, diesel: 14, gas: 7, transport: 3, waste: 1 },
  { month: "T9", total: 50, electricity: 27, diesel: 13, gas: 6, transport: 3, waste: 1 },
  { month: "T10", total: 56, electricity: 30, diesel: 15, gas: 7, transport: 3, waste: 1 },
  { month: "T11", total: 59, electricity: 32, diesel: 15, gas: 8, transport: 3, waste: 1 },
  { month: "T12", total: 41, electricity: 22, diesel: 10, gas: 5, transport: 3, waste: 1 },
];

// Scope breakdown (tCO2e/năm)
export const scopeBreakdown = {
  scope1: {
    total: 180,
    sources: [
      { name: "Diesel máy phát điện", value: 95, unit: "tCO2e" },
      { name: "Gas lò ép nhựa", value: 68, unit: "tCO2e" },
      { name: "Gas lò sấy nguyên liệu", value: 17, unit: "tCO2e" },
    ],
  },
  scope2: {
    total: 320,
    sources: [
      { name: "Điện lưới (sản xuất)", value: 265, unit: "tCO2e" },
      { name: "Điện lưới (văn phòng)", value: 55, unit: "tCO2e" },
    ],
  },
  scope3: {
    total: 95,
    sources: [
      { name: "Vận tải hàng hóa đầu ra", value: 48, unit: "tCO2e" },
      { name: "Vận tải nguyên liệu đầu vào", value: 32, unit: "tCO2e" },
      { name: "Chất thải rắn sản xuất", value: 15, unit: "tCO2e" },
    ],
  },
};

// Tổng hợp
export const summaryMetrics = {
  totalEmissions: 595, // tCO2e/năm
  baseline: 650,
  reduction: 55,
  reductionPct: 8.5,
  intensity: 2.38, // tCO2e / tấn sản phẩm
  intensityUnit: "tCO2e/tấn SP",
  production: 250, // tấn sản phẩm/năm
};

// Top 5 Carbon Hotspots
export const hotspots = [
  {
    rank: 1,
    source: "Điện lưới — Sản xuất",
    scope: "Scope 2",
    emissions: 265,
    pct: 44.5,
    trend: "down" as const, // so với tháng trước
    trendPct: 3.2,
    ef: "0.8712 kgCO2e/kWh",
    efSource: "Bộ TN&MT 2024",
  },
  {
    rank: 2,
    source: "Diesel máy phát điện",
    scope: "Scope 1",
    emissions: 95,
    pct: 15.9,
    trend: "up" as const,
    trendPct: 1.8,
    ef: "2.567 kgCO2e/lít",
    efSource: "IPCC AR6 2021",
  },
  {
    rank: 3,
    source: "Gas lò ép nhựa",
    scope: "Scope 1",
    emissions: 68,
    pct: 11.4,
    trend: "stable" as const,
    trendPct: 0.3,
    ef: "2.154 kgCO2e/kg LPG",
    efSource: "IPCC AR6 2021",
  },
  {
    rank: 4,
    source: "Vận tải hàng hóa",
    scope: "Scope 3",
    emissions: 48,
    pct: 8.1,
    trend: "down" as const,
    trendPct: 5.0,
    ef: "0.1195 kgCO2e/tkm",
    efSource: "GLEC 2023",
  },
  {
    rank: 5,
    source: "Điện lưới — Văn phòng",
    scope: "Scope 2",
    emissions: 55,
    pct: 9.2,
    trend: "up" as const,
    trendPct: 2.1,
    ef: "0.8712 kgCO2e/kWh",
    efSource: "Bộ TN&MT 2024",
  },
];

// Donut chart data
export const donutData = [
  { name: "Scope 1", value: 180, color: "#10b981" },
  { name: "Scope 2", value: 320, color: "#06b6d4" },
  { name: "Scope 3", value: 95, color: "#8b5cf6" },
];
