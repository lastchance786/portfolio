export type Certification = {
  title: string;
  issuer: string;
  category: string;
  issued?: string;
  url: string;
  featured: boolean;
};

// Replace the sample titles below with the exact titles from your certificates.
// Each certificate may use its own public Google Drive file link or LinkedIn credential link.
export const certifications: Certification[] = [
  { title: "Add your featured Power BI certificate", issuer: "LinkedIn Learning", category: "Business Intelligence", url: "https://drive.google.com/drive/folders/14kc5Rkn2UbXstWtN2yl160mUUynBJCev", featured: true },
  { title: "Add your featured Tableau certificate", issuer: "LinkedIn Learning", category: "Data Visualization", url: "https://drive.google.com/drive/folders/14kc5Rkn2UbXstWtN2yl160mUUynBJCev", featured: true },
  { title: "Add your featured SQL certificate", issuer: "LinkedIn Learning", category: "Data", url: "https://drive.google.com/drive/folders/14kc5Rkn2UbXstWtN2yl160mUUynBJCev", featured: true },
  { title: "Add your featured Snowflake certificate", issuer: "LinkedIn Learning", category: "Cloud Data", url: "https://drive.google.com/drive/folders/14kc5Rkn2UbXstWtN2yl160mUUynBJCev", featured: true },
  { title: "Add your featured Python certificate", issuer: "LinkedIn Learning", category: "Programming", url: "https://drive.google.com/drive/folders/14kc5Rkn2UbXstWtN2yl160mUUynBJCev", featured: true },
  { title: "Add your featured Analytics certificate", issuer: "LinkedIn Learning", category: "Analytics", url: "https://drive.google.com/drive/folders/14kc5Rkn2UbXstWtN2yl160mUUynBJCev", featured: true }
];
