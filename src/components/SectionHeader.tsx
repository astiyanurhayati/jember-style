interface SectionHeaderProps {
  title: string;
  linkText: string;
  linkHref: string;
}

export const SectionHeader = ({ title, linkText, linkHref }: SectionHeaderProps) => {
  return (
    <div className="border-y border-border bg-secondary py-5 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{title}</span>
        <a
          href={linkHref}
          className="text-[10px] font-bold uppercase tracking-widest border-b border-border hover:border-foreground pb-0.5 transition-colors"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};
