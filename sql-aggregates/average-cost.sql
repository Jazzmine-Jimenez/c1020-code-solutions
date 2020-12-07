select "title" as "film",
        avg("replacementCost") as "averageReplacement"
from "films"
group by "title";
returning *;
