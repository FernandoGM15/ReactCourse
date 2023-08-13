interface LayoutPropsI {
  children: React.ReactNode;
}
const AboutUsLayout = ({ children }: LayoutPropsI) => {
  return (
    <>
      <h1>From About us layout</h1>
      {children}
    </>
  );
};
export default AboutUsLayout;
