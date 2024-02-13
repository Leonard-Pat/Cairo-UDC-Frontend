import UdcInputs from "@/components/udc-inputs";
import Submission from "@/components/Submission";

export default function Home() {
  return (
    <main className="bg-[#040414] h-screen w-screen flex items-center justify-center ">
      <div className="flex flex-wrap items-center justify-between">
        <UdcInputs />
        <Submission />
      </div>
    </main>
  );
}
