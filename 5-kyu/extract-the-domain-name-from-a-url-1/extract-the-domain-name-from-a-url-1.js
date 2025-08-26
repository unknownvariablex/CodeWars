function domainName(url){
  //check to see if protocol exists and add if it doesn't 
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
​
    url = 'http://' + url;
​
  }
  // make a new url object 
  const myUrl = new URL(url);
  //grab just the host name.  this includes 
  // the www and TLD
  const domainArray = myUrl.hostname.split(".");
  let result = "";
  //get the domain name.  skip www if present
  if (domainArray[0] == "www"){
    result = domainArray[1];
    }else {
    result = domainArray[0];
      }
  return result;
  
}