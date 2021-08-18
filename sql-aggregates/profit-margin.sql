select "films"."title",
sum("payments"."amount")
from "films"
join "inventory" using ("filmId")
join "rentals" using ("inventoryId")
join "payments" using ("rentalId")
group by "films"."title"
order by sum("payments"."amount") desc
limit 5;
