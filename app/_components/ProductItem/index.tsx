import {
  calculateProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price";
import { Prisma } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute left-2 top-2 flex items-center gap-2 rounded-full bg-primary px-2 py-[2px] text-xs font-semibold text-primary-foreground">
            <ArrowDownIcon size={12} />
            <span>{product.discountPercentage}%</span>
          </div>
        )}
      </div>
      <div>
        <h2 className="truncate text-sm font-medium">{product.name}</h2>
        <div className="flex items-center gap-1">
          <h3 className="font-semibold">
            {formatCurrency(Number(calculateProductTotalPrice(product)))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <span className="block text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
