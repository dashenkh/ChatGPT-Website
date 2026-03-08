export type TenderRecord = {
  id: string;
  invitationNumber?: string;
  tenderCode?: string;
  tenderName?: string;
  budgetGovernorName?: string;
  budgetEntityName?: string;
  tenderTypeName?: string;
  fundName?: string;
  ruleName?: string;
  totalBudget?: number | string | null;
  yearBudget?: number | string | null;
  publishDate?: string;
  receiveDate?: string;
  openDate?: string;
  docStatusName?: string;
  isSimpleElectronic?: boolean;
  detailUrl?: string;
};

export type TenderApiResponse = {
  total: number;
  page: number;
  perPage: number;
  year: number | string;
  source: string;
  items: TenderRecord[];
  warning?: string;
};
