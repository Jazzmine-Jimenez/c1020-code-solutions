UPDATE "actors"
SET "actorId" = 15,
    "firstName" = 'Baby',
    "lastName" = 'Yoda'
WHERE "actorId" = 15
returning *;
