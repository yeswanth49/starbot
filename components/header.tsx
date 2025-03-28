import Link from "next/link";
import { DeployButton } from "./deploy-button";
import { PecUpIcon } from "./icons";

export const Header = () => {
  return (
    <div className="fixed inset-0 h-16 right-0 left-0 top-0 bg-white dark:bg-zinc-950 z-50">
      <div className="flex justify-between items-center p-4 h-full">
        <div className="flex flex-row items-center gap-2 shrink-0">
          <span className="flex flex-row items-center gap-2">
            <Link className="flex flex-row items-end gap-2" target="_blank" href="https://pecup.in">
              <PecUpIcon size={45} />
            </Link>
          </span>
        </div>
        <div className="flex flex-row items-center gap-2 shrink-0">
          <DeployButton />
        </div>
      </div>
    </div>
  );
};