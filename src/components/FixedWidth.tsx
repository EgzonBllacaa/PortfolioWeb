const FixedWidth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl w-full mx-auto bg-transparent">{children}</div>
  );
};

export default FixedWidth;
