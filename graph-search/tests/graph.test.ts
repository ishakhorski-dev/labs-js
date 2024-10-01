import { describe, it, expect } from "vitest";
import Graph from "../graph";
import GraphNode from "../graph-node";
import GraphEdge from "../graph-edge";

describe("Graph class", () => {
  it("Should create a new graph", () => {
    const graph = new Graph([], []);
    expect(graph).toBeDefined();
  });

  it("Should return graph nodes", () => {
    const nodeA = new GraphNode("A", 0);
    const nodeB = new GraphNode("B", 1);
    const graph = new Graph([nodeA, nodeB], []);
    expect(graph.getNodes()).toEqual([nodeA, nodeB]);
  });

  it("Should return graph edges", () => {
    const edge = new GraphEdge("A", "B");
    const graph = new Graph([], [edge]);
    expect(graph.getEdges()).toEqual([edge]);
  });

  it("Should add a new node to the graph", () => {
    const graph = new Graph([], []);
    const node = new GraphNode("A", 0);
    graph.addNode(node);
    expect(graph.getNodes()).toEqual([node]);
  });

  it("Should add a new edge to the graph", () => {
    const graph = new Graph([], []);
    const edge = new GraphEdge("A", "B");
    graph.addEdge(edge);
    expect(graph.getEdges()).toEqual([edge]);
  });

  it("Should build adjacency list", () => {
    const nodeA = new GraphNode("A", 0);
    const nodeB = new GraphNode("B", 1);
    const edge = new GraphEdge("A", "B");
    const graph = new Graph([nodeA, nodeB], [edge]);
    expect(graph["adjacencyList"].get("A")).toEqual(["B"]);
  });

  it("Should build adjacency list with multiple edges", () => {
    const nodeA = new GraphNode("A", 0);
    const nodeB = new GraphNode("B", 1);
    const nodeC = new GraphNode("C", 2);
    const edgeAB = new GraphEdge("A", "B");
    const edgeAC = new GraphEdge("A", "C");
    const graph = new Graph([nodeA, nodeB, nodeC], [edgeAB, edgeAC]);
    expect(graph["adjacencyList"].get("A")).toEqual(["B", "C"]);
  });

  it("Should execute depth-first search", () => {
    const nodeA = new GraphNode("A", 0);
    const nodeB = new GraphNode("B", 1);
    const nodeC = new GraphNode("C", 2);
    const nodeD = new GraphNode("D", 3);
    const nodeE = new GraphNode("E", 4);
    const edgeAB = new GraphEdge("A", "B");
    const edgeAC = new GraphEdge("A", "C");
    const edgeBD = new GraphEdge("B", "D");
    const edgeCE = new GraphEdge("C", "E");
    const graph = new Graph(
      [nodeA, nodeB, nodeC, nodeD, nodeE],
      [edgeAB, edgeAC, edgeBD, edgeCE],
    );
    const result = graph.dfs("A");
    expect(result).toEqual(["A", "B", "D", "C", "E"]);
  });

  it("Should execute breadth-first search", () => {
    const nodeA = new GraphNode("A", 0);
    const nodeB = new GraphNode("B", 1);
    const nodeC = new GraphNode("C", 2);
    const nodeD = new GraphNode("D", 3);
    const nodeE = new GraphNode("E", 4);
    const edgeAB = new GraphEdge("A", "B");
    const edgeAC = new GraphEdge("A", "C");
    const edgeBD = new GraphEdge("B", "D");
    const edgeCE = new GraphEdge("C", "E");
    const graph = new Graph(
      [nodeA, nodeB, nodeC, nodeD, nodeE],
      [edgeAB, edgeAC, edgeBD, edgeCE],
    );
    const result = graph.bfs("A");
    expect(result).toEqual(["A", "B", "C", "D", "E"]);
  });
});
