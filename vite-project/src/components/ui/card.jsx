// src/components/ui/card.jsx
import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`rounded-xl shadow-md bg-card text-card-foreground ${className}`}>
      {children}
    </div>
  );
}
