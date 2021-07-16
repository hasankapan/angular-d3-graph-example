import { Node } from './';
import { Element } from '../namespaces/element.namespace'

export class Link implements d3.SimulationLinkDatum<Node> {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;

  // must - defining enforced implementation properties
  source: Node | string | number;
  target: Node | string | number;
  configuration?: Element.Link.Configuration;

  constructor(source, target, configuration) {
    this.source = source;
    this.target = target;
    this.configuration = configuration;
  }
}
