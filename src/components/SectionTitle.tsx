interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
  </div>
);

export default SectionTitle;
