import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="bg-primary container py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Jest | RTL | HookForm | Zod</h1>
        <ModeToggle />
      </div>
    </header>
  );
}
