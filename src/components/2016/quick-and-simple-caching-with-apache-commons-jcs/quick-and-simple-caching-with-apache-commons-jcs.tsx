import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';
import '@deckdeckgo/highlight-code';

@Component({
    tag: 'page-quick-and-simple-caching-with-apache-commons-jcs',
})
export class PageQuickAndSimpleCachingWithApacheCommonsJcs {

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

                            <p>Need a quick and easy caching system for your web app? Don’t you dare roll your own. And don’t even think about doing some kind of quick and dirty HashMap. Setting up a simple cache with <a href="https://commons.apache.org/proper/commons-jcs/index.html">Commons JCS™</a>, is easy – you can have a basic&nbsp;<abbr title="Least Recently Used Cache (evicts least recently used entries)">LRU Cache</abbr>&nbsp;up and running in minutes. What’s more, the package is mature and sophisticated, so you can get into more advanced features when the need arises. But let’s take a look at a simple setup.</p>

                            <p>First, the Maven dependency…</p>

                            <deckgo-highlight-code language="xml"><code slot="code">{`<dependency>
     <groupId>org.apache.commons</groupId>
     <artifactId>commons-jcs-core</artifactId>
     <version>2.0-beta-1</version>
</dependency>`}</code></deckgo-highlight-code>

                            <p>Next, create the cache config file as follows. Name it cache.ccf and put it in your resources directory on the classpath. The first stanza is the default cache. The second is one I created, for example, to cache a list of people (active users) from an expensive API call into the cloud.</p>

                            <deckgo-highlight-code language="properties"><code slot="code">{`# DEFAULT CACHE REGION
jcs.default=DC
jcs.default.cacheattributes=org.apache.commons.jcs.engine.CompositeCacheAttributes
jcs.default.cacheattributes.MaxObjects=1000
jcs.default.cacheattributes.MemoryCacheName=org.apache.commons.jcs.engine.memory.lru.LRUMemoryCache
jcs.default.cacheattributes.UseMemoryShrinker=false
jcs.default.cacheattributes.MaxMemoryIdleTime=3600
jcs.default.cacheattributes.ShrinkerInterval=60
jcs.default.elementattributes=org.apache.commons.jcs.engine.ElementAttributes
jcs.default.elementattributes.IsEternal=false
jcs.default.elementattributes.MaxLife=21600
jcs.default.elementattributes.IdleTime=1800
jcs.default.elementattributes.IsSpool=true
jcs.default.elementattributes.IsRemote=true
jcs.default.elementattributes.IsLateral=true
 
# PRE-DEFINED CACHE REGIONS
jcs.region.peopleCache=DC
jcs.region.peopleCache.cacheattributes=org.apache.commons.jcs.engine.CompositeCacheAttributes
jcs.region.peopleCache.cacheattributes.MaxObjects=1000
jcs.region.peopleCache.cacheattributes.MemoryCacheName=org.apache.commons.jcs.engine.memory.lru.LRUMemoryCache
jcs.region.peopleCache.cacheattributes.UseMemoryShrinker=false
jcs.region.peopleCache.cacheattributes.MaxMemoryIdleTime=3600
jcs.region.peopleCache.cacheattributes.ShrinkerInterval=60
jcs.region.peopleCache.cacheattributes.MaxSpoolPerRun=500
jcs.region.peopleCache.elementattributes=org.apache.commons.jcs.engine.ElementAttributes
jcs.region.peopleCache.elementattributes.IsEternal=false`}</code></deckgo-highlight-code>

                            <p>You’ll need the following imports…</p>

                            <deckgo-highlight-code language="java"><code slot="code">{`import org.apache.commons.jcs.JCS;
import org.apache.commons.jcs.access.exception.CacheException;
import org.apache.commons.jcs.access.CacheAccess;`}</code></deckgo-highlight-code>

                            <p>Get a handle on the cache by name like this…</p>

                            <deckgo-highlight-code language="java"><code slot="code">{`// String is the cache key, the second param is whatever object type you're caching...
private CacheAccess<String, List<User>> cache = null;
 
public MyService() {
 
     try
     {
          cache = JCS.getInstance( "peopleCache" );
     }
     catch ( CacheException e )
     {
            LOG.error( String.format( "Problem initializing cache: %s", e.getMessage() ) );
     }
 
}`}</code></deckgo-highlight-code>

                            <p>Finally, here’s an example of a fetch method that attempts to get resources from the cache before going back to the expensive API client request.</p>

                            <deckgo-highlight-code language="java"><code slot="code">{`public List getActiveUsers() {
 
 // First, try to get the user list from the cache...
 List userList = cache.get("activeUserList");

 // If the userList does not exist in the cache, build it
 // from the repository request and stick it in the cache.
 if(userList == null) {

        UserCollection users = client.getUsers();
        userList = new ArrayList();

        for (User user : users)
        {
            if(user.isActive()) {
                userList.add(user);
            }
        }

        cache.put("activeUserList",userList);

    }

    return userList;

}`}</code></deckgo-highlight-code>

                            <p>That’s all you need to do to setup a cache in your web app fast. But if you’re wondering if Commons JCS™ has the chops to handle something more sophisticated, here’s something to ease your concerns. Beyond simply caching objects in memory, it provides numerous additional features:</p>
                            <ul>
                                <li>Memory management</li>
                                <li>Disk overflow (and defragmentation)</li>
                                <li>Thread pool controls</li>
                                <li>Element grouping</li>
                                <li>Minimal dependencies</li>
                                <li>Quick nested categorical removal</li>
                                <li>Data expiration (idle time and max life)</li>
                                <li>Extensible framework</li>
                                <li>Fully configurable runtime parameters</li>
                                <li>Region data separation and configuration</li>
                                <li>Fine grained element configuration options</li>
                                <li>Remote synchronization</li>
                                <li>Remote store recovery</li>
                                <li>Non-blocking “zombie” (balking facade) pattern</li>
                                <li>Lateral distribution of elements via HTTP, TCP, or UDP</li>
                                <li>UDP Discovery of other caches</li>
                                <li>Element event handling</li>
                                <li>Remote server chaining (or clustering) and failover</li>
                                <li>Custom event logging hooks</li>
                                <li>Custom event queue injection</li>
                                <li>Custom object serializer injection</li>
                                <li>Key pattern matching retrieval</li>
                                <li>Network efficient multi-key retrieval</li>
                            </ul>
                            <p>Before integrating Commons JCS™, be sure to check out possible cache features available on whatever platform you’re building for. For example, you might instead use the built-in DynaCache for IBM WebSphere or the IBM Data Cache for Bluemix. If nothing is already available on your platform, Commons JCS™ can be the way to go.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}