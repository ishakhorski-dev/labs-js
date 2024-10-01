import GraphNode from "./graph-node.ts";
import GraphEdge from "./graph-edge.ts";

/**
 * Graph representation
 *
 * @class Graph
 */
class Graph {
  private nodes: GraphNode[];
  private edges: GraphEdge[];
  private adjacencyList: Map<string, string[]>;

  /**
   * Creates an instance of Graph.
   *
   * @param {GraphNode[]} nodes
   * @param {GraphEdge[]} edges
   */
  constructor(nodes: GraphNode[], edges: GraphEdge[]) {
    this.nodes = nodes;
    this.edges = edges;
    this.adjacencyList = this.buildAdjacencyList();
  }

  /**
   * Get graph nodes
   *
   * @returns {GraphNode[]}
   */
  getNodes(): GraphNode[] {
    return this.nodes;
  }

  /**
   * Get graph edges
   *
   * @returns {GraphEdge[]}
   */
  getEdges(): GraphEdge[] {
    return this.edges;
  }

  /**
   * Add a new node to the graph
   *
   * @param {GraphNode} node
   */
  addNode(node: GraphNode): void {
    this.nodes.push(node);
    this.adjacencyList.set(node.getLabel(), []);
  }

  /**
   * Add a new edge to the graph
   *
   * @param {GraphEdge} edge
   */
  addEdge(edge: GraphEdge): void {
    this.edges.push(edge);

    const from = edge.getFrom();
    const to = edge.getTo();

    if (!this.adjacencyList.has(from)) {
      this.adjacencyList.set(from, []);
    }
    this.adjacencyList.get(from)!.push(to);
  }

  /**
   * Build an adjacency list from the nodes and edges.
   *
   * @private
   * @returns {Map<string, string[]>} The adjacency list.
   */
  private buildAdjacencyList(): Map<string, string[]> {
    const adjacencyList = new Map<string, string[]>();

    for (const node of this.nodes) {
      adjacencyList.set(node.getLabel(), []);
    }

    for (const edge of this.edges) {
      const from = edge.getFrom();
      const to = edge.getTo();
      if (adjacencyList.has(from)) {
        adjacencyList.get(from)!.push(to);
      } else {
        adjacencyList.set(from, [to]);
      }
    }
    return adjacencyList;
  }

  /**
   * Perform Depth-First Search (DFS) starting from a given node label.
   *
   * @param {string} startLabel
   * @returns {string[]} List of node labels in the order they were visited.
   */
  public dfs(startLabel: string): string[] {
    if (!this.nodes.some((node) => node.getLabel() === startLabel)) {
      throw new Error(`Start node ${startLabel} not found in the graph.`);
    }

    const adjacencyList = this.buildAdjacencyList();
    const visited = new Set<string>();
    const result: string[] = [];
    const stack: string[] = [];

    stack.push(startLabel);

    while (stack.length > 0) {
      const current = stack.pop()!;
      if (!visited.has(current)) {
        visited.add(current);
        result.push(current);
        const neighbors = adjacencyList.get(current) || [];

        for (let i = neighbors.length - 1; i >= 0; i--) {
          const neighbor = neighbors[i];
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
    return result;
  }

  /**
   * Perform Breadth-First Search (BFS) starting from a given node label.
   *
   * @param {string} startLabel
   * @returns {string[]} List of node labels in the order they were visited.
   */
  public bfs(startLabel: string): string[] {
    if (!this.nodes.some((node) => node.getLabel() === startLabel)) {
      throw new Error(`Start node ${startLabel} not found in the graph.`);
    }

    const adjacencyList = this.buildAdjacencyList();
    const visited = new Set<string>();
    const result: string[] = [];
    const queue: string[] = [];

    queue.push(startLabel);
    visited.add(startLabel);

    while (queue.length > 0) {
      const current = queue.shift()!;
      result.push(current);
      const neighbors = adjacencyList.get(current) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return result;
  }
}

export default Graph;
