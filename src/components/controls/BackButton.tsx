"use client";

import { Button } from "@/components/ui/button";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router";

interface BackButtonProps {
  label?: string;
  className?: string;
}

const BackButton = ({ label = "Back", className }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className={`my-12 ${className || ""}`}>
      <Button variant="outline" onClick={() => navigate(-1)}>
        <LuArrowLeft />
        {label}
      </Button>
    </div>
  );
};

export default BackButton;
