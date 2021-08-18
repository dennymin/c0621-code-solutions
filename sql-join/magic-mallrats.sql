select "c"."firstName" as "Customer First Name",
"c"."lastName" as "Customer Last Name"
from "customers" as "c"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
where "films"."filmId" = 547;
-- magic mallrats film id is 547
