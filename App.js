/**
 * <div>
 *  <div>
 *      <h1> Welcome to react </h1> 
 *  <div>
 * </div>
 * 
 */

const child = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},React.createElement('h1',{id: "header"},'This is the header')));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(child);