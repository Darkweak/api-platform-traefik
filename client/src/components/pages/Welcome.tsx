import React from 'react';
import { Layout } from '../Layout';
import { HOME } from '../Breadcrumb';
import { FadeInFromBottom } from '../Visible';

export const Welcome: React.FC = () => {
    return (
        <Layout pageName='pages.home.title' breadcrumb={[HOME]}>
            <div className="g--10 m--1">
                <div className="g--12">
                    <h3>Download</h3>
                    <p>Download the framework from Github.</p>
                    <a href="https://github.com/mildrenben/surface/archive/v1.02.zip" className="btn--raised btn--river">Download
                        SCSS</a>
                </div>
                <FadeInFromBottom classnames={'container'} delay={1}>
                    <div className="card g--4">
                        One
                    </div>
                    <div className="card g--4 nudge--left nudge--right">
                        Two
                    </div>
                    <div className="card g--4">
                        Three
                    </div>
                </FadeInFromBottom>
                <div className="g--12">
                    <h3>The Grid</h3>
                    <p>Become aquainted with the grid system and how it functions. <a href="docs/grid.html">Read the
                        documentation.</a></p>
                </div>
                <div className="container">
                    <FadeInFromBottom classnames="card g--4" delay={1}>
                        One
                    </FadeInFromBottom>
                    <FadeInFromBottom classnames="card g--4 nudge--left nudge--right" delay={2}>
                        Two
                    </FadeInFromBottom>
                    <FadeInFromBottom classnames="card g--4" delay={3}>
                        Three
                    </FadeInFromBottom>
                </div>
                <div className="g--12">
                    <h3>Documentation</h3>
                    <p>Read through the documentation of the components.</p>
                </div>
                <div className="g--12">
                    <h3>Variables</h3>
                    <p>Set the variables to your liking in the _variables file. Things like the color scheme, amount of grid
                        columns and spacing are yours to freely alter.</p>
                </div>
                <div className="g--12">
                    <h3>Gulp</h3>
                    <p>This step is optional. If you're familiar with <a href="http://gulpjs.com/">Gulp.js</a>, install the
                        dependencies outline in the gulpfile and use Gulp to compile your SCSS.</p>
                </div>
                <div className="g--12">
                    <h3>Link to the CSS</h3>
                    <p>Once you've had a play with the variables, link to your CSS file from your HTML file.</p>
                    <pre>
					<code className="lang-html">
&lt;link href=&quot;/css/surface_styles.css&quot;/ rel=&quot;stylesheet&quot;&gt;
					</code>
				</pre>
                </div>
                <div className="g--12">
                    <h3>Build!</h3>
                    <p>That's it! Go forth and build the website of your dreams!</p>
                </div>
            </div>
        </Layout>
    )
};
