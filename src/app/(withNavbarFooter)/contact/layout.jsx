import { DoubleDigitMetadata } from "@/constants/metadata";

export const metadata = DoubleDigitMetadata.contact

export default function ContactLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
