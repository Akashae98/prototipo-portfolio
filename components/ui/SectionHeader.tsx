type SectionHeaderProps = {
  id: string;
  label: string;
  title: string;
  intro?: string;
};

export function SectionHeader({ id, label, title, intro }: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-3xl" id={id}>
      <p className="scan-label mb-4">{label}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-bone md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
