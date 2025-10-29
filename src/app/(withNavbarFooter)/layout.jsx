import { DoubleDigitMetadata } from "@/constants/metadata";

export const metadata = DoubleDigitMetadata.homepage

export default function HomeLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
