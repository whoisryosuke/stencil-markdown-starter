import { Component } from '@stencil/core';

@Component({
  tag: 'stencil-site',
  styleUrl: 'stencil-site.scss'
})
export class App {
  constructor() {}
  render() {
    return (
      <div class="app">
        <site-header />
        <div class="wrapper">
          <div class="pull-left">
            <site-menu />
          </div>
          <div class="pull-right">
            <stencil-router id="router">

              <stencil-route
                url="/"
                component="landing-page"
                router="#router"
                exact={true}
              />

              <stencil-route
                url="/demos"
                router="#router"
                component="demos-page"
              />

              <stencil-route
                url="/docs/intro"
                router="#router"
                component="document-component"
                componentProps={{
                  pages: ['intro/index.html', 'intro/why.html']
                }}
              />

              <stencil-route
                url="/docs/getting-started"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['start/index.html']
                }}
              />

              <stencil-route
                url="/docs/my-first-component"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['basics/my-first-component.html']
                }}
              />

              <stencil-route
                url="/docs/learning-jsx"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['basics/learning-jsx.html']
                }}
              />

              <stencil-route
                url="/docs/building-components"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['basics/building-components.html']
                }}
              />

              <stencil-route
                url="/docs/using-events"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['basics/using-events.html']
                }}
              />

              <stencil-route
                url="/docs/component-lifecycle"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['basics/component-lifecycle.html']
                }}
              />

              <stencil-route
                url="/docs/stencil-config"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['basics/stencil-config.html']
                }}
              />

              <stencil-route
                url="/docs/config"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['compiler/config.html']
                }}
              />

              <stencil-route
                url="/docs/server-side-rendering"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['advanced/ssr/index.html']
                }}
              />

              <stencil-route
                url="/docs/routing"
                component="document-component"
                router="#router"
                componentProps={{
                  pages: ['addons/stencil-router.html']
                }}
              />

            </stencil-router>
          </div>
        </div>
      </div>
    );
  }
}
