import { DoubleDigitMetadata } from "@/constants/metadata";

export const metadata = DoubleDigitMetadata.services

export default function ServicesLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
