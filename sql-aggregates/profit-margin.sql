select "films"."title",
"films"."description",
"films"."rating",
sum("payments"."amount")"Profits",
count("rentals"."inventoryId") as "",
"films"."replacementCost" as "Single Replacement Cost",
count("inventory"."filmId") as " Current Inventory",
"films"."replacementCost" * count("inventory"."filmId") as "Total Cost"
from "films"
join "inventory" using ("filmId")
join "rentals" using ("inventoryId")
join "payments" using ("rentalId")
group by "films"."filmId";
--order by sum("payments"."amount") - ("films"."replacementCost") desc;
