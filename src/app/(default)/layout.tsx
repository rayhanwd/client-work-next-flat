import type { Metadata } from "next";
import Header from "../components/header/Header";

export const metadata: Metadata = {
  title: "Next flat | Find your happy",
  description: "Generated by create next app",
};

export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header v={2}/>
      {children}
    </main>
  );
}
