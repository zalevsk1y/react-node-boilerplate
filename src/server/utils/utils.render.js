const React =require("React");  
const ReactDOMServer=require("react-dom/server");
const {Provider}=require("react-redux");
const configureStore=require("../redux/configureStore.js");
const App=require("../client/App.js");

module.exports.render=(initialState)=>{
    const store=configureStore(initialState);
    const content=ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider> 
    );
    const preloadedState=store.getState();
    return {preloadedState, content};

}