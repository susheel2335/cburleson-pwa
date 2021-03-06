import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
	tag: 'page-sparql-examples-limit',
})
export class PageSparqlExamplesLimit {

	header: any;

	async componentWillLoad() {
		let id = extractIdFromDocumentPath();
		this.header = BlogData.getPostHeaderById(id);
	}

	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>Blog</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content class="ion-padding">
				<ion-grid>
					<ion-row>
						<ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
							<h1>{this.header.title}</h1>
							<app-entry-meta header={this.header} />
							<h3>Limit the number of results returned</h3>
							<deckgo-highlight-code><code slot="code">{`PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
PREFIX bc: <http://www.base22.com/ontologies/2010/5/bc.owl#>

SELECT *
WHERE {
  ?subject bc:hasEmployer <http://www.base22.com/ontologies/2010/5/my-contacts.owl#IBM> .
           ?subject bc:hasBusinessEmail ?email .
} LIMIT 5`}</code></deckgo-highlight-code>
							<p>The <code>LIMIT</code> keyword is used after the <code>WHERE</code> clause, followed by a numerical value. In this case, of course, only 5 results are returned.</p>
							<ul>
								<li><code>LIMIT</code> is a solution modifier that limits the number of rows returned from a query. SPARQL has two other solution modifiers:
								<ul>
										<li><code>ORDER BY</code> for sorting query solutions on the value of one or more variables</li>
										<li><code>OFFSET</code>, used in conjunction with <code>LIMIT</code> and <code>ORDER BY</code> to take a slice of a sorted solution set (e.g. for paging)</li>
									</ul>
								</li>
							</ul>

						</ion-col>
						<ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
						</ion-col>
					</ion-row>
				</ion-grid>

			</ion-content>


		];
	}
}