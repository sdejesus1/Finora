import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

type AppShellProps = {
    children: ReactNode;
};

export default function AppShell({children}: AppShellProps) {
    return (
        <div className="min-h-screen bg-[#f3f7f5]">
            <Sidebar />

        <div className="ml-[270px] min-h-screen">
            <TopBar />

            <main className="p-8">
                {children}
            </main>
        </div>
    </div>
    );
}