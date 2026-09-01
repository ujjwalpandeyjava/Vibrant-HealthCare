import { getAllDevices } from "@/lib/getDevices";
import SearchClient from "@/components/SearchClient";
import { Suspense } from "react";

export default async function SearchPage() {
  const devices = await getAllDevices();
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-on-surface dark:text-white">Loading...</div>}>
      <SearchClient initialDevices={devices} />
    </Suspense>
  );
}
