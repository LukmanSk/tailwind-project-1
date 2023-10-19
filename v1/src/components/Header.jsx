import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
    <div className="wrapper mx-auto max-w-[75rem] flex justify-center items-center py-4">
      <div className="menu">
        <AiOutlineMenu className="text-[1.625rem]" />
      </div>
    </div>
  </header>
  )
}

export default Header