import { seedEvents } from "../entities/event/eventSeed";
import { seedUser } from "../entities/users/userSeed";

seedEvents()
  .then(() => console.log("Events seeded"))
  .catch(console.error);

seedUser()
  .then(() => console.log("Users seeded"))
  .catch(console.error);
