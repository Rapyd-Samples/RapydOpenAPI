export interface DisputeEvidence {
  description: string;
  documents: Array<{ note: string; document_name: string }>;
  merchant_submission_date: number;
  schema_submission_date: number;
}
