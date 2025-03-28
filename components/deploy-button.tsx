import { Plus } from 'lucide-react';
import { Button } from './ui/button';

export const DeployButton = () => (
  <div className="flex items-center gap-4">
    <Button
      type="button"
      variant="secondary"
      className="rounded-xl bg-[#ff5733] pointer-events-auto"
      onClick={() => window.location.reload()}
    >
      <Plus size={18} className="text-black" />
      <span className="text-sm ml-2 text-black">
        New
      </span>
    </Button>
  </div>
);