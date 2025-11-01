import { Button } from "../ui/button";
import { NavLink } from "react-router";
import { LuArrowLeft } from "react-icons/lu";

interface ItemNotFoundProps {
  title: string
  description: string
  redictLink?: string
}

const ItemNotFound = ({ title, description, redictLink = "/" }: ItemNotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-muted-foreground mb-8">
        {description}
      </p>
      <Button asChild>
        <NavLink to={redictLink}>
          <LuArrowLeft />
          Back to Home
        </NavLink>
      </Button>
    </div>
  );
};

export default ItemNotFound;
