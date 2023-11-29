import Header from "../components/header/Header";

export default function Ads({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header v={2}/>
      {children}
    </main>
  );
}
