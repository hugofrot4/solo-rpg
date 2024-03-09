import { IBM_Plex_Serif } from "next/font/google";
import "@/styles/globals.css";

const ibm = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Solo RPG",
  description: "Sistema de RPG Solo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={ibm.className}>{children}</body>
    </html>
  );
}
