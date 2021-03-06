import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'app-entry-meta',
    shadow: false
})
export class AppPhotoCard {

    @Prop() header: any;

    renderLastModified() {
        if (this.header && this.header.dateModified) {
            if(this.header.dateModified !== this.header.datePublished) {
                return <span>&nbsp;(last modified <time>{new Date(this.header.dateModified).toDateString()}</time>)</span>;
            }
        }
    }

    render() {
        return (
            <p class="entry-meta">
            Posted on <time>{new Date(this.header.datePublished).toDateString()}</time>
            {this.renderLastModified()}
            </p>
        );
    }
}