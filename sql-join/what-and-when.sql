select "films"."releaseYear",
        "categories"."name" as "category"
from "categories"
join "filmCategory" using ("categoryId")
join "films" using ("filmId")
where "films"."title" = 'Boogie Amelie';
returing *;
