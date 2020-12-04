select "storeId",
      count("inventoryId") as "totalDVDs"
from "inventory"
join "films" using ("filmId")
group by "storeId";
