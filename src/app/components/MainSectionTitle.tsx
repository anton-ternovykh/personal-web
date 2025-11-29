function MainSectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-theme-primary mb-4 border-b-4 border-theme-border pb-2">
      {title}
    </h2>
  );
}

export default MainSectionTitle;
