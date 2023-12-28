interface WarningProps {
  message?: string;
}

export function Warning({ message }: WarningProps) {
  return (
    <span className="mb-1 text-sm font-normal text-red-500">{message}</span>
  );
}
