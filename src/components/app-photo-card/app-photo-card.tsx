import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'app-photo-card',
    styleUrl: 'app-photo-card.css'
})
export class AppPhotoCard {

    @Prop() imagePath: string;
    @Prop() item: any;

    createSubTitle(item) {
        // innerHTML used so that HTML encoded chars get rendered...
        if (item.subtitle) {
            return <ion-card-subtitle innerHTML={item.subtitle}></ion-card-subtitle>;
        }
    }

    createTitle(item) {
        if (item.title) {
            return <ion-card-title innerHTML={item.title}></ion-card-title>;
        }
    }

    render() {

        var smallImagePath = this.imagePath + this.item.id + '-sm.jpg';
        var hiResImagePath = this.imagePath + this.item.id + '.jpg';

        return (
            <ion-card>
                <ion-img src={smallImagePath}></ion-img>
                <ion-card-header>
                    {this.createSubTitle(this.item)}
                    {this.createTitle(this.item)}
                </ion-card-header>
                <ion-card-content>
                    <div innerHTML={this.item.content}></div>
                    <p><a href={hiResImagePath} class="button">View hi-res image...</a></p>
                    <p>ID: {this.item.id}</p>
                </ion-card-content>
            </ion-card>
        );
    }
}