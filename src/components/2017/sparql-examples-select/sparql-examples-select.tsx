import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-sparql-examples-select',
})
export class PageSparqlExamplesSelect {

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

                            <h2>Find all triples</h2>

                            <p>Use <code>SELECT</code> to signify you want to select certain information and <code>WHERE</code> to signify your conditions, restrictions, and filters. A <code>LIMIT</code> is used to avoid cracking the server on a large dataset.</p>

<deckgo-highlight-code><code slot="code">{`SELECT ?subject ?predicate ?object
WHERE {?subject ?predicate ?object} 
LIMIT 100`}</code></deckgo-highlight-code>

                            <h2>Find all same-subject triples by given subject</h2>

                            <p>By specifying only the subject in the pattern, we can return all triples that have that subject. When an individual entity is defined by a given subject URI, then this is a way to get all the properties for that entity.</p>

<deckgo-highlight-code><code slot="code">{`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?subject ?predicate ?object
WHERE {
    <http://codyburleson.com/hyperg/person/cody-burleson> ?predicate ?object .
} LIMIT 100`}</code></deckgo-highlight-code>

                            <p>Since the subject is known, you could also omit <code>?subject</code> from the <code>SELECT</code> line so that only the predicates and objects are returned.</p>

                            <h2>Find and order most used predicates</h2>

                            <deckgo-highlight-code><code slot="code">{`SELECT ?predicate (COUNT(*)AS ?frequency)
WHERE {?subject ?predicate ?object}
GROUP BY ?predicate
ORDER BY DESC(?frequency)
LIMIT 10`}</code></deckgo-highlight-code>

                            <h2>Select the top 100 nodes in the RDF graph</h2>

                            <p>RDF Rank is a <a href="http://ontotext.com/products/graphdb/" rel="nofollow">GraphDB</a> extension. It is similar to Page Rank and it identifies “important” nodes in an RDF graph based on their interconnectedness. It is accessed using the <code>rank:hasRDFRank</code> system predicate.</p>

                            <deckgo-highlight-code><code slot="code">{`PREFIX rank:<http://www.ontotext.com/owlim/RDFRank#>
SELECT ?n
WHERE {?n rank:hasRDFRank ?r }
ORDER BY DESC(?r)
LIMIT 100`}</code></deckgo-highlight-code>

                            <h2>Find anything with a label</h2>

                            <p>The following query will find all triples where subject and object are joined by <code>rdfs:label</code>. In other words, anything that has been defined as having a label.</p>

                            <deckgo-highlight-code><code slot="code">{`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?subject ?label
WHERE { ?subject rdfs:label ?label } LIMIT 100`}</code></deckgo-highlight-code>

                            <h2>Find instances by class with a label</h2>

                            <p>The following example query will get the labels of anything of the class type (<code>rdf:type</code>) Organization.</p>

                            <deckgo-highlight-code><code slot="code">{`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?subject ?label
WHERE {
    ?subject rdf:type <http://codyburleson.com/hyperg#Organization> .
    ?subject rdfs:label ?label
} LIMIT 100`}</code></deckgo-highlight-code>

                            <h2>Find all subjects with a given object property</h2>

                            <deckgo-highlight-code><code slot="code">{`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX bc: <http://www.base22.com/ontologies/2010/5/bc.owl#>
SELECT ?subject
WHERE { ?subject bc:hasEmployer <http://www.base22.com/ontologies/2010/5/my-contacts.owl#IBM> } LIMIT 100`}</code></deckgo-highlight-code>

                            <p>From my contacts ontology, I find all IBMers (i.e. the <code>hasEmployer</code> predicate points to the individual IBM, which is an object of type Organization).</p>

                            <h2>Find all classes</h2>

                            <deckgo-highlight-code><code slot="code">{ `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
 
 SELECT DISTINCT ?type
 WHERE {
     ?s a ?type.
 }`}</code></deckgo-highlight-code>

                            <p>The SPARQL keyword&nbsp;<strong>a</strong>&nbsp;is a shortcut for the common predicate <code>rdf:type</code>, giving the class of a resource.</p>

                            <h2>Find all classes with a given prefix</h2>

                            <deckgo-highlight-code><code slot="code">{`PREFIX bc: <http://base22.com/ont/bc#>
 
 SELECT DISTINCT ?type
 WHERE {
     ?subject a ?type.
     FILTER( STRSTARTS(STR(?type),str(bc:)) )
 }`}</code></deckgo-highlight-code>

                            <p>The SPARQL keyword <strong>a</strong> is a shortcut for the common predicate <code>rdf:type</code>, giving the class of a resource.</p>

                            <h2>Query from a particular graph on the web</h2>

                            <deckgo-highlight-code><code slot="code">{`PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX card: <http://www.w3.org/People/Berners-Lee/card#>
SELECT ?homepage
FROM <http://www.w3.org/People/Berners-Lee/card>
WHERE {
    card:i foaf:knows ?known .
    ?known foaf:homepage ?homepage .
}`}</code></deckgo-highlight-code>

                            <p>The <code>FROM</code> keyword lets us specify the target graph in the query itself.<br />Of interest also in the query shown above:<br />By using <code>?known</code> as an object of one triple and the subject of another, we traverse multiple links in the graph.</p>

                            <h2>Find subjects with a property value greater than</h2>

                            <p>Find me all landlocked countries with a population greater than 15 million</p>

                            <deckgo-highlight-code><code slot="code">{`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX type: <http://dbpedia.org/class/yago/>
PREFIX prop: <http://dbpedia.org/property/>
SELECT ?country_name ?population
WHERE {
    ?country a type:LandlockedCountries ;
    rdfs:label ?country_name ;
    prop:populationEstimate ?population .
    FILTER (?population > 15000000) .
}`}</code></deckgo-highlight-code>

                            <p>You can try this one at the <a href="http://dbpedia.org/sparql" rel="nofollow">DBPedia SPARQL endpoint</a>.</p>
                            <ul>
                                <li><code>FILTER</code> constraints use boolean conditions to filter out unwanted query results.</li>
                                <li>Shortcut: a semicolon (;) can be used to separate two triple patterns that share the same subject. (<code>?country</code> is the shared subject above.)</li>
                                <li><code>rdfs:label</code> is a common predicate for giving a human-friendly label to a resource.</li>
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
