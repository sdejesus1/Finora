import type { ReactNode } from "react";

import Sidebar from "./Sidebar";

type AppShellProps = {
    children: ReactNode;
};

export default function AppShell({
    children,
}: AppShellProps) {
    return (
        <div className="min-h-screen bg-[#f3f7f5]">
            <Sidebar />

            <main className="ml-[270px] min-h-screen p-8">
                {children}
            </main>
        </div>
    );
}