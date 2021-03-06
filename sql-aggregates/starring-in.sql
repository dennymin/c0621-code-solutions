select "categories"."name" as "Category",
count("filmCategory"."filmId")
from "categories"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."actorId" = 178
group by "categories"."name";
