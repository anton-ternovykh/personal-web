function SideBarSectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-montserrat font-bold text-theme-accent mb-3 border-b-2 pb-1 border-theme-border">
      {title}
    </h2>
  );
}

export default SideBarSectionTitle;
