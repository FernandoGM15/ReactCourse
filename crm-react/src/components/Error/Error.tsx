interface ErrorPropsI {
  children: React.ReactNode | React.ReactNode[];
}
const Error = ({ children }: ErrorPropsI) => {
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
      {children}
    </div>
  );
};
export default Error;
