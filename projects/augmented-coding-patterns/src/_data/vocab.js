import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function () {
  const vocabPath = path.join(__dirname, "..", "vocab.jsonld");
  const vocabData = JSON.parse(fs.readFileSync(vocabPath, "utf-8"));

  // Extract namespace from context
  const namespace = vocabData["@context"].acp;

  // Helper to get local name from URI (e.g., "acp:Pattern" → "Pattern")
  const getLocalName = (uri) => {
    if (!uri) return "";
    if (typeof uri === "object" && uri["@id"]) {
      uri = uri["@id"];
    }
    if (uri.startsWith("acp:")) {
      return uri.replace("acp:", "");
    }
    // Handle full URIs
    if (uri.includes("#")) {
      return uri.split("#").pop();
    }
    return uri;
  };

  // Helper to normalize domain/range to array of local names
  const normalizeRefs = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) {
      return value.map((v) => getLocalName(v));
    }
    return [getLocalName(value)];
  };

  // Helper to get OWL type badge text
  const getPropertyType = (types) => {
    if (!Array.isArray(types)) types = [types];
    if (types.includes("owl:SymmetricProperty")) return "Symmetric Property";
    if (types.includes("owl:ObjectProperty")) return "Property";
    return "Property";
  };

  // Separate classes and properties from the graph
  const classes = [];
  const properties = [];

  for (const term of vocabData["@graph"]) {
    const types = Array.isArray(term["@type"])
      ? term["@type"]
      : [term["@type"]];
    const localName = getLocalName(term["@id"]);

    const termData = {
      id: localName,
      uri: term["@id"],
      label: term["rdfs:label"],
      comment: term["rdfs:comment"],
      types: types,
    };

    if (types.includes("rdfs:Class") || types.includes("owl:Class")) {
      classes.push(termData);
    } else if (
      types.includes("rdf:Property") ||
      types.some((t) => t.includes("Property"))
    ) {
      properties.push({
        ...termData,
        propertyType: getPropertyType(types),
        domain: normalizeRefs(term["rdfs:domain"]),
        range: normalizeRefs(term["rdfs:range"]),
      });
    }
  }

  return {
    namespace,
    label: vocabData["rdfs:label"],
    comment: vocabData["rdfs:comment"],
    version: vocabData["owl:versionInfo"],
    classes,
    properties,
  };
}
