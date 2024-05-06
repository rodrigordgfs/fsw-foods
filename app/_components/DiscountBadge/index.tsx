import { Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";

interface DiscountBadgeProps {
  product: Pick<Product, "discountPercentage">;
}

const DiscountBadge = ({ product }: DiscountBadgeProps) => {
  return (
    <div className="flex items-center gap-2 rounded-full bg-primary px-2 py-[2px] text-xs font-semibold text-primary-foreground">
      <ArrowDownIcon size={12} />
      <span>{product.discountPercentage}%</span>
    </div>
  );
};

export default DiscountBadge;
