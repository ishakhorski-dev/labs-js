import { describe, it, expect } from "vitest";
import GraphNode from "../graph-node";

describe("GraphNode class", () => {
  it("Should create a new graph node", () => {
    const node = new GraphNode("A", 1);
    expect(node).toBeDefined();
  });

  it("Should return node label", () => {
    const node = new GraphNode("A", 1);
    expect(node.getLabel()).toBe("A");
  });

  it("Should return node value", () => {
    const node = new GraphNode("A", 1);
    expect(node.getValue()).toBe(1);
  });
});
