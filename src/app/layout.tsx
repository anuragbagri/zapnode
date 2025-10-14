import { TRPCReactProvider } from "@/trpc/client";
import "./globals.css";
import { Toaster } from "sonner";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <TRPCReactProvider>
        {children}
        <Toaster/>
        </TRPCReactProvider>
      </body>
    </html>
  );
}