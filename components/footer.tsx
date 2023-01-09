import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="py-6 bg-neutral-900">
      <div className="container mx-auto flex justify-center text-white">
        <p className="font-light text-stone-500">
          &copy; {`${new Date().getFullYear()} - made with ☕ by Jorge Araya`}
        </p>
      </div>
    </footer>
  );
}

export default Footer