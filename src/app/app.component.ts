import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
import { Element } from './d3/namespaces/element.namespace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N,
          getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        let linkConfiguration:Element.Link.Configuration = new Element.Link.Configuration();
        linkConfiguration.visible = true;
        linkConfiguration.type = Element.Link.Types.WORK;

        this.links.push(new Link(i, i * m, linkConfiguration));
      }
    }
  }
}
