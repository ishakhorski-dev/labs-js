import { describe, it, expect } from "vitest";
import GraphEdge from "../graph-edge";

describe("GraphEdge class", () => {
  it("Should create a new graph edge", () => {
    const edge = new GraphEdge("A", "B");
    expect(edge).toBeDefined();
  });

  it("Should return edge source", () => {
    const edge = new GraphEdge("A", "B");
    expect(edge.getFrom()).toBe("A");
  });

  it("Should return edge destination", () => {
    const edge = new GraphEdge("A", "B");
    expect(edge.getTo()).toBe("B");
  });
});
