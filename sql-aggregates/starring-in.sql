select "actors"."firstName",
        "categories"."name" as "category",
       count("categories"."categoryId") as "totalCategories"
from "actors"
join "castMembers" using ("actorId")
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "actors"."firstName" = 'Lisa'
group by "actors"."firstName", "categories"."name";
