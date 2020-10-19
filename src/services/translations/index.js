import combineJson from "../utils/combineJsonFiles";

import home_fr from "./home/fr.json";
import home_en from "./home/en.json";
import leads_fr from "./leads/fr.json";
import leads_en from "./leads/en.json";

const messages_fr = combineJson({ home_fr, leads_fr });
const messages_en = combineJson({ home_en, leads_en });

export { messages_fr, messages_en };
