import pythonLogo from "@/assets/python-logo.png";

const PythonIcon = ({ className }: { className?: string }) => (
  <img src={pythonLogo} alt="Python" className={`bg-transparent object-contain ${className}`} />
);

export default PythonIcon;
