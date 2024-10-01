/**
 * Graph edge representation
 *
 * @class GraphEdge
 */
class GraphEdge {
  private from: string;
  private to: string;

  /**
   * Creates an instance of GraphEdge.
   *
   * @param {string} from
   * @param {string} to
   */
  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  /**
   * Get edge source
   *
   * @returns {string}
   */
  getFrom(): string {
    return this.from;
  }

  /**
   * Get edge destination
   *
   * @returns {string}
   */

  getTo(): string {
    return this.to;
  }
}

export default GraphEdge;
