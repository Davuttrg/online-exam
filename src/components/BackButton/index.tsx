import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <BiArrowBack cursor="pointer" size={24} onClick={() => navigate(-1)} />
  );
};
export default BackButton;
