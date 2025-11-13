interface WrapperProps {
   children: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => {
   return <>props.children</>;
};

export default Wrapper;
