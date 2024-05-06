import { formatCurrency } from "@/app/_helpers/price";
import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px] cursor-pointer space-y-3">
      <div className="relative h-[133px] w-full">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="rounded-lg object-cover shadow-md"
          fill
        />
        <div className="absolute left-2 top-2 flex items-center gap-2 rounded-full bg-white px-2 py-[2px] text-xs font-semibold">
          <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
          <span>5.0</span>
        </div>
        <Button
          size="icon"
          className="absolute right-2 top-2 rounded-full bg-gray-700"
        >
          <HeartIcon className="h-fit w-fit fill-white" size={16} />
        </Button>
      </div>
      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        <div className="flex gap-3 ">
          <div className="flex items-center gap-1">
            <BikeIcon size={14} className="text-primary" />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Gratuito"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <TimerIcon size={14} className="text-primary" />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
