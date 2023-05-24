import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="py-6 bg-black">
      <div className="container mx-auto flex justify-center text-white">
        <p className="font-light text-white">
          &copy; {`${new Date().getFullYear()} - made with ☕ by me 😎`}
        </p>
      </div>
    </footer>
  );
}

export default Footer