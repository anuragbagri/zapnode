import { TRPCReactProvider } from "@/trpc/client";
import "./globals.css";
/**
 * Root layout component that provides the global HTML structure and supplies a tRPC React context to all children.
 *
 * @param children - The React nodes to render inside the layout; these are wrapped by the tRPC provider.
 * @returns A JSX element with an <html lang="en"> root and a <body> where `children` are wrapped by `TRPCReactProvider`.
 */
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
        </TRPCReactProvider>
      </body>
    </html>
  );
}