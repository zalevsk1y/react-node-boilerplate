
module.exports.template = (title='No Title',preloadedState,content)=>{
    const script=`<script>window.__INIT_STATE__=${preloadedState!==undefined?JSON.stringify(preloadedState):{}}</script>`;
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>${title||'Page for tech test.'}</title>
                <meta charset="utf-8">
                <meta name="description" content="Page for tech test">
                <link href="public/images/favicon.png" rel="icon" type="image/png">
                <link href="public/css/style.css" rel="stylesheet" type="text/css">
            </head>
            <body>
                <div class="content-container">
                    <div class="content">
                        ${content||''}
                    </div>
                </div>
                ${scripts}
            </body>
            </html>`;

}

