/**
 * Graph node representation
 *
 * @class GraphNode
 */
class GraphNode {
  private label: string;
  private value: number;

  /**
   * Creates an instance of GraphNode.
   * @param {string} label
   * @param {number} data
   */
  constructor(label: string, value: number) {
    this.label = label;
    this.value = value;
  }

  /**
   * Get node label
   *
   * @returns {string}
   */
  getLabel(): string {
    return this.label;
  }

  /**
   * Get node value
   *
   * @returns {number}
   */
  getValue(): number {
    return this.value;
  }
}

export default GraphNode;
