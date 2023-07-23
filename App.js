/**
 * <div>
 *  <div>
 *      <h1> Welcome to react </h1> 
 *      <h2> Sibling child </h2>
 *  <div>
 * </div>
 * 
 */

const child = React.createElement
('div',{id:"parent"},
React.createElement('div',{id:"child"},
[React.createElement('h1',{id: "header"},'This is the header'),React.createElement('h2',{},"This is sibling child")]));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(child);