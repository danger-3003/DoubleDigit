import { DoubleDigitMetadata } from "@/constants/metadata";

export const metadata = DoubleDigitMetadata.about

export default function AboutLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
