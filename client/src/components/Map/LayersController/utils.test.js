import nock from "nock";
import { extractLayerGeoJson, buildCollectionGeoJson } from "./utils";

const BaseUrl = "http://localhost:3001";

test("extractLayerGeoJson", () => {
  const mockLayer = {
    options: {
      color: "#ff6900",
    },
    toGeoJSON: () => {
      return {
        properties: {}
      };
    },
  };
  const mockGeoJson = extractLayerGeoJson(mockLayer);
  expect(mockGeoJson.properties.color).toBe("#ff6900");
});

test("buildCollectionGeoJson", async () => {
  nock(BaseUrl)
    .get(`/collections/1/features`)
    .reply(200, [
      {
        id: 135,
        collection_id: 1,
        properties: { color: "#ff6900" },
        geometry: { type: "Polygon" },
      },
      {
        id: 136,
        collection_id: 1,
        properties: { color: "#00d084" },
        geometry: { type: "LineString" },
      },
    ]);

  const dummyCollection = { id: 1 };
  const dummyGeoJson = await buildCollectionGeoJson(dummyCollection);
  expect(dummyGeoJson.type).toBe("FeatureCollection");
  expect(dummyGeoJson.features[0].type).toBe("Feature");
  expect(dummyGeoJson.features[0].properties.color).toBe("#ff6900");
  expect(dummyGeoJson.features[0].geometry.type).toBe("Polygon");
  expect(dummyGeoJson.features[1].type).toBe("Feature");
  expect(dummyGeoJson.features[1].properties.color).toBe("#00d084");
  expect(dummyGeoJson.features[1].geometry.type).toBe("LineString");
});
