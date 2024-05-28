type ActionBarProps = {
  title: string;
  children?: React.ReactElement | React.ReactNode;
};
function ActionBar({ title, children }: ActionBarProps) {
  return (
    <div style={{ margin: "10px" }}>
      <h1 style={{ marginBottom: "10px" }}>{title}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ActionBar;
