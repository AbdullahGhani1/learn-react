import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}

      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-dismiss="alert"
        aria-label="Close"
      />
    </div>
  );
};

export default Alert;
