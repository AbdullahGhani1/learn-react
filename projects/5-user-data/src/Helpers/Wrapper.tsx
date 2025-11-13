interface WrapperProps {
   children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
   return <>{children}</>;
};

export default Wrapper;
