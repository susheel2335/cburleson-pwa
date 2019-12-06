import { Component, h } from '@stencil/core';

import Prism from "prismjs"
import 'prismjs/components/prism-javascript.min.js';

import { BlogData } from '../../../services/blog-data';

import { EnvironmentConfigService } from '../../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');

@Component({
    tag: 'page-script-for-rotating-unity-game-object-90-degrees',
})
export class PageScriptForRotatingUnityGameObject90Degrees {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if(debug) {
            console.log('> PageScriptForRotatingUnityGameObject90Degrees.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substr(1);
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + EnvironmentConfigService.getInstance().get('siteName');
    }

componentDidLoad() {
        setTimeout(() => Prism.highlightAll(), 0)
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
                
                <h1>{this.header.title}</h1>
                
                <app-entry-meta header={this.header} />

<p>This Unity behavior script rotates the object it’s attached to by 90 degrees when the script’s rotate function is called. Just copy and paste the contents into a new JavaScript in Unity.</p>

        <pre><code class="language-javascript">{`#pragma strict
public var seconds: float = .2;
private var rotating = false;
function rotateObject (thisTransform : Transform, degrees : Vector3) {
    if (rotating) return;
    rotating = true;
    var startRotation : Quaternion = thisTransform.rotation;
    var endRotation : Quaternion = thisTransform.rotation * Quaternion.Euler(degrees);
    var t : float = 0.0;
    var rate : float = 1.0/seconds;
    while (t < 1.0) {
      t += Time.deltaTime * rate;
      thisTransform.rotation = Quaternion.Slerp(startRotation, endRotation, t);
      yield;
  }
  rotating = false;
}
function rotate() {
  rotateObject(transform, Vector3.forward*-90);
}`}</code></pre>

<p>One way to call the rotate function from some other script is as follows:</p>

<pre><code class="language-javascript">{`var cube : GameObject = GameObject.Find("Cube");
cube.SendMessage("rotate");`}</code></pre>

<p>Cheers!</p>

            </ion-content>

        ];
    }
}