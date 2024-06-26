import "@/app/ui/global.css";
import clsx from "clsx";
import { inter, lusitana } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, lusitana.variable, "antialiased")}>{children}</body>
    </html>
  );
}
