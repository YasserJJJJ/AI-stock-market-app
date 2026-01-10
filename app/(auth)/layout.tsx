// app/(auth)/layout.tsx
export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import { getAuth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user) redirect("/");

  return (
    <div className="auth-container">
      <div className="auth-side">
        <Link href="/" className="auth-logo">
          <Image src="/assets/icons/logo.svg" alt="logo" width={36} height={36} />
          <h1 className="text-2xl font-bold text-white">Signalist</h1>
        </Link>

        <div className="auth-body">{children}</div>

        <div className="auth-footer">
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} Signalist. All rights reserved.
          </p>
        </div>
      </div>

      <div className="auth-bg" />
    </div>
  );
};

export default Layout;
