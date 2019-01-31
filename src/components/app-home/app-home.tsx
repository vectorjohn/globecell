import { Component } from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css',
    shadow: true
})
export class AppHome {


    render() {
        return (
            <div class='app-home'>
                <gc-viewport />

                <stencil-route-link url='/profile/stencil'>
                    <button>
                        Profile page
                    </button>
                </stencil-route-link>
            </div>
        );
    }
}
